import "../../index.css";
import "./tools-page.css";
import React from "react";
import { Flex, Heading, View } from "@adobe/react-spectrum";
import { SearchPage } from "../../components/layout/search/SearchPage";

export const ToolsPage = () => {
  return (
    <>
      <View id="tools-header">
        <View id="ResponsiveContainer">
          <Flex
            direction="column"
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
          >
            <Heading level={1}>
              <span className="u-text-white u-font-weight-bold">
                Find The Perfect Solution For Your Business
              </span>
            </Heading>
            <Heading level={3}>
              <span className="u-text-white">
                Discover Your Perfect Fit: Uncover the Solution That Works Best
                for You
              </span>
            </Heading>
          </Flex>
        </View>
      </View>
      <SearchPage />
    </>
  );
};
