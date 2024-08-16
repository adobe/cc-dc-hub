import './index.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from "./components";
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import JsonData from "./data/data.json";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [landingPageData, setlandingPageData] = useState({});
  useEffect(() => {
    setlandingPageData(JsonData)
  }, []);

  return (
    <>
      <Provider theme={defaultTheme}>
        <Navbar />
        <Outlet />
        <Footer data={landingPageData.Footer} />
      </Provider>
    </>
  )
};

export default Layout;