import axios from 'axios'
import React,{useState} from 'react'
import {Button} from'react-bootstrap'

function Feedback() {
    const[feedback,setfeedback]=useState()
    const handlechange=(e)=>{
        setfeedback(e.target.value)

    }
    const postfeedback=()=>{
        axios.post("http://localhost:3000/postfeedback",feedback).then((res)=>{
            alert(res.data.message)
        })

    }
   
  return (
    <div className='container'>
        <div style={{height:"350px",width:"500px",margin:"100px",backgroundColor:"rgb(199, 153, 185)"}}>
        <input type="textarea" style={{margin:"100px",width:"300px"}}  onChange={handlechange}></input>
        <Button variant="success" style={{ width: "150px",marginLeft:"170px" }} onClick={postfeedback}>Post feedback</Button>


        </div>

      
    </div>
  )
}

export default Feedback