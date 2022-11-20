import React from "react";
import { Button, Col, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import "./TopBar.scss";
import { MdMail, MdPhone } from "react-icons/md";
import { settings } from "../../../../utils/settings";
import { useDispatch, useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { question } from "../../../../utils/functions/swal";
import { logout } from "../../../../store/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
// import secureLocalStorage from "react-secure-storage";
// import { question } from "../../../utils/functions/swal";
// import { logout } from "../../../store/slices/AuthSlice";

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isUserLogin, user } = useSelector((state) => state.auth);
  //console.log("User name = " + user.firstName + "  isUserLogin =" + isUserLogin);

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
    <>
      <Navbar className="TabBarnavbar">
        <Container>
          <Col className="contact">
            <Nav className="justify-content-start" defaultActiveKey="/" as="ul">
              <Nav.Item as="li">
                <Nav.Link
                  href={`tel:${settings.phone1}`}
                  className="text-color"
                >
                  {" "}
                  <MdPhone /> {settings.phone1}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  href={`mailto:${settings.email}`}
                  className="text-color"
                >
                  {" "}
                  <MdMail /> {settings.email}{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          {isUserLogin ? (
            <Col style={{ visibility: isUserLogin ? "visible" : "hidden" }}>
              <Nav
                className="justify-content-end"
                defaultActiveKey="/login"
                as="ul"
              >
                <Nav.Item as="li">
                  <Nav.Link className="text-color">
                    Merhaba {user.firstName}{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link
                    onClick={() => {
                      navigate("/user-information");
                    }}
                    className="text-color"
                  >
                    My Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link onClick={handleLogout} className="text-color">
                    Logout
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          ) : (
            <div>
              <Col
                className="login"
                style={{ visibility: isUserLogin ? "hidden" : "visible" }}
              >
                <Nav
                  className="justify-content-end"
                  defaultActiveKey="/login"
                  as="ul"
                >
                  <Nav.Item as="li">
                    <Nav.Link
                      onClick={() => {
                        navigate("/auth");
                      }}
                      className="text-color"
                    >
                      Login & Register
                    </Nav.Link>
                  </Nav.Item>
                  {/*     <Nav.Item as="li">
                    <Nav.Link
                      onClick={() => {
                        navigate("/auth");
                      }}
                      className="text-color"
                    >
                      Register
                    </Nav.Link>
                  </Nav.Item> */}
                </Nav>
              </Col>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
