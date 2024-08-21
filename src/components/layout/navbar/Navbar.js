import { View } from "@adobe/react-spectrum";
import "./navbar.css";
import "../../../index.css";
import React from "react";
import { Flex } from "@adobe/react-spectrum";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="menu" className="navbar nabar-default navbar-fixed-top">
      <View id="ResponsiveContainer">
        <View id="col-md-8">
          <Flex justifyContent="space-between">
            <div className="navbar-header">
              <a className="navbar-brand page-scroll header-title" href="/">
                Community Source Hub
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/" className="page-scroll header-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/tools" className="page-scroll header-link">
                    Tools
                  </Link>
                </li>
                <li>
                  <Link to="/contribution" className="page-scroll header-link">
                    Contribute
                  </Link>
                </li>
              </ul>
            </div>
          </Flex>
        </View>
      </View>
    </nav>
  );
};
