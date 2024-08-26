import React from "react";
import "./footer.css";
import "../../../index.css";
import { Footer as Ftr, Heading, Flex, View } from "@adobe/react-spectrum";
import { Banner } from "../../common";

export const Footer = () => {
  return (
    <Ftr marginBottom="10px">
      <View id="footer">
        <View id="ResponsiveContainer">
          <Banner type="hubFooter">
            This is a community-drive site where creatives and developers come together to create 
            some amazing tools and resources for the Adobe community. And while awesome, please 
            remember that these tools are the results of individual efforts and are not officially 
            supported – in any part – by Adobe. Issues should be logged in the associated tool's 
            repository, which can be found on the tool detail page.
          </Banner>
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
