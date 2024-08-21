import React from "react";
import "./tool-card.css";
import {
  Heading,
  Text,
  Image,
  View,
  Link,
  Content,
  Flex,
} from "@adobe/react-spectrum";

export const ToolCard = ({ bgColorClass, title, description, img, link }) => {
  return (
    <div className={`${bgColorClass} tool`}>
      <View padding="size-10" gridArea="one">
        <Heading center>
          <span className="u-font-weight-bold">{title}</span>
        </Heading>
        <Text>{description}</Text>
        <Content>
          <Link
            href="https://example.com"
            variant="secondary"
            UNSAFE_className="tool-link"
          >
            Learn More
          </Link>
        </Content>
        <Flex id="image-container" justifyContent="center" alignItems="center">
          <Image
            src={img.url}
            alt={img.alt}
            width="100px"
            height="100px"
            objectFit="contain"
            justifyContent="center"
          />
        </Flex>
      </View>
    </div>
  );
};
