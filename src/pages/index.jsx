import React from "react";

import "../styles/index.scss";
import About from "../components/sections/About.tsx";
import Experience from "../components/sections/Experience.tsx";
import Footer from "../components/Footer.tsx";
import Welcome from "../components/sections/Welcome.tsx";

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
