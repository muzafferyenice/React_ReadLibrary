import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiUserGroup } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../../store/slices/AuthSlice";
import { question } from "../../../../utils/functions/swal";
import "./ProfileMenu.scss";
import secureLocalStorage from "react-secure-storage";
const ProfileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    question("Are you sure to signout?").then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        secureLocalStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  return (
    <Container fluid className="profileMenu">
      <Row className="profile-row">
        <Col className="profile-col">
          <HiUserGroup className="profile-svg"/>
        </Col>
      </Row>
      <Row className="d-block check-row">
        <ul>
          <li>
            {" "}
            <Col className="profile">
              <div className="form-check">
             
                <label
                  className="form-check-label active"
                  for="flexCheckDefault"
                  onClick={() => {
                    navigate("/user-information");
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
                {/* <input
                  disabled
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                /> */}
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
                {/* <input
                  disabled
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                /> */}
                <label
                  className="form-check-label"
                  for="flexCheckDefault"
                  onClick={() => {
                    handleLogout();
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
