import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent "
      color-on-scroll="400"
    >
      <div className="container">
        <div className="navbar-translate">
          <a
            className="navbar-brand"
            href="#"
            rel="tooltip"
            title="Integrated Systems"
            data-placement="bottom"
            target="_blank"
          ></a>
          <button
            className="navbar-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar top-bar"></span>
            <span className="navbar-toggler-bar middle-bar"></span>
            <span className="navbar-toggler-bar bottom-bar"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
          data-nav-image="./assets/img/blurred-image-1.jpg"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link "
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const anchor = document.querySelector("#location");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                <i className="now-ui-icons  location_pin"></i>
                <p>Loacation Entry</p>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link "
                style={{ cursor: "pointer" }}
                onClick={() => {
                  const anchor = document.querySelector("#samples");
                  anchor.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
              >
                <i className="now-ui-icons business_globe"></i>
                <p>Location Submits</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
