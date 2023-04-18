import React, { FunctionComponent, ReactNode } from "react";

import "../../styles/section.scss";

interface Props {
  title: string;
  children: ReactNode;
}

const Section: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { title, children } = props;

  return (
    <>
      <h1>
        <span className="section-title">{title}</span>
      </h1>
      <div className="section-summary">
        {children}
      </div>
    </>
  );
};

export default Section;
