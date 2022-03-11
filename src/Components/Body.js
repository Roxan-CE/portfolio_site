import React from "react";
import Footer from "./Footer";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Home from "./Sections/Home";
import Works from "./Sections/Works";

function Body() {
  return (
    <div className="main-page">
      <Home></Home>
      <About></About>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Body;
