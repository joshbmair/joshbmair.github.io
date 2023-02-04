import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import "../styles/footer.css";

const socialProfiles = [
  {
    href: "https://github.com/joshbmair",
    icon: <BsGithub />,
  },
  {
    href: "https://www.linkedin.com/in/josh-birlingmair-46b85317b",
    icon: <BsLinkedin />,
  },
  {
    href: "https://www.instagram.com/josh.bmr",
    icon: <BsInstagram />,
  },
  {
    href: "https://www.facebook.com/josh.birlingmair",
    icon: <BsFacebook />,
  },
];

export default function Footer() {
  return (
    <footer>
      <p>
        <small>This site was built by Josh Birlingmair using Gatsby.js</small>
      </p>
      <p>
        {socialProfiles.map((profile) => {
          return <LinkedIcon href={profile.href} icon={profile.icon} />;
        })}
      </p>
    </footer>
  );
}

function LinkedIcon({ icon, href }) {
  return (
    <a className="linked-icon" href={href} target="_blank">
      {icon}
    </a>
  );
}
