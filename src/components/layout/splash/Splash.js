import React from "react";
import "./Splash.css";
import {
  Button,
  ButtonGroup,
  Flex,
  Heading,
  View,
  Content,
} from "@adobe/react-spectrum";

export const Splash = () => {
  return (
    <View id="splash-section">
      <View id="ResponsiveContainer">
        <View id="intro">
          <Content id="col-md-8">
            <Flex direction="column" justifyContent="center">
              <Heading level={1}>
                <span className="splash-header u-font-weight-bold">
                  Empowering Success:
                </span>
                <span className="u-text-white u-font-weight-bold">
                  {" "}
                  Unlock Your Full Potential with Community Source Hub's
                  Solution
                </span>
              </Heading>
              <Heading level={3}>
                <span className="u-text-white">
                  Seamlessly integrate and leverage cutting-edge Tolls to prople
                  your success
                  <br /> and unlock new horizons of achivement
                </span>
              </Heading>
              <View marginTop="size-400">
                <ButtonGroup align="center">
                  <Button
                    variant="accent"
                    width={{ base: "100%", M: "size-1600" }}
                    height={"60px"}
                    borderRadius="large"
                  >
                    Rate Now
                  </Button>
                  <Button
                    variant="negative"
                    staticColor="white"
                    style="fill"
                    width={{ base: "100%", M: "size-1600" }}
                    height={"60px"}
                  >
                    No, thanks
                  </Button>
                </ButtonGroup>
              </View>
            </Flex>
          </Content>
        </View>
      </View>
    </View>
  );
};
