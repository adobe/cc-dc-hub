import React from "react";
import './contribution.css'
import { Flex } from '@adobe/react-spectrum';
import { contributionData } from './contribution-data';
import { Card } from '../../common';

export const Contributions = (props) => {
  return (
    <div className="contribution-container">
      <div className="contribution-section">
        <Flex justifyContent="space-between" direction={"column"}>
            {contributionData.map(contribution => (
              <div className="card-container">
                <Card record={contribution} /> 
              </div>
            ))}
        </Flex>
      </div>
    </div>
  )
}