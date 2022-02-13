import React, { useState,useEffect } from 'react'
import {Button,Table} from 'react-bootstrap'
import Sub_nav from './Sub_nav';
import axios from 'axios';

function Userfeedback() {
    var j=0;
    const [data,setdata]=useState({})
    const [feedback,setfeedback]=useState()

    
        const postfeedback=()=>{
            axios.post("http://localhost:3000/subadminfeedback",feedback).then((res)=>{
                alert(res.data.message)
            })
    
        }

    
    
    const handlechange=(e)=>{
        setfeedback(e.target.value)

    }

    const sentfeedback=()=>{

    }
const feedbackuser=()=>{
    axios.get("http://localhost:3000/userfeedbacks").then((res)=>{
        
        console.log("dattata",res.data);
        setdata(res.data)

    }) 
}
useEffect(() => {
  feedbackuser()
}, [])


    return (
        <div >
            <Sub_nav/>
            <div className="container">
            <div >
                <div style={{display:"flex"}}>
                <input type="textarea" style={{marginLeft:"100px",marginTop:"100px",marginRight:"10px",width:"300px"}}  onChange={handlechange}></input>
        <Button variant="success" style={{marginTop:"100px", width: "150px",height:"40px",marginLeft:"20px" }} onClick={postfeedback}>Post feedback</Button>
     
                </div>
       
            {/* <div style={{marginTop:"10px",display:"flex",alignContent:"center",justifyContent:"center"}}> */}

        
           <Table striped bordered hover  style={
               {width:"1000px",color:"white",marginTop:"50px"}} >
               <thead>
                         <tr>
                         <th>#</th>
                             <th>Date</th>
                             <th>Feedback</th>
                             
                         </tr>
                         </thead>
             {
                 
                 data.map((i)=>{
                     return(
                         <tbody >
                         <tr>
                         <td style={{color:"white"}}>{j++}</td>
                         <td style={{color:"white"}}>{i.date}</td>
                         <td style={{color:"white"}}>{i.feedback}</td>
                        
                         <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
                         <button onClick={()=>sentfeedback(i._id)} >Sent to Admin </button>
                         </div>
                         
                         
                         </tr>
                         </tbody>
                         
                         
                        )
                 })
                 
             }
           
             </Table>
             </div>     
             </div>  
             </div> 
    )
}


export default Userfeedback