import React from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Sub_nav() {
   
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

                            <Link to={"" } class="nav-link active">
                            <Nav.Link href="#action2">Feedback&& Complints</Nav.Link>
                            </Link>




                             {/* <NavDropdown title="View" id="navbarScrollingDropdown" >
                                 <Link to={"/book_details"}>
                                <NavDropdown.Item href="#action3">Bookdetails</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item href="#action4">Requests</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Feedback&&Complaints</NavDropdown.Item> */}
                                {/* <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item> */}
                            {/* </NavDropdown> */}
                            {/* <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */} 
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search Books"
                                className="me-2"
                                aria-label="Search" 
                                
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}




export default Sub_nav
