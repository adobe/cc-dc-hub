import "./tool-detail-header.css";
import "../../../index.css";
import "../../../assets/ToolsHeaderImage.jpeg";
import React from "react";
import { Flex, Heading, View, Image, Button } from "@adobe/react-spectrum";

export const ToolsDetailHeader = ({ title, description, repoUrl, docUrl }) => {
  return (
    <div className="tool-detail-header">
      <View id="ResponsiveContainer">
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          paddingTop="150px"
        >
          <View width="100%">
            <Heading level={1}>
              <span className="u-text-whit u-font-weight-bold">{title}</span>
            </Heading>
            <Heading level={3}>
              <span className="u-text-whit">{description}</span>
            </Heading>
            <br />
            <Flex wrap gap="size-250">
              <Button
                label="Repo"
                size="large"
                variant="accent"
                onPress={() => window.open(repoUrl, "_self")}
              >
                Repo
              </Button>
              {docUrl && (
                <Button
                  label="Docs"
                  size="large"
                  variant="accent"
                  onPress={() => window.open(docUrl, "_self")}
                  style="outline"
                >
                  Docs
                </Button>
              )}
            </Flex>
          </View>
          <View width="40%">
            <Flex justifyContent="center">
              <Image
                src={require("../../../assets/ToolsHeaderImage2.png")}
                alt="header"
                height="size-5000"
              />
            </Flex>
          </View>
        </Flex>
      </View>
    </div>
  );
};
