import ParticlesBg from "particles-bg";
import React from "react";
import { Outlet } from "react-router";
import FooterComp from "../Footer";
import HeaderComp from "../Header";

const Layout = () => {
  return (
    <div className="main-content">
      <ParticlesBg type="cobweb" color="#ffffff" num={75} bg={true}/>
      <HeaderComp />
      <Outlet />
      <FooterComp/>
    </div>
  );
};

export default Layout;
