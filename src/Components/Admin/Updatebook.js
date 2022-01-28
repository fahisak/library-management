
import React, { useState ,useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Admin_nav from './Admin_nav'

import axios from 'axios'

function Updatebook() {
    //  alert("haii")
    //  console.log("idff",props);
    const {state} = useLocation();
const { id } = state;
    


    
    
    const [bookdetails, setbookdetails] = useState({ bookname: '',image:'', author: '', edition: '', language: '', category: '', stock: '', shelfno: '' })
 
    const handlechange = (e) => {
        console.log("nameee",e.target.name)
        if(e.target.name === 'image'){

            setbookdetails({ ...bookdetails, [e.target.name]: e.target.files[0]})

        }
        else{
            setbookdetails({ ...bookdetails, [e.target.name]: e.target.value })

        }

    }

    

    const update_bookdetails = () => {
        console.log("bookdetails", bookdetails)
        axios.post("http://localhost:3000/update_books", bookdetails).then((respose) => {

         alert  ( respose.data.message)
				
			
        })
        // setbookdetails({

        //      bookname: '', image: '', author: '', edition: '', language: '', category: '', stock: '', shelfno: '' 

   
        // })

    
    }

    const getdata=()=>{
        axios.get("http://localhost:3000/getdata_update").then((res) => {

           console.log("getdata",res.data)
            // alert  ( res.data.message)
                   
               
           })

    }

 useEffect(() => {
    getdata()

   
}, [])






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

                                <input type="file" name="image" onChange={handlechange} />

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
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Shelf No</h6>
                            </div>
                            <div>
                                <input type="text" name="shelfno" value={bookdetails.shelfno} onChange={handlechange} />

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
