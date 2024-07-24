import React from "react";
import {Button,ButtonGroup,Flex,Heading, View} from '@adobe/react-spectrum';

export const Contribute = (props) => {
    return(
        <header id="contribute" >
             <div class="intro">
                {/* <div class="contributeIntro">
                    <div class="col-md-8 col-md-offset-2 intro-text">
                    <h1>Like to Contribute? We'd Love to Hear From You! <span></span></h1>
                    <a href="" class="btn btn-custom btn-lg page-scroll">Button</a>
                </div>
                </div> */}
                <Flex direction="column" alignItems="center" gap="size-3400">
                <View/>
                    <View>
                        <Heading level={1} alignSelf="center" >Like to Contribute? We'd Love to Hear From You!</Heading>
                        <Button align="center" variant="accent" height={"60px"} width={"150px"}>Rate Now</Button>
                    </View>
                    <View/>
                </Flex>
        </div>
    </header>
    )
}