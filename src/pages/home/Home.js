import "../../index.css";
import React, { useState, useEffect } from "react";
import { Splash, Feature, Contribute, Apps, Footer } from "../../components";
import { Banner } from "../../components/common";
import JsonData from "../../data/data.json";
import { View } from "@adobe/react-spectrum";

export const HomePage = () => {
  const [landingPageData, setlandingPageData] = useState({});
  useEffect(() => {
    setlandingPageData(JsonData);
  }, []);

  return (
    <>
      <Splash data={landingPageData.Splash} />
      {/* <Tools data={landingPageData.Tools} /> */}
      <Banner>
        The tools listed on this site are developed and licensed by third
        parties and are <b>not</b> supported by Adobe. Please log any issues
        with the applicable project.
      </Banner>
      <View id="background-overlay">
        <Feature data={landingPageData.Feature} />
        {/* <Apps data={landingPageData.Apps} /> */}
        <Contribute data={landingPageData.Contribute} />
        <Footer data={landingPageData.Footer} />
      </View>
    </>
  );
};
