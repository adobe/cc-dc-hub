import React from 'react';
import './card.css';
import { Flex, Heading, View, Text } from '@adobe/react-spectrum';

export const Card = ({ record }) => {
  return (
    <div className='card'>
      <Flex direction="column">
        {record.sectionTitle && <Heading level={2} UNSAFE_className="card-header">{record.sectionTitle}</Heading>}
        {record.sectionDescription && <Text>{record.sectionDescription}</Text>}
        {record.sectionDetails?.length && <>
          {/* <Heading level={3}>Details:</Heading> */}
          {record.sectionDetails.map(detail => (
            <View>
              <Heading level={4} UNSAFE_className='card-section-header'>{detail?.title}</Heading>
              <Text>{detail?.description}</Text>
            </View>
          ))}
          </>
        }
      </Flex>
    </div>
  )
}