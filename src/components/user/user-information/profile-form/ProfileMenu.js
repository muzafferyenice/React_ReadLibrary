import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./ProfileMenu.scss";

const ProfileMenu = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="profileMenu">
      <Row className="profile-row">
        <Col className="profile-col">
          <HiUserGroup />
        </Col>
      </Row>
      <Row className="d-block check-row">
        <ul>
          <li>
            {" "}
            <Col className="profile">
              <div className="form-check">
                <input
                  disabled
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label active"
                  for="flexCheckDefault"
                  onClick={() => {
                    navigate("/user-info");
                  }}
                >
                  User Information
                </label>
              </div>
            </Col>
          </li>
          <li>
            <Col></Col>
          </li>
          <li>
            <Col>
              <div className="form-check">
                <input
                  disabled
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexCheckDefault"
                  onClick={() => {
                    navigate("/books");
                  }}
                >
                  My Books
                </label>
              </div>
            </Col>
          </li>
          <li>
            <Col>
              <div className="form-check">
                <input
                  disabled
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label"
                  for="flexCheckDefault"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Logout
                </label>
              </div>
            </Col>
          </li>
        </ul>
      </Row>
    </Container>
  );
};

export default ProfileMenu;
