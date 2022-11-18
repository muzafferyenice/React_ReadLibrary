import React from 'react'
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import "./SearchOptionBar.scss";
import { FiList } from 'react-icons/fi';
import { BiGridHorizontal } from "react-icons/bi";

const SearchOptionBar = () => {
    return (
        <>
            <Navbar style={{ boxShadow: 'none' }} >
                <Container>
                    <Navbar.Toggle />
                    <Nav>
                        <Nav.Link href="">123 boks found</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href=""> <h2><BiGridHorizontal /></h2></Nav.Link>
                        <Nav.Link href=""> <h2><FiList /></h2></Nav.Link>


                    </Nav>

                </Container>
            </Navbar>
        </>

    )
}

export default SearchOptionBar