import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./adminMenu.scss";
import logo from "../../../assets/img/logo/logoAdmin.png";
import { RiLogoutCircleRLine, RiDashboardLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { question } from "../../../utils/functions/swal";
import { logout } from "../../../store/slices/AuthSlice";

const AdminMenu = () => {
  const dispatch = useDispatch(); //merrkezi state den bilgi degisikligi icin
  const navigate = useNavigate(); //bi saayyfaya yonlendirmek icin

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
    <Navbar bg="primary" expand="lg" className="admin-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/budak">
          <img src={logo} className="img-fluid" alt="Admin" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/budak">
              <RiDashboardLine /> Dasboard
            </Nav.Link>
            <Nav.Link as={Link} to="/budak/books">
              Books
            </Nav.Link>
            <Nav.Link as={Link} to="/budak/authors">
              Authors
            </Nav.Link>
            <Nav.Link as={Link} to="/budak/publishers">
              Publishers
            </Nav.Link>
            <Nav.Link as={Link} to="/budak/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/budak/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/budak/reports">
              Reports
            </Nav.Link>
            <Nav.Link as={Link} to="http://trartofcoding.com/">
              Web Site
            </Nav.Link>
            <Nav.Link onClick={handleLogout}>
              <RiLogoutCircleRLine /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminMenu;
