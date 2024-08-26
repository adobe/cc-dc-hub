import React from "react";
import { View, Content, Flex } from "@adobe/react-spectrum";
import "./tool-detail-body.css";
import "../../../index.css";
import "../splash/Splash.css";
import { Footer } from "../footer/Footer";

export const ToolsDetailBody = ({ content }) => {
  content = content.replaceAll("\n", "");
  return (
    <>
      <View
        width="100%"
        margin="auto"
        padding="size-400"
        id="tool-detail-body-section"
      >
        <View id="ResponsiveContainer">
          <Content>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Content>
        </View>
      </View>
      <View id="navbar-background">
        <Footer />
      </View>
    </>
  );
};
