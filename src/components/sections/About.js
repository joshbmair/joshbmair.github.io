import React from "react";

import "../../styles/section.css";

export default function About() {
  return (
    <>
      <div className="section-title">
        <h1>A little bit about me</h1>
      </div>
      <div className="section-summary">
        <h2>
          I just received a Bachelor of Science degree in Computer Science from
          Colorado State University
        </h2>
        <p>
          Colorado State University is located in Fort Collins, Colorado. That
          happens to also be my hometown!
        </p>
        <h2>
          Now, I'm about to start my job as a software developer for Epic
          Systems.
        </h2>
        <p>
          Epic is located in Verona, Wisconsin and develops healthcare software.
          I'm looking forward to the experience of a new town and a new job!
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
