import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Table} from 'react-bootstrap'
import Sub_nav from './Sub_nav'
import {Link} from'react-router-dom'

function Arrange() {
    

    var j=1
    const[data,setdata]=useState([])
    const displayrequest= async()=>{
     await axios.get("http://localhost:3000/arrange").then((res)=>{
            console.log("res",res.data);
            setdata(res.data)
        })
       

    }

    useEffect(() => {
        displayrequest()
       
    }, [])

    // const arrangebook=(id)=>{
    //     alert("hai")
    //     axios.post("http://localhost:3000/arrangebook",{id:id}).then((res)=>{
    //         // /console.log("res",res.data);
    //         // setdata(res.data)
    //         alert(res.data.message)
    //     })
       


    // }

   

    return (
        <div >
           <Sub_nav/>
            <div className="container">
                <div></div>
            <div style={{marginTop:"100px",display:"flex",alignContent:"center",justifyContent:"center"}}>

           
           <Table striped bordered hover  style={
               {width:"1000px",color:"white"}
           } >
               <thead>
                         <tr>
                         <th>#</th>
                             <th>Book Name</th>
                             <th>Author</th>
                             <th>Edition</th>
                             <th>Language</th>
                            
                             <th>Category</th>
                             <th>Arrangement</th>
                             <th>Stock</th>
                           
                         </tr>
                         </thead>
             {
                 
                 data.map((i)=>{
                     return(
                         
                         <tbody >
                         <tr>
                         <td style={{color:"white"}}>{j++}</td>
                         <td style={{color:"white"}}>{i.bookname}</td>
                         <td style={{color:"white"}}>{i.author}</td>
                         <td style={{color:"white"}}>{i.edition}</td>
                         <td style={{color:"white"}}>{i.language}</td>
                         <td style={{color:"white"}}>{i.category}</td>
                         <td style={{color:"white"}}>{i.arrangement}</td>
                         <td style={{color:"white"}}>{i.stock}</td>
                        
                         <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
                            {/* USE PARAMS.................... */}
                             <Link to={`/arrangebook/${i._id}/${i.stock}`}>
                         <button >Arrange </button></Link>
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




export default Arrange
