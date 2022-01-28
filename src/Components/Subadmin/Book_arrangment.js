import React, { useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import axios from 'axios'
import Sub_nav from './Sub_nav'

function Book_arrangment() {
    const { id,stock} = useParams();
    // const{stock}= useParams();

    console.log("idd",id,stock);

    const [bookarrange, setbookarrange] = useState({ referanceid:'',shelfno: '' })
    
    

    const handlechange = (e) => {

        setbookarrange({ ...bookarrange, [e.target.name]: e.target.value })



    }

    

    



    const arrange_books = async () => {
        // console.log("bookarrange", bookarrange)
        
        
        await axios.post("http://localhost:3000/book_arrangement",{ bookarrange: bookarrange,id:id,stock:stock}).then((respose) => {

            alert(respose.data.message)


        })

        setbookarrange({

            referanceid: '', shelfno: ''


        })



    }



    return (
        <div>
            <Sub_nav/>
            <div className='container'>



                <div className='main'>

                    <div>
                        

                    <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Referance ID</h6>
                            </div>
                            <div>
                                <input type="text" name="referanceid" value={bookarrange.referanceid} onChange={handlechange} />

                            </div>
                        </div>

                        
                        
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Shelf No</h6>
                            </div>
                            <div>
                                <input type="text" name="shelfno" value={bookarrange.shelfno} onChange={handlechange} />

                            </div>
                        </div>


                        <div className='input'>
                            <Link to={"/bookarrangement"}>
                            <Button variant="success" style={{ width: "300px", marginTop: "40px" }} onClick={arrange_books}>Arrange</Button>{' '}
                            </Link>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}





export default Book_arrangment
