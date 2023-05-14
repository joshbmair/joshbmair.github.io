import React, { FunctionComponent, ReactNode } from "react";

import "./section.scss";

interface SectionProps {
  id: string;
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

type SectionContentProps = SectionProps;

const Section: FunctionComponent<SectionProps> = (
  props: SectionContentProps
): JSX.Element => {
  const { id } = props;

  return (
    <div className="page">
      <div id={id} className="section">
        <SectionContent {...props} />
      </div>
    </div>
  );
};

const SectionContent: FunctionComponent<SectionContentProps> = (
  props: SectionContentProps
): JSX.Element => {
  const { title, icon, children } = props;

  return (
    <div className="content">
      <div className="header">
        <h1>{title}</h1>
        {icon}
      </div>
      <div className="body">{children}</div>
    </div>
  );
};

export default Section;
