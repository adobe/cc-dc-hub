import React from "react";
import './contribute.css';
import { Button, Flex, Heading, View } from '@adobe/react-spectrum';
// ButtonGroup from @adobe/react-spectrum

export const Contribute = (props) => {
  return (
    <header id="contribute">
      <div class="contribute u-d-flex u-justify-content-center u-align-items-center">
        {/* <div class="contributeIntro">
          <div class="col-md-8 col-md-offset-2 intro-text">
            <h1>Like to Contribute? We'd Love to Hear From You! <span></span></h1>
            <a href="" class="btn btn-custom btn-lg page-scroll">Button</a>
          </div>
        </div> */}
        {/* gap="size-3400" */}
        <Flex direction="column" alignItems="center" >
          <View />
          <View>
            <Heading level={1} alignSelf="center" >Like to Contribute? We'd Love to Hear From You!</Heading>
            <Button align="center" variant="accent" height={"60px"} width={"150px"}>Rate Now</Button>
          </View>
          <View />
        </Flex>
      </div>
    </header>
  )
}