import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileMenu from "../../components/user/user-information/profile-form/ProfileMenu";
import ProfileForm from "../../components/user/user-information/profile-form/ProfileForm";
import "./UserInformationPage.scss";

const UserInformationPage = () => {
  return (
    <>
      <Container>
        <Row className="user">
          <Col xs={4}>
            <ProfileMenu />
          </Col>
          <Col xs={8}>
            <ProfileForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserInformationPage;
