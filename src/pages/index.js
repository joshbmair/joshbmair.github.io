import * as React from "react";

import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Navigation from "../components/Navigation";
import Socials from "../components/sections/Socials";
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
        <Socials />
      </div>
    </>
  );
}
