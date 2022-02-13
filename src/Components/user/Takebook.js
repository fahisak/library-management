import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav_bar from '../Navbar/Nav_bar';
import {Button} from'react-bootstrap'


function Takebook() {
  const { id } = useParams();
  const [details, setdetails] = useState({ name: '', email: '', dob: '' })

  const handlechange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value })
  }
  const distribution = () => {
    axios.post("http://localhost:3000/bookdistribution", { id: id, details: details, }).then((res) => {
      console.log("resssss", res.data)
      alert("Book Arranged in Shelf No" + res.data.result[0].shelfno + " " + res.data.message)

    })

  }

  console.log("iddd", id);

  return <div >

    {/* <Nav_bar /> */}

    <div className='container'>
      <div className='main' style={{ marginTop: "50px", display: "flex", justifyContent: "center", flexFlow: "column", alignItems: "center", textAlign: "center" }}>

        <div className='input'>
          <div className='leftside'>
            <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Name</h6>
          </div>
          <div>
            <input type="text" name='name'  onChange={handlechange}></input>

          </div>
        </div>


        <div className='input'>
          <div className='leftside'>
            <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>Email</h6>
          </div>
          <div>
          <input type="text" name='email'  onChange={handlechange}></input>

          </div>
        </div>
        <div className='input'>
          <div className='leftside'>
            <h6 style={{ color: "black", fontStyle: "italic", padding: "5px" }}>DOB</h6>
          </div>
          <div>
          <input type="date" name='dob'  onChange={handlechange} ></input>

          </div>
        </div>




        <Button variant="success" style={{ width: "300px", marginTop: "40px" }} onClick={distribution}>Submit</Button>


       


      </div>
    </div>
  </div>;
}

export default Takebook;
