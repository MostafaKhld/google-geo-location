import React from "react";
import ntLogo from "./assets/img/nt-sys.png";
import header from "./assets/img/header.jpg";
function PageHeader() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="page-header clear-filter" filter-color="orange">
      <div
        className="page-header-image"
        data-parallax="true"
        style={{ backgroundImage: `url(${header})` }}
      ></div>
      <div className="container">
        <div className="content-center brand">
          <img className="n-logo" src={ntLogo} alt="" />
          <h1 className="h1-seo">Integrared Systems</h1>
          <h3>Demo For Handling Geo-Locations</h3>
        </div>
        <h6 className="category category-absolute">
          Coded by{"   "}
          <a
            href="https://www.linkedin.com/in/mostafa-khaled-705207208/"
            target="_blank"
          >
            {/* <img
              src="./assets/img/creative-tim-white-slim2.png"
              className="creative-tim-logo"
            /> */}
            Mostafa Khaled
          </a>
          .
        </h6>
      </div>
    </div>
  );
}

export default PageHeader;
