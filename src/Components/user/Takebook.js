import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


function Takebook() {
  const { id } = useParams();
  const [details, setdetails] = useState({ name:'', email: '',dob:'' })

  const handlechange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value })
  }
  const distribution = () => {
    axios.post("http://localhost:3000/bookdistribution",{id:id,details:details,}).then((res)=>{
      console.log(res.data)
      alert(res.data.message)
    })

  }

  console.log("iddd", id);

  return <div>
    {/* <input type="text" name='referancid' placeholder='Enter referance ID ' onChange={handlechange} /> */}
    <input type="text" name='name' placeholder='Enter your Name' onChange={handlechange}></input>

    <input type="text" name='email' placeholder='Enter your Email' onChange={handlechange}></input>
    <input type="date" name='dob' placeholder='Enter your DOB' onChange={handlechange}></input>
    <button onClick={distribution}>submit</button>
  </div>;
}

export default Takebook;
