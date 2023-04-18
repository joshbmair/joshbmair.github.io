import React, { FunctionComponent } from "react";

import Section from "./Section";

const About: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Section title="A little bit about me">
        <h2>
          I received a Bachelor of Science degree in Computer Science from
          Colorado State University in 2022
        </h2>
        <p>
          Colorado State University is located in Fort Collins, Colorado. That
          happens to also be my hometown!
        </p>
        <h2>Now, I'm working as a software developer for Epic.</h2>
        <p>
          Epic is located in Verona, Wisconsin and develops software for healthcare organizations.
          So far, I'm learning lots of new skills and I'm excited to get more experience!
        </p>
        <h2>
          Before I got my job at Epic, I was an IT specialist/GIS analyst intern
          at the USDA and Colorado State University.
        </h2>
        <p>
          I built some impactful tools and interesting projects that you can
          (and should) read more about below.
        </p>
      </Section>
    </>
  );
}

export default About;
