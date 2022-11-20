import React, { useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./auth.scss";
import logo from "../../../../assets/img/logo/logo1.png";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const Auth = () => {
  const [defaultTab, setDefaultTab] = useState(
    window.location.href.split("auth/")[1]
  );
  const navigate = useNavigate();
  return (
    <Container fluid className="auth">
      <Row>
        <Col lg={7}>
          <img src={logo} alt="READLibrary" />
          <div className="toolbar">
            <RiCloseCircleLine onClick={() => navigate(-1)} />{" "}
            {/* Tıklandığında bir önceki sayfaya yönlendirir */}
            <RiHome7Line onClick={() => navigate("/")} />
          </div>
        </Col>
        <Col lg={5}>
          <Card>
            <Card.Body>
              <Tabs
                activeKey={defaultTab}
                onSelect={(k) => setDefaultTab(k)}
                className="mb-3"
              >
                <Tab eventKey="login" title="Login">
                  <LoginForm />
                </Tab>
                <Tab eventKey="register" title="Register">
                  <RegisterForm setDefaultTab={setDefaultTab} />
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
