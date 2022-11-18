import React from 'react'
import { Col, Container, Nav, Navbar } from 'react-bootstrap'
import "./footer.scss";

const Footer = () => {
    return (
        <>
            <Navbar className="Footernavbar">
                <Container>

                    <Col className="FooternavbarLogo" >
                        <Nav className="justify-content-start" defaultActiveKey="/" as="ul" >
                            <Nav.Link href="/" className="text-color">
                                <img
                                    src={require("../../../../assets/img/logo/logo.png")}
                                    className='img-fluid shadow-2-strong'
                                    alt=''
                                />

                            </Nav.Link>
                        </Nav>
                    </Col>

                    <Col className="FooternavbarRigth" >
                        <Nav className="justify-content-end" defaultActiveKey="/login" as="ul" >
                            <p>&#169; 2022 -Copyright by Techproeducation. All rights reserved</p>
                        </Nav>

                    </Col>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer