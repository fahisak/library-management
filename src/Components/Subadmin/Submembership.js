
    import axios from 'axios'
    import React, { useState } from 'react'
    import { Button } from 'react-bootstrap'
    import { Link } from 'react-router-dom'
    import Nav_bar from '../Navbar/Nav_bar'
    import moment from'moment'
import Sub_nav from './Sub_nav'


function Submembership() {

    const [subadmin_details,setsubadmin_details]=useState({date:moment().format("MMM Do YY"),name:'',address:'',place:'',dob:'',password:'',email:'',phoneno:'',status:'pending',type:'subadmin'})
    
    const handlechange=(e)=>{
        setsubadmin_details({...subadmin_details,[e.target.name]:e.target.value})
        // console.log("membership",subadmin_details)

    }


    const take_membership=()=>{
        console.log(subadmin_details)
        axios.post("http://localhost:3000/take_membership",subadmin_details).then((res)=>{
        alert(res.data.message)
            
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
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Name</h6>
                            </div>
                            <div>
                                <input type="text" name="name" value={subadmin_details.name} onChange={handlechange} />

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
                                <input type="textarea" name="address" value={subadmin_details.address} onChange={handlechange} />


                            </div>
                        </div>
                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Place</h6>
                            </div>
                            <div>
                                <input type="text" name="place" value={subadmin_details.place} onChange={handlechange} />

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>DOB</h6>
                            </div>
                            <div>
                                <input type="date" name="dob" value={subadmin_details.dob} onChange={handlechange} />

                            </div>
                        </div>
                        

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Password</h6>
                            </div>
                            <div>

                                <input type="password" name="password" value={subadmin_details.password} onChange={handlechange}/>

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Email</h6>
                            </div>
                            <div>
                                <input  type="email" name="email" value={subadmin_details.email} onChange={handlechange} />

                            </div>
                        </div>

                        <div className='input'>
                            <div className='leftside'>
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Phone No</h6>
                            </div>

                            <div>
                                <input type="text" name="phoneno"  value={subadmin_details.phoneno} onChange={handlechange}/>

                            </div>
                        </div>


                        

                        <div className='input'>
                            <Link to={"/subadmin"}>
                            <Button variant="success" style={{ width: "300px", marginTop: "40px" }} onClick={take_membership}>Take Membership</Button>{' '}
                            </Link>

                        </div>


                    </div>
                </div>

            </div>

        </div>
   
    )
}

export default Submembership
