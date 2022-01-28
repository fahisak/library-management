import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Nav_bar from '../Navbar/Nav_bar'

function User_login() {

	const [login, setlogin] = useState({
        email: '',
        password: ''
    })
	const navigate=useNavigate()

    const checkuser = (e) => {

        setlogin({ ...login, [e.target.name]: e.target.value })
		// console.log("dataa",login)

    }


    const loginprocess = () => {

		console.log("dataa",login)

        axios.post("http://localhost:3000/login", login).then((respose) => {

         alert  ( respose.data.type)
		 if(respose.data.type==="user"){
			 navigate("/user")
		 }
		 else if(respose.data.type==="admin"){
			 navigate("/admin")
		 }
		 else{
			navigate("/subadmin")

		 }
				
				
				
	
			console.log("typeeee",respose)

        })
        setlogin({

            email: '',
            password: ''
        })

    }



return (
	<div className='container'>

		<div className='main'>


			<div style={{alignitems:"center"}}>
				<div style={{marginBottom:"50px", marginLeft:"110px",marginTop:"0px"}}>
					<h5 style={{ color: "black",fontStyle:"italic" }}> Please Login </h5>

				</div>
				<div className='input'>
					<div className='leftside'>
						<h6 style={{ color: "black", padding: "5px",fontStyle:"italic" }}>Email</h6>
					</div>
					<div>
						<input value={login.email} name='email' type="text" onChange={checkuser}  />

					</div>
				</div>
				<div className='input'>
					<div className='leftside'>
						<h6 style={{ color: "black", padding: "5px",fontStyle:"italic" }}>Password</h6>
					</div>
					<div>
						<input value={login.password} name="password" type="password" onChange={checkuser}  required />


					</div>
				</div>


				<div className='input'>
					{/* <Link to={"/admin"}> */}
					<Button variant="success" style={{ width: "300px", marginTop: "20px" }} onClick={loginprocess} >Login</Button>{' '}
					{/* </Link> */}
					{/* <button className='loginbutton' onClick={loginprocess}>Login</button> */}
				</div>
				<Button variant="link" style={{ color: "white", textDecoration: "none", marginLeft: "170px" }}>Forgot Password ?</Button>
				<hr />
				<div className='input'>
					<Link to="/create_account">
					<Button style={{ width: "300px" }} variant="primary">Create Account</Button>{' '}
					</Link>
					
						{/* <button className='accountbutton'>Create Account</button> */}
					
				</div>


			</div>
		</div>

	</div>
)
}



export default User_login
