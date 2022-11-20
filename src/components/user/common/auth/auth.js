import React, { useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./auth.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import { useEffect } from "react";
import { HiUserGroup } from "react-icons/hi";

const Auth = () => {
  const [defaultTab, setDefaultTab] = useState(
    window.location.href.split("auth/")[1]
  );

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  return (
    <Container fluid className="auth">
      <Row className="auth-row">
        <Col lg={7}></Col>
        <Col lg={5}>
          <Card className="card">
            <HiUserGroup className="users-svg" />
            <Card.Body className="login-register">
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
