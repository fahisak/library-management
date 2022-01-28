import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import Nav_bar from '../Navbar/Nav_bar'

// import {Link} from'react-router-dom'


function Searchbooks() {
   
    const [books, setbooks] = useState([])
    // const[state,setstate]=useState([])
    // const [state,setstate]=useState([])
   



    const Viewbooksdetails = () => {
        axios.get("http://localhost:3000/searchbooks").then((res) => {
            // console.log("bookdetails", res.data)
console.log("resultttt",res.data);
            setbooks(res.data)
            // setstate(res.data)


        })
    }
    console.log("sataaaaa", books);
    console.log("len",books.length);

    

    useEffect(() => {
        Viewbooksdetails()
    }, [])


    return (
        <div>
            <Nav_bar/>
        
        <div className='container'>
           

      

            {
                books.map((i) => {
                    return(
                    <>
                     < Card style={{ width: '20rem', height:"550px",marginRight:"20px",marginTop:"60px" ,backgroundColor:"rgb(199, 153, 185)", color:"white"}}>
                     <Card.Img variant="top" src={i.bookdetails[0].image} style={{height:"300px",width:"280px",marginLeft:"20px",marginRight:"20px",marginTop:"20px"}} />
                     <Card.Body>
                         {/* <Card.Title><h5 style={{fontStyle:"italic"}

                         }>{i.bookdetails[0].bookname}</h5></Card.Title> */}
                        <Card.Text>
                       <h5> 
                            {i.bookdetails[0].edition}th Edition</h5>
                         </Card.Text>
                        <Card.Text>
                       <h5> Author:
                            {i.bookdetails[0].author}</h5>
                         </Card.Text>
                         

                         <Card.Text>
                       <h5> Shelf no:
                            {i.shelfno}</h5>
                         </Card.Text>

                         {/* <Link to={"/updatebooks"}> */}
                         <Button variant="primary" style={{margin:"30px"}} >Take</Button>
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


export default Searchbooks
