import React from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Admin_nav() {
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
                             <Link to={"/add_books" } class="nav-link active">
                             <Nav.Link href="#action1">Add Books</Nav.Link>
                             </Link>
                            
                            <Link to={"/user_details" } class="nav-link active">
                            <Nav.Link href="#action2">user Details</Nav.Link>
                            </Link>

                            <Link to={"/book_details" } class="nav-link active">
                            <Nav.Link href="#action2">Bookdetails</Nav.Link>
                            </Link>


                            <Link to={"/viewrequests" } class="nav-link active">
                            <Nav.Link href="#action2">Requests</Nav.Link>
                            </Link>

                            <Link to={"/user_details" } class="nav-link active">
                            <Nav.Link href="#action2">Feedback&&Complaints</Nav.Link>
                            </Link>
                             {/* <NavDropdown title="View" id="navbarScrollingDropdown" >
                                 <Link to={"/book_details"}>
                                <NavDropdown.Item href="#action3">Bookdetails</NavDropdown.Item>
                                </Link>
                                <Link to={"/viewrequests"}>
                                <NavDropdown.Item href="#action4">Requests</NavDropdown.Item>
                                </Link>
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

export default Admin_nav
