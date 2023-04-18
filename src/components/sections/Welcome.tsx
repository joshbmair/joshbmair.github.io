import React, { FunctionComponent } from "react";

import "../../styles/section.scss";

const Welcome: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <h1>
        <span className="section-title">Hi, I'm Josh Birlingmair</span>
      </h1>
      <div className="section-summary">
        <p>
          Welcome to my personal site. Scroll down to learn more about me and
          browse my work experience.
        </p>
      </div>
    </>
  );
};

export default Welcome;
