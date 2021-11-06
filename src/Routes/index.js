import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import About from "../Page/About";
import Layout from "../Components/Layout";
import Tes from "../Page/About/tes";
import TesAkeh from "../Page/About/tes-akeh";
import  NotFound  from "../Page/About/notFound";

const RoutesComp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tes" element={<TesAkeh />} />
        </Route>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
};

export default RoutesComp;
