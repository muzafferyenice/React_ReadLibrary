import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProfileMenu from "../../components/user/user-information/profile-form/ProfileMenu";
import "./UserInformationPage.scss";
import MyBooks from "../../components/user/user-information/MyBooksLoaned/MyBooks";

const MyBooksPage = () => {
  return (
    <>
      <Container>
        <Row className="user">
          <Col xs={4}>
            <ProfileMenu />
          </Col>
          <Col xs={8}>
            <MyBooks />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyBooksPage;
