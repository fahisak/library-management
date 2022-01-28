import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import Admin_nav from './Admin_nav'

function Request() {
    
    var j=1
    const[data,setdata]=useState([])
    const displayrequest=()=>{
        axios.get("http://localhost:3000/viewrequest").then((res)=>{
            console.log("res",res.data);
            setdata(res.data)
        })
       

    }

    useEffect(() => {
        displayrequest()
       
    }, [])

    const acceptrequest=(id)=>{
        alert("hai")
        axios.post("http://localhost:3000/acceptreq",{id:id}).then((res)=>{
            // /console.log("res",res.data);
            // setdata(res.data)
            alert(res.data.message)
        })
       


    }

   

    return (
        <div >
            <Admin_nav/>
            <div className="container">
                <div></div>
            <div style={{marginTop:"100px",display:"flex",alignContent:"center",justifyContent:"center"}}>

           
           <Table striped bordered hover  style={
               {width:"1000px",color:"white"}
           } >
               <thead>
                         <tr>
                         <th>#</th>
                             <th>Name</th>
                             <th>Address</th>
                             <th>Place</th>
                             <th>DOB</th>
                            
                             <th>phone no</th>
                             <th>email</th>
                             <th>Status</th>
                         </tr>
                         </thead>
             {
                 
                 data.map((i)=>{
                     return(
                         <tbody >
                         <tr>
                         <td style={{color:"white"}}>{j++}</td>
                         <td style={{color:"white"}}>{i.name}</td>
                         <td style={{color:"white"}}>{i.address}</td>
                         <td style={{color:"white"}}>{i.place}</td>
                         <td style={{color:"white"}}>{i.dob}</td>
                         <td style={{color:"white"}}>{i.phoneno}</td>
                         <td style={{color:"white"}}>{i.email}</td>
                         <td style={{color:"white"}}>{i.status}</td>
                         <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
                         <button onClick={()=>acceptrequest(i._id)} >ACCEPT </button>
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

export default Request
