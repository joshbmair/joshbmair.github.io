import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import "../styles/footer.css";

const socialProfiles = [
  {
    key: 1,
    href: "https://github.com/joshbmair",
    icon: <BsGithub />,
  },
  {
    key: 2,
    href: "https://www.linkedin.com/in/josh-birlingmair-46b85317b",
    icon: <BsLinkedin />,
  },
  {
    key: 3,
    href: "https://www.instagram.com/josh.bmr",
    icon: <BsInstagram />,
  },
  {
    key: 4,
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
      <p >
        {socialProfiles.map((profile) => {
          return <LinkedIcon href={profile.href} icon={profile.icon} key={profile.key} />;
        })}
      </p>
    </footer>
  );
}

function LinkedIcon({ href, icon }) {
  return (
    <a className="linked-icon" href={href} rel="noreferrer" target="_blank" >
      {icon}
    </a>
  );
}
