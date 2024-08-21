import React from "react";
import "./apps.css";
import "../../../index.css";
import { Flex, View } from "@adobe/react-spectrum";

export const Apps = (props) => {
  const images = require.context("../../../assets/app-icons", true);
  const imageList = images.keys().map((image) => images(image));

  return (
    <View id="apps">
      <View id="ResponsiveContainer">
        <Flex width="100%" justifyContent="space-between">
          {imageList.map((image, index) => (
            <View>
              <img key={index} src={image} className="app-img" alt="appIcon" />
            </View>
          ))}
        </Flex>
      </View>
    </View>
  );
};
