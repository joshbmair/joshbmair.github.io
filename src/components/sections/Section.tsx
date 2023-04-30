import React, { FunctionComponent, ReactNode } from "react";

import "./section.scss";

interface Props {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const Section: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { title, icon, children } = props;

  return (
    <div className="section">
      <div className="header">
        <h1>{title}</h1>
        {icon}
      </div>
      <div className="body">{children}</div>
    </div>
  );
};

export default Section;
