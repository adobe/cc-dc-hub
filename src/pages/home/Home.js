import "../../index.css";
import React, { useState, useEffect } from "react";
import {
  Splash,
  Tools,
  Feature,
  Contribute,
  Apps,
  Footer,
} from "../../components";
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
      <Tools data={landingPageData.Tools} />

      <View id="background-overlay">
        <Feature data={landingPageData.Feature} />
        <Apps data={landingPageData.Apps} />
        <Contribute data={landingPageData.Contribute} />
        <Footer data={landingPageData.Footer} />
      </View>
    </>
  );
};
