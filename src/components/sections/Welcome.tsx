import React, { FunctionComponent } from "react";

import Section from "./Section";

const Welcome: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Section title="Hi, I'm Josh Birlingmair">
        <p>
          Welcome to my personal site. Scroll down to learn more about me and
          browse my work experience.
        </p>
      </Section>
    </>
  );
};

export default Welcome;
