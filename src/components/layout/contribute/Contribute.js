import React from "react";
import "./contribute.css";
import { Button, Flex, Heading, View } from "@adobe/react-spectrum";

export const Contribute = () => {
  return (
    <View id="contribute">
      <View id="ResponsiveContainer">
        <Flex
          height="100%"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading level={1} alignSelf="center" marginBottom="size-400">
            Like to{" "}
            <span className="splash-header">
              <b>Contribute?</b>
            </span>{" "}
            Find out how you can make a difference!
          </Heading>
          <a href="https://github.com/adobe/cc-dc-hub">
            <Button
              align="center"
              variant="accent"
              height={"60px"}
              width={"150px"}
            >
              Find Out More
            </Button>
          </a>
        </Flex>
      </View>
    </View>
  );
};
