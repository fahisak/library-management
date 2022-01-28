import React from 'react'
import { Button, Navbar, Nav, Form, FormControl, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Nav_bar() {
    
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
                            <Link to={"/take_membership" } class="nav-link active">
                            <Nav.Link href="#action2">Membership</Nav.Link>
                            </Link>

                            <Link to={"/searchbook"  } class="nav-link active">
                            <Nav.Link href="#action2">Search books</Nav.Link>
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
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    )
}

export default Nav_bar
