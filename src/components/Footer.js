import * as React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <p>
      <small>This site was built by Josh Birlingmair using Gatsby.js</small>
      </p>
      <p>
        <BsGithub />
        &nbsp;
        <BsLinkedin />
        &nbsp;
        <BsInstagram />
        &nbsp;
        <BsFacebook />
      </p>
    </footer>
  );
}
