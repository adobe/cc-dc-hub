import "../../index.css";
import "./contribution-page.css";
import "../../index.css";
import React from "react";
import { Contributions } from "../../components/layout";
import { Flex, Heading, View } from "@adobe/react-spectrum";

export const ContributionPage = () => {
  return (
    <>
      <div className="contribution">
        <div className="contribution-header">
          <View id="ResponsiveContainer">
            <Flex
              direction="column"
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Heading level={1}>
                <span className="u-text-white u-font-weight-bold">
                  Interested in{" "}
                  <span id="contribution-header-span">Contributing</span> to the
                  Community Source Hub?
                </span>
              </Heading>
              <Heading level={3}>
                <span className="u-text-white">
                  <p>
                    Explore our{" "}
                    <a href="https://git.corp.adobe.com/nnguyen/acs-dc-community">
                      repository
                    </a>{" "}
                    to discover how you can make an impact and be part of our
                    growing community!
                  </p>
                </span>
              </Heading>
            </Flex>
          </View>
        </div>
      </div>
      <Contributions />
    </>
  );
};
