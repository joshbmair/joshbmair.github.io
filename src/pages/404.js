import { Link } from "gatsby";
import React from "react";

export default function PageNotFound() {
  return (
    <div className="sections">
      <h1>
        <span class="section-title">Page not found</span>
      </h1>
      <div className="section-summary">
        <Link to="/">Go to the home page</Link>
      </div>
    </div>
  );
}
