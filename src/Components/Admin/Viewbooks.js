import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Admin_nav from './Admin_nav'
import {Link, useNavigate} from'react-router-dom'
import Updatebook from './Updatebook'



function Viewbooks() {
    const [books, setbooks] = useState([])
    // const [state,setstate]=useState([])
    const navigate=useNavigate()

const updatedata = (id,bookname,author,edition,image,stock,language,category) => {
   
    console.log("iddd",id)
    
    
    navigate("/Updatebooks",{ state: { id: id,bookname:bookname,author:author,edition:edition,image:image,stock:stock,language:language,category:category} });

}
const deleteitem=(id)=>{
    alert("hai")
    axios.post("http://localhost:3000/deletebook",{id:id}).then((res)=>{
        alert(res.data.message)
    })

}

    const Viewbooksdetails = () => {
        axios.get("http://localhost:3000/viewbookdetails").then((res) => {
            // console.log("bookdetails", res.data)

            setbooks(res.data)


        })
    }
    console.log("sataaaaa", books);

    useEffect(() => {
        Viewbooksdetails()
    }, [])


    return (
        <div>
            <Admin_nav/>
        
        <div className='container'>
           

      

            {
                books.map((i) => {
                    return(
                    <>
                     < Card style={{ width: '20rem', height:"550px",marginRight:"20px",marginTop:"60px" ,backgroundColor:"rgb(199, 153, 185)", color:"white"}}>
                     <Card.Img variant="top" src={i.image} style={{height:"300px",width:"280px",marginLeft:"20px",marginRight:"20px",marginTop:"20px"}} />
                     <Card.Body>
                         <Card.Title><h5 style={{fontStyle:"italic"}

                         }>{i.bookname}</h5></Card.Title>
                        <Card.Text>
                       <h5> Author:
                            {i.author}</h5>
                         </Card.Text>
                         <Card.Text>
                       <h5> 
                            {i.edition}th Edition</h5>
                         </Card.Text>
                         {/* <Link to={"/updatebooks"}> */}
                         <Button variant="primary" style={{margin:"30px"}} onClick={()=>updatedata(i._id,i.bookname,i.author,i.edition,i.image,i.stock,i.language,i.category)}>Update</Button>
                         <Button variant="primary" style={{margin:"30px"}} onClick={()=>deleteitem(i._id)}>Delete</Button>

                         {/* </Link> */}
                         {/* <Button variant="primary">Delete</Button> */}
                     </Card.Body>
                 </Card>
                </>
                    )


                })


               
           }
           {/* {
               state.length !== 0 ?<Updatebook id={state}/>:"kkk"
           } */}
          
          
        </div >
       
        </div>
    )
}

export default Viewbooks