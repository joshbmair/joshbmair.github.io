import * as React from "react";

import Welcome from "../components/Welcome";
import About from "../components/About";
import Experience from "../components/Experience";
import Socials from "../components/Socials";

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
