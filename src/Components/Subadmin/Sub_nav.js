import axios from 'axios'
import React, { useState } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container, Card, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Sub_nav() {
    const [book, setbook] = useState()
    const [viewbook, setviewbook] = useState([])
   
    
    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {
            viewbook.map((i)=>{
                       
                       return(
                           <Card style={{ width: '18rem',margin:"55px",alignItems:'center', backgroundColor:'black',color:'white' }}>
                           <Card.Img variant="top" src={i.bookdetails[0].image} style={{height:'200px',width:'200px'}} />
                           <Card.Body>
                               <div className='cryptname'>
                               <Card.Title>
                                   <div>
                                   {i.bookname}
                                       </div>
                                       <div>
                                       <h6>{i.bookdetails[0].author}</h6>
                                           </div></Card.Title>

                               </div>
                              
                               <Card.Text>
                               {i.bookdetails[0].edition} th edition
                               </Card.Text>
                               <Card.Text>
                               Shelf NO  {i.shelfno} 
                               </Card.Text>
                              
                           </Card.Body>
                       </Card>

                       )
                      

                   })
                }
                
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);
    const handlechange = (e) => {
        setbook(e.target.value)

    }
    const searchbook = () => {
        setModalShow(true)
        axios.post("http://localhost:3000/searchbook", { book: book }).then((res) => {
            console.log("res", res.data);
            setviewbook(res.data)

        })
console.log("state",viewbook);

    }
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand ></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                           
                               <Link to={"/subadmin_membership" } class="nav-link active">
                             <Nav.Link href="#action1">Membership</Nav.Link>
                             </Link>

                            <Link to={"/bookarrangement" } class="nav-link active">
                            <Nav.Link href="#action2">Book Arrangment</Nav.Link>
                            </Link>
                            
                            <Link to={"" } class="nav-link active">
                            <Nav.Link href="#action2">Book distribution</Nav.Link>
                            </Link>


                            <Link to={"/usersrequest" } class="nav-link active">
                            <Nav.Link href="#action2">Users Requests</Nav.Link>
                            </Link>

                            <Link to={"/userfeedbacks" } class="nav-link active">
                            <Nav.Link href="#action2">Feedback&& Complints</Nav.Link>
                            </Link>


                           
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search Books"
                                className="me-2"
                                aria-label="Search"
                                onChange={handlechange}
                            />
                            <Button variant="outline-success" onClick={searchbook}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           


<MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        

        </div>
    )
}



export default Sub_nav
