import React, { FunctionComponent } from "react";

import "./index.scss";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Footer from "../components/Footer";
import Welcome from "../components/sections/Welcome";
import { HeadFC } from "gatsby";

const IndexPage: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Welcome />
      <About />
      <Experience />
      <Footer />
    </>
  );
};

export const Head: HeadFC = (): JSX.Element => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="description" content="Josh Birlingmair's personal site" />
      <meta
        name="keywords"
        content="Josh, Birlingmair, Personal, Site, Software, About, Experience, Socials, Gatsby.js, Software"
      />
      <meta name="author" content="Josh Birlingmair" />
      <title>Josh Birlingmair</title>
    </>
  );
};

export default IndexPage;
