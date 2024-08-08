import '../../index.css';
import React, { useState, useEffect } from 'react';
import { Splash, Tools, Feature, Contribute, Apps } from "../../components";
import JsonData from "../../data/data.json";


export const HomePage = () => {
  const [ landingPageData, setlandingPageData ] = useState({});
  useEffect(() => {
    setlandingPageData(JsonData)
  }, []);

  return (
    <>
      {/* <Provider theme={defaultTheme}> */}
      <Splash data={landingPageData.Splash} />
      <Tools data={landingPageData.Tools} />
      <Feature data={landingPageData.Feature} />
      <Apps data={landingPageData.Apps} />
      <Contribute data={landingPageData.Contribute} />
      {/* </Provider> */}
    </>
  );
};
