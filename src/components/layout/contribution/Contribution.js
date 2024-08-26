import React from "react";
import "./contribution.css";
import { Flex, View, Content } from "@adobe/react-spectrum";
import { contributionData } from "./contribution-data";
import { Card } from "../../common";
import { Footer } from "../footer/Footer";
import "../splash/Splash.css";

export const Contributions = (props) => {
  return (
    <>
      <View id="contribution-section">
        <Content id="contribution-container">
          <Flex justifyContent="space-between" direction={"column"}>
            {contributionData.map((contribution) => (
              <div className="card-container">
                <Card record={contribution} />
              </div>
            ))}
          </Flex>
        </Content>
      </View>
      <View id="navbar-background">
        <Footer />
      </View>
    </>
  );
};
