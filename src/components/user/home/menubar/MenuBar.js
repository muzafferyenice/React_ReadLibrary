import React from 'react'
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./MenuBar.scss";
import { MdHome, MdLocalLibrary, MdLocationOn, MdPhone } from "react-icons/md";
import "../../../../assets/img/logo/logo.png";

const MenuBar = () => {
  return (
    <>
      <Navbar className="MenuBarnavbar">
        <Container>

          <Col className="contact" >
            <Nav className="justify-content-start" defaultActiveKey="/" as="ul" >
              <Nav.Item as="li">
                <Nav.Link href="/" className="text-color">
                  <img
                    src={require("../../../../assets/img/logo/logo.png")}
                    className='img-fluid shadow-2-strong'
                    alt=''
                  />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="login" >
            <Nav className="justify-content-end" defaultActiveKey="/" as="ul" >
              <Nav.Item as="li">
                <Nav.Link href="/" className="text-color"><MdHome /> Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/library-page" className="text-color"><MdLocalLibrary />Library</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/contact-page" className="text-color"><MdLocationOn />Contact</Nav.Link>
              </Nav.Item>
            </Nav>

          </Col>
        </Container>
      </Navbar>
      <div style={{ height: 10 }}></div>
    </>
  );
};

export default MenuBar