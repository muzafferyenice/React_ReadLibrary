import React from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";
import "./TopBar.scss";
import { MdMail, MdPhone } from "react-icons/md";
import { settings } from "../../../../utils/settings";

const TopBar = () => {
  return (
    <>
      <Navbar className="TabBarnavbar">
        <Container>

          <Col className="contact" >
            <Nav className="justify-content-start" defaultActiveKey="/" as="ul" >
              <Nav.Item as="li">
                <Nav.Link href="/" className="text-color"> <MdPhone /> {settings.phone1}</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href={`mailto:${settings.email}`} className="text-color"> <MdMail /> {settings.email}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="login" >
            <Nav className="justify-content-end" defaultActiveKey="/login" as="ul" >
              <Nav.Item as="li">
                <Nav.Link href="/auth" className="text-color">Login</Nav.Link>
              </Nav.Item>
              <span className="align-items-center">&nbsp;|&nbsp;</span>
              <Nav.Item as="li">
                <Nav.Link href="/auth" className="text-color">Register</Nav.Link>
              </Nav.Item>
            </Nav>

          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
