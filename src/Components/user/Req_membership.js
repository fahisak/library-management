import axios from 'axios'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav_bar from '../Navbar/Nav_bar'
import moment from'moment'

function Req_membership() {

    const [user_details,setuser_details]=useState({date:moment().format("MMM Do YY"),name:'',address:'',place:'',dob:'',password:'',email:'',phoneno:'',status:'pending',type:'user'})
    
    const handlechange=(e)=>{
        setuser_details({...user_details,[e.target.name]:e.target.value})
        // console.log("membership",user_details)

    }


    const take_membership=()=>{
        console.log(user_details)
        axios.post("http://localhost:3000/take_membership",user_details).then((res)=>{
        alert(res.data.message)
            
        })
    }

    return (
        <div>
            <Nav_bar/>
            <div className='container'>


                <div className='main'>

                    <div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Name</h6>
                            </div>
                            <div>
                                <input type="text" name="name" value={user_details.name} onChange={handlechange} />

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>

                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Address</h6>
                            </div>
                            <div>
                                {/* <Form.Group className="mb-3" controlId="formGridAddress1">
                                    {/* <Form.Label>Address</Form.Label> */}
                                {/* <Form.Control placeholder="Address" />
                                </Form.Group> */}
                                <input type="textarea" name="address" value={user_details.address} onChange={handlechange} />


                            </div>
                        </div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Place</h6>
                            </div>
                            <div>
                                <input type="text" name="place" value={user_details.place} onChange={handlechange} />

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>DOB</h6>
                            </div>
                            <div>
                                <input type="date" name="dob" value={user_details.dob} onChange={handlechange} />

                            </div>
                        </div>
                        

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Password</h6>
                            </div>
                            <div>

                                <input type="password" name="password" value={user_details.password} onChange={handlechange}/>

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Email</h6>
                            </div>
                            <div>
                                <input  type="email" name="email" value={user_details.email} onChange={handlechange} />

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Phone No</h6>
                            </div>

                            <div>
                                <input type="text" name="phoneno"  value={user_details.phoneno} onChange={handlechange}/>

                            </div>
                        </div>


                        

                        <div className='input'>
                            <Link to={"/user"}>
                            <Button variant="success" style={{ width: "300px", marginTop: "40px" }} onClick={take_membership}>Take Membership</Button>{' '}
                            </Link>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Req_membership
