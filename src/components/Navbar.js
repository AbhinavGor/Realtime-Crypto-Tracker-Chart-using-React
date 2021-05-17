import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Navigation extends Component {
        render(){
            return(
                <>
                    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/Login">Login</Nav.Link>
                                    <Nav.Link href="/SignUp">SignUp</Nav.Link>
                                    <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                                    <Nav.Link href="/Settings">Settings</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </>
            );
        }
}
