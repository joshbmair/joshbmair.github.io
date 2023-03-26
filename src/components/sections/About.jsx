import React from "react";

import "../../styles/section.css";

export default function About() {
  return (
    <>
      <h1>
        <span className="section-title">A little bit about me</span>
      </h1>
      <div className="section-summary">
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
      </div>
    </>
  );
}
