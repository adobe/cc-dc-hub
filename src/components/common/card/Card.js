import React from "react";
import "./card.css";
import { Flex, Heading, View, Text, Divider } from "@adobe/react-spectrum";

export const Card = ({ record }) => {
  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((desc, idx) => (
        <Text key={idx}>{parseAndCreateLink(desc)}</Text>
      ));
    } else {
      return <Text>{parseAndCreateLink(description)}</Text>;
    }
  };

  const parseAndCreateLink = (text) => {
    const regex = /(https:\/\/\S+)\s+\[([^\]]+)\]/;
    const match = text.match(regex);

    if (match) {
      const url = match[1];
      const anchorText = match[2];
      const beforeText = text.substring(0, match.index);
      const afterText = text.substring(match.index + match[0].length);

      return (
        <span>
          {beforeText}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {anchorText}
          </a>
          {afterText}
        </span>
      );
    }

    return <span>{text}</span>;
  };

  return (
    <div className="card">
      <Flex direction="column">
        {record.sectionTitle && (
          <Heading level={2} UNSAFE_className="card-header">
            {record.sectionTitle}
          </Heading>
        )}
        {record.sectionDescription && (
          <Text id="card-description">{record.sectionDescription}</Text>
        )}
        {record.sectionDetails?.length > 0 && (
          <>
            {record.sectionDetails.map((detail, index) => (
              <View key={index}>
                <Flex direction="column">
                  <Heading level={4} UNSAFE_className="card-section-header">
                    {detail?.title}
                  </Heading>
                  {renderDescription(detail?.description)}
                </Flex>
              </View>
            ))}
          </>
        )}
      </Flex>
    </div>
  );
};
