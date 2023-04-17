import React from "react";

import "../styles/index.scss";
import About from "../components/sections/About.jsx";
import Experience from "../components/sections/Experience.jsx";
import Footer from "../components/Footer.jsx";
import Welcome from "../components/sections/Welcome.jsx";

export default function IndexPage() {
  return (
    <>
      <div className="sections">
        <Welcome />
        <About />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export function Head() {
  return (
    <>
      <meta chatset="utf-8" />
      <meta name="description" content="Josh Birlingmair's personal site" />
      <meta
        name="keywords"
        content="Josh, Birlingmair, Personal, Site, Software, About, Experience, Socials, Gatsby.js, Software"
      />
      <meta name="author" content="Josh Birlingmair" />
      <title>Josh Birlingmair</title>
    </>
  );
}
