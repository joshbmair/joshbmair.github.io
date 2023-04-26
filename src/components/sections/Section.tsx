import React, { FunctionComponent, ReactNode } from "react";

import "./section.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const Section: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { title, children } = props;

  return (
    <div className="section">
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="body">{children}</div>
    </div>
  );
};

export default Section;
