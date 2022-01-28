import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Admin_nav from './Admin_nav'

import axios from 'axios'

function Addbooks() {
    const [bookdetails, setbookdetails] = useState({ bookname: '', author: '', edition: '', language: '', category: '', stock: '',arrangement:'pending' })
    const [image, setImage] = useState("");
    const [urll, setUrll] = useState("");
   
    const handlechange = (e) => {
       
            setbookdetails({ ...bookdetails, [e.target.name]: e.target.value })

        

    }

    const imagechange=(e)=>{
        setImage(e.target.files[0])
    }
const uploadimage=async()=>{

    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "fahisa")
    data.append("cloud_name", "dcdfmq79x")
    await axios.post("http://api.cloudinary.com/v1_1/dcdfmq79x/image/upload",data).then((res) => {
        console.log("response",res.data.url)
        setUrll(res.data.url)
       

    })

}
  


    const add_bookdetails = async () => {
        console.log("bookdetails", bookdetails)
       
           
         await axios.post("http://localhost:3000/add_books",{bookdetails:bookdetails,url:urll}).then((respose) => {

            alert  ( respose.data.message)
                
                
            })
        
        setbookdetails({

             bookname: '', author: '', edition: '', language: '', category: '', stock: ''

   
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
                                <button style={{marginLeft:"10px",borderRadius:"8px"}} onClick={uploadimage}>Upload</button>
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
                        {/* <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Current Stock</h6>
                            </div>
                            <div>
                                <input type="text" name="currentstock" value={bookdetails.currentstock} onChange={handlechange} />

                            </div>
                        </div> */}
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}> Stock</h6>
                            </div>
                            <div>
                                <input type="text" name="stock" value={bookdetails.stock} onChange={handlechange} />

                            </div>
                        </div>
                        {/* <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Shelf No</h6>
                            </div>
                            <div>
                                <input type="text" name="shelfno" value={bookdetails.shelfno} onChange={handlechange} />

                            </div>
                        </div> */}


                        <div className='input'>
                            {/* <Link to={"/admin"}> */}
                                <Button variant="success" style={{ width: "300px", marginTop: "40px" }} onClick={add_bookdetails}>Add Book</Button>{' '}
                            {/* </Link> */}

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}


export default Addbooks

