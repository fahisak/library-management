import axios from 'axios'
import React, { useState } from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container, Card, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Takebook from '../user/Takebook'

function Nav_bar() {
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
                           <Card.Img variant="top" src={i.image} style={{height:'200px',width:'200px'}} />
                           <Card.Body>
                               <div className='cryptname'>
                               <Card.Title>
                                   <div>
                                   {i.bookname}
                                       </div>
                                       <div>
                                       <h6>{i.author}</h6>
                                           </div></Card.Title>

                               </div>
                              
                               <Card.Text>
                                   {i.edition} th edition
                               </Card.Text>
                               <Link to={`/takebook/${i._id}`}>
                               <Button variant="primary">Take</Button>
                               </Link>
                               
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
                            {/* <Link class="nav-link active">
                            <Nav.Link href="#action1">Status</Nav.Link>

                            </Link> */}
                            <Link to={"/take_membership"} class="nav-link active">
                                <Nav.Link href="#action2">Membership</Nav.Link>
                            </Link>

                            <Link to={"/searchbook"} class="nav-link active">
                                <Nav.Link href="#action2">View books</Nav.Link>
                            </Link>


                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
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
            {/* {(viewbook.length === 1 ? <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            /> : viewbook.map((i) => {
                return (<><h6>{i.bookname}</h6><h6>{i.author}</h6></>)
            })
            )} */}


<MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            {/* {
           viewbook.map((i)=>{
               return(
                   <Search name={i.bookname}
                   author={i.author}
                   edition={i.edition}/>
               )
           })
       } */}


        </div>
    )
}

export default Nav_bar
