import React,{useState} from 'react'
import axios from 'axios'
import {Link} from'react-router-dom'
import{Button} from'react-bootstrap'

function Create_account() {
    const [user_details,setuser_details]=useState({name:'',password:'',email:'',type:'pending'})
    
    const handlechange=(e)=>{
        setuser_details({...user_details,[e.target.name]:e.target.value})
        // console.log("membership",user_details)

    }
    


    const create_account=()=>{
        console.log(user_details)
        axios.post("http://localhost:3000/create_account",user_details).then((res)=>{
            alert(res.data.message)
        })
    }
    return (
        <div>
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
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Email</h6>
                            </div>
                            <div>
                                <input  type="email" name="email" value={user_details.email} onChange={handlechange} />

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
                                <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Confirm Password</h6>
                            </div>
                            <div>
                                <input  type="email" name="confirmpassword" value={user_details.username} onChange={handlechange} />

                            </div>
                        </div>

                       

                        

                        

                        <div className='input'>
                            <Link to={"/"}>
                            <Button variant="success" style={{ width: "300px", marginTop: "40px" }} onClick={create_account}>Create Account</Button>{' '}
                            </Link>

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Create_account
