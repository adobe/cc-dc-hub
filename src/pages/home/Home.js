import '../../index.css';
import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Splash, Tools, Feature, Contribute, Apps } from "../../components";
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import JsonData from "../../data/data.json";


const Home = () => {
  const [ landingPageData, setlandingPageData ] = useState({});
  useEffect(() => {
    setlandingPageData(JsonData)
  }, []);

  return (
    <Provider theme={defaultTheme}>
      {/* <Navbar /> */}
      <Splash data={landingPageData.Splash} />
      <Tools data={landingPageData.Tools} />
      <Feature data={landingPageData.Feature} />
      <Apps data={landingPageData.Apps} />
      <Contribute data={landingPageData.Contribute} />
      {/* <Footer data={landingPageData.Footer} /> */}
    </Provider>
  );
}

export default Home;
