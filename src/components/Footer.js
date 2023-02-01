import * as React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <p>
        <small>This site was built by Josh Birlingmair using Gatsby.js</small>
      </p>
      <p>
        <LinkedIcon href="https://github.com/joshbmair" icon={<BsGithub />} />
        &nbsp;
        <LinkedIcon
          href="https://www.linkedin.com/in/josh-birlingmair-46b85317b"
          icon={<BsLinkedin />}
        />
        &nbsp;
        <LinkedIcon
          href="https://www.instagram.com/josh.bmr"
          icon={<BsInstagram />}
        />
        &nbsp;
        <LinkedIcon
          href="https://www.facebook.com/josh.birlingmair"
          icon={<BsFacebook />}
        />
      </p>
    </footer>
  );
}

function LinkedIcon({ icon, href }) {
  return (
    <a href={href} target="_blank">
      {icon}
    </a>
  );
}
