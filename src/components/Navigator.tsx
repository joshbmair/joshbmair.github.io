import React, { FunctionComponent } from "react";

import "./navigator.scss";

const Navigator: FunctionComponent = (): JSX.Element => {
  return (
    <nav>
      <div className="content">
        <NavigatorTitle />
        <NavigatorSections />
      </div>
    </nav>
  );
};

const NavigatorTitle: FunctionComponent = (): JSX.Element => {
  return (
    <div className="section">
      <div className="title">Josh Birlingmair</div>
    </div>
  );
};

const NavigatorSections: FunctionComponent = (): JSX.Element => {
  return (
    <div className="section">
      <div className="sections">
        <span className="section-link"><a href="#welcome">Welcome</a></span>
        &nbsp;
        <span className="section-link"><a href="#about">About</a></span>
        &nbsp;
        <span className="section-link"><a href="#experience">Experience</a></span>
      </div>
    </div>
  );
};

export default Navigator;
