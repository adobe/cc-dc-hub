import React from "react";
import "./tools.css";
import "../../../index.css";
import { ToolCard } from "../../common";
import { Flex, Grid, View } from "@adobe/react-spectrum";
import { TOOLS } from "../constant";

export const Tools = () => {
  return (
    <View id="tools-section">
      <View id="ResponsiveContainer">
        <Flex alignItems="center" justifyContent="center" direction="column">
          <View
            id="tools"
            className="tools u-d-flex u-justify-content-center u-align-items-center"
          >
            <Flex
              justifyContent="center"
              marginTop="size-1000"
              marginBottom="size-1000"
              alignItems="center"
            >
              <Grid
                areas={{
                  base: ["one", "two", "three", "four", "five", "six"],
                  M: ["one  two three", "four five six"],
                }}
                columns={{
                  base: ["1fr"],
                  M: ["1fr", "1fr", "1fr"],
                }}
                autoRows="size-4000"
                height="size-10000"
                width="100%"
                gap="size-1000"
              >
                {TOOLS.map((prop, index) => (
                  <ToolCard key={index} {...prop} />
                ))}
              </Grid>
            </Flex>
          </View>
        </Flex>
      </View>
    </View>
  );
};
