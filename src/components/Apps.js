import React from "react";
import {Flex} from '@adobe/react-spectrum'


export const Apps = (props) => {

    const images = require.context('../assets/icons', true);
    const imageList = images.keys().map(image => images(image));

    return(
        <Flex direction="row" height="size-2000" gap="size-100" justifyContent="center" alignContent='space-around'  wrap >
                    {imageList.map((image, index) => (
                     <img key={index} src={image} />
                    ))}
        </Flex>
    )
}

