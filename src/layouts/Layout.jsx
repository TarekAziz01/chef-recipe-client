/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Layout = () => {
    return (
      <div>
        <Header></Header>
        <div className=" min-vh-100">
          <Container>
            <Outlet></Outlet>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Layout;