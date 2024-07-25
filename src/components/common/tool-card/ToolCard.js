import React from "react";
import './tool-card.css'
import { Heading, Text, Image, View, Link, Content } from "@adobe/react-spectrum";

export const ToolCard = ({ bgColorClass, title, description, img, link }) => {
  return (
    <div class={`${bgColorClass} tool`}>
      <View padding="size-10" gridArea="one">
        <Heading center><span className="u-font-weight-bold">{title}</span></Heading>
        <Text>{description}</Text>
        <Content>
          <Link href="https://example.com" variant="secondary" UNSAFE_className="tool-link">Learn More</Link>
        </Content>
        <div className="u-d-flex u-justify-content-center u-align-items-center u-height-full image-container">
          <Image src={img.url} alt={img.alt} width="80px" height="80px" objectFit="contain" justifyContent="center"  />
        </div>
      </View>
    </div>
  );
}