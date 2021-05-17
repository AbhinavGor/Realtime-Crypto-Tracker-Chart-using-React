import React, { useState, Component } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import '../styles/navBar.css'
export default class Navigation extends Component {
        render(){
            return(
                <>
                    <Navbar className="navbar" collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Navbar.Brand href="#" className="mr-5">Crypto Tracker</Navbar.Brand>
                                <Nav className="mr-auto ">
                                    <Nav.Link className="mr-1" href="/">Home</Nav.Link>
                                    <Nav.Link className="mr-1" href="/Login">Login</Nav.Link>
                                    <Nav.Link className="mr-1" href="/SignUp">SignUp</Nav.Link>
                                    <Nav.Link className="mr-1" href="/Dashboard">Dashboard</Nav.Link>
                                    <Nav.Link className="mr-1" href="/Settings">Settings</Nav.Link>
                                </Nav>
                                <Button variant="info">Login</Button>{' '}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            );
        }
}
