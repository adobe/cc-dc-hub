import React from "react";
import "./feature.css";
import "../../../index.css";
import { Heading, Flex, View, Content } from "@adobe/react-spectrum";

export const Feature = () => {
  return (
    <View id="features">
      <View id="ResponsiveContainer">
        <Flex height="100%" justifyContent="center" alignItems="center">
          <Content className="intro-text">
            <Heading level={1}>
              <span className="feature-text">
                Unleash Our Versatile{" "}
                <span className="splash-header">
                  <b>API</b>
                </span>{" "}
                Anywhere, Anytime!
              </span>
            </Heading>
          </Content>
        </Flex>
      </View>
    </View>
  );
};
