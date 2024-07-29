import React from "react";
import './apps.css'
import { Flex } from '@adobe/react-spectrum'

export const Apps = (props) => {
  const images = require.context('../../../assets/icons', true);
  const imageList = images.keys().map(image => images(image));

  return (
    <div className="apps">
      <Flex justifyContent="center" width="100%" >
        <div className="col-md-8">
          <Flex direction="row" gap="size-200" justifyContent="center" alignContent='space-around' wrap>
            {imageList.map((image, index) => (
              <img key={index} src={image} className="app-img" />
              ))}
          </Flex>
        </div>
      </Flex>
    </div>
  );
}

