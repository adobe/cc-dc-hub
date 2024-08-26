import "../../index.css";
import React, { useState, useEffect } from "react";
import {
  Splash,
  Feature,
  Contribute,
  Apps,
  Footer,
} from "../../components";
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
        Please remember, the tools on this site are <b>not</b> supported by Adobe. Log issues to their respective projects, which you can find on their tool detail page.
      </Banner>
      <View id="background-overlay">
        <Feature data={landingPageData.Feature} />
        <Apps data={landingPageData.Apps} />
        <Contribute data={landingPageData.Contribute} />
        <Footer data={landingPageData.Footer} />
      </View>
    </>
  );
};
