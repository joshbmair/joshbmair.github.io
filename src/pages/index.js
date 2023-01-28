import * as React from "react";

import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Socials from "../components/sections/Socials";
import Welcome from "../components/sections/Welcome";

export default function IndexPage() {
  return (
    <>
      <Welcome />
      <About />
      <Experience />
      <Socials />
    </>
  );
}
