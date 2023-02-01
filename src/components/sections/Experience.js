import * as React from "react";

export default function Experience() {
  return (
    <>
      <div className="section-title">
        <h1>My experience</h1>
      </div>
      <div className="section-summary">
        <h2>2 years with the USDA Partnerships for Data Innovation</h2>
        <p>
          I worked on many projects as a IT specialist/GIS analyst. One project
          was the Crop Wild Relatives of the United States web application. I
          was responsible for processing the images that are displayed on the
          map. I also added features the web app such as exporting the data. I
          also improved user experience by adding a loading animation when the
          map images were loading and making buttons more visible and reactive.
        </p>
        <p>
          Another project I was responsible for was a similar web app called the
          Plant Variety Search Tool. The app allows a user to search data about
          plant varieties stored by the Agricultural Marketing Service. The data
          can be exported in CSV or PDF form.
        </p>
      </div>
    </>
  );
}
