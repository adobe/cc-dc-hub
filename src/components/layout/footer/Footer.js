import React from 'react';
import './footer.css'
import { Footer as Ftr, Heading, Flex } from '@adobe/react-spectrum';

export const Footer = (props) => {
  return (
    <Ftr marginBottom="10px">
      <div className='footer'>
        <Flex justifyContent="space-between">
          <Heading level={4}>License &copy; Adobe Inc. All Rights Reserved.</Heading>
          <Heading level={4}>Community Source Hub</Heading>
        </Flex>
      </div>
    </Ftr>
  )
}