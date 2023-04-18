import React, { FunctionComponent } from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import "./footer.scss";

interface SocialProfile {
  key: number;
  href: string;
  icon: JSX.Element
}

const socialProfiles: SocialProfile[] = [
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

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <footer>
      <p>
        <small>This site was built by Josh Birlingmair using Gatsby.js</small>
      </p>
      <p>
        {socialProfiles.map((profile: SocialProfile) => {
          return (
            <LinkedIcon
              href={profile.href}
              icon={profile.icon}
              key={profile.key}
            />
          );
        })}
      </p>
    </footer>
  );
}

type LinkedIconProps = SocialProfile

const LinkedIcon: FunctionComponent<LinkedIconProps> = (
  props: LinkedIconProps
): JSX.Element => {
  const { href, icon } = props;

  return (
    <a className="linked-icon" href={href} rel="noreferrer" target="_Íblank">
      {icon}
    </a>
  );
};

export default Footer;
