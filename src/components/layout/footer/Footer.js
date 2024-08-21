import React from "react";
import "./footer.css";
import "../../../index.css";
import { Footer as Ftr, Heading, Flex, View } from "@adobe/react-spectrum";

export const Footer = () => {
  return (
    <Ftr marginBottom="10px">
      <View id="footer">
        <View id="ResponsiveContainer">
          <Flex
            width="100%"
            height="100%"
            direction="row"
            justifyContent="space-between"
          >
            <View>
              <Heading level={4}>
                License &copy; Adobe Inc. All Rights Reserved.
              </Heading>
            </View>
            <View>
              <Heading level={4}>Community Source Hub</Heading>
            </View>
          </Flex>
        </View>
      </View>
    </Ftr>
  );
};
