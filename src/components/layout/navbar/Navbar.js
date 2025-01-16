import { View } from "@adobe/react-spectrum";
import "./navbar.css";
import "../../../index.css";
import React from "react";
import { Flex } from "@adobe/react-spectrum";
import { Link } from "react-router-dom";
import Rail from "@spectrum-icons/workflow/Rail";

export const Navbar = () => {
  return (
    <nav id="menu" class="navbar navbar-expand-lg navbar-dark sticky-top">
      <View>
        <div className="navbar-header">
          <a className="navbar-brand page-scroll header-title" href="/">
            Community Source Hub
          </a>
        </div>
      </View>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Rail size="L" />
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <Link to="/" className="page-scroll header-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/tools" className="page-scroll header-link">
              Tools
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contribution" className="page-scroll header-link">
              Contribute
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
