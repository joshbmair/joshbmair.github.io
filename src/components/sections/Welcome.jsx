import React from "react";

import "../../styles/section.scss";

export default function Welcome() {
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
}
