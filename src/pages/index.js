import * as React from "react";

import "../styles/global.css";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Welcome from "../components/sections/Welcome";

export default function IndexPage() {
  return (
    <>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="sections">
        <Welcome />
        <About />
        <Experience />
      </div>
      <Footer />
    </>
  );
}
