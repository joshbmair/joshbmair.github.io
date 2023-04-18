import { Link } from "gatsby";
import React, {FunctionComponent} from "react";

const PageNotFound: FunctionComponent = (): JSX.Element => {
  return (
    <div className="sections">
      <h1>
        <span className="section-title">Page not found</span>
      </h1>
      <div className="section-summary">
        <Link to="/">Go to the home page</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
