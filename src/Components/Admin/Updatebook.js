
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Admin_nav from './Admin_nav'

import axios from 'axios'

function Updatebook() {
    //  alert("haii")

    const { state } = useLocation();
    console.log("idff", state);
    const { id, bookname, author, edition, language, stock, image, category } = state;
    // console.log("iddd",id,"bookname",bookname,"author",author,"edition",edition,"language",language,"stock",stock,"image",image,"category",category);



    const [bookdetails, setbookdetails] = useState({ bookname: bookname, image: image, author: author, edition: edition, language: language, category: category, stock: stock })
    const [Image, setImage] = useState("");
    const [urll, setUrll] = useState("");

    const handlechange = (e) => {
        setbookdetails({ ...bookdetails, [e.target.name]: e.target.value })

    }

    const imagechange = (e) => {
        setImage(e.target.files[0])
    }

    const uploadimage = async () => {

        const data = new FormData()
        data.append("file", Image)
        data.append("upload_preset", "fahisa")
        data.append("cloud_name", "dcdfmq79x")
        await axios.post("http://api.cloudinary.com/v1_1/dcdfmq79x/image/upload", data).then((res) => {
            console.log("response", res.data.url)
            setUrll(res.data.url)


            alert("image upload sucessfully")

        })


    }


    const update_bookdetails = () => {
        console.log("bookdetails", bookdetails)
        axios.post("http://localhost:3000/update_books", { bookdetails: bookdetails, id: id,url:urll }).then((respose) => {

            alert(respose.data.message)


        })


    }




    return (
        <div>
            <Admin_nav />
            <div className='container'>



                <div className='a_main'>

                    <div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Book Name</h6>
                            </div>
                            <div>
                                <input type="text" name="bookname" value={bookdetails.bookname} onChange={handlechange} />

                            </div>
                        </div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Image</h6>
                            </div>
                            <div>

                                <input type="file" name="image" onChange={imagechange} />

                            </div>
                            <div>
                                <button style={{marginLeft:"10px",borderRadius:"8px"}} onClick={uploadimage}>upload</button>
                            </div>
                            <div>
                                <img style={{height:"100px"}} src={image} alt="" />
                            </div>
                        </div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Author</h6>
                            </div>
                            <div>
                                <input type="text" name="author" value={bookdetails.author} onChange={handlechange} />

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Edition</h6>
                            </div>
                            <div>
                                <input type="text" name="edition" value={bookdetails.edition} onChange={handlechange} />

                            </div>
                        </div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Language</h6>
                            </div>
                            <div>

                                <select name="language" value={bookdetails.language} onChange={handlechange}>
                                    <option selected value=" ">select</option>
                                    <option value="English">English</option>
                                    <option value="Malayalam">Malayalam</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Arabic">Arabic</option>
                                </select>


                                {/* <input type="text" name="language" value={bookdetails.language} onChange={handlechange} /> */}

                            </div>
                        </div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Category</h6>
                            </div>
                            <div>
                                <select name="category" value={bookdetails.category} onChange={handlechange}>
                                    <option selected value=" ">select</option>

                                    <option value="art&music">Art & Music</option>
                                    <option value="biographies">Biographies</option>
                                    <option selected value="computers&tech">Computers&Tech</option>
                                    <option value="history">History</option>
                                </select>

                                {/* <input type="text" name="category" value={bookdetails.category} onChange={handlechange} /> */}

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}> Stock</h6>
                            </div>
                            <div>
                                <input type="text" name="stock" value={bookdetails.stock} onChange={handlechange} />

                            </div>
                        </div>



                        <div className='input'>
                            <Link to={"/book_details"}>
                                <Button variant="success" style={{ width: "300px", marginTop: "40px" }} onClick={update_bookdetails}>Update </Button>{' '}
                            </Link>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Updatebook
