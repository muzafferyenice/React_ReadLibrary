import { MDBContainer, MDBInputGroup } from "mdb-react-ui-kit";
import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Spacer from "../../../common/spacer/Spacer";
import HomeSearch from "../home-search/HomeSearch";
import MenuBar from "../menubar/MenuBar";
import TopBar from "../topbar/TopBar";

import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="home-main">
        <TopBar />
        <MenuBar />
        <Spacer />
        <HomeSearch />
        <Container>
          <Nav
            className="justify-content-center"
            defaultActiveKey="/home"
            as="ul"
          >
            <Nav.Item as="li">
              ________________________. or .________________________
            </Nav.Item>
          </Nav>
        </Container>
        <div style={{ height: 30 }}></div>
        <MDBContainer>
          <MDBInputGroup tag="form" className="justify-content-center">
            <Button href="/library-page">Explore books</Button>
          </MDBInputGroup>
        </MDBContainer>
      </div>
    </>
  );
};

export default Home;
