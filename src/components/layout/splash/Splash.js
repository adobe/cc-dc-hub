import React from "react";
import './Splash.css'
import { Button, ButtonGroup, Flex, Heading } from '@adobe/react-spectrum';

export const Splash = (props) => {
  return (
    <header id="header" >
      <div class="intro">
        <div class="col-md-8 col-md-offset-2 intro-text">
          <Flex direction="column" justifyContent={"center"}>
            <Heading level={1} >
              <span className="splash-header u-font-weight-bold">Empowering Success:</span>
              <span className="u-text-white u-font-weight-bold"> Unlock Your Full <br /> Potential with Community Source <br /> Hub's Solution</span></Heading>
            <Heading level={3}>
              <span className="u-text-white">Seamlessly integrate and leverage cutting-edge Tolls to prople your success<br /> and unlock new horizons of achivement</span>
              </Heading>
            <ButtonGroup align="center" >
              <Button variant="accent" width="size-1600" height={"40px"} borderRadius="large">Rate Now</Button>
              <Button variant="negative" staticColor="white" style="fill" width="size-1600" height={"40px"}>No, thanks</Button>
            </ButtonGroup>
          </Flex>
        </div>
      </div>
    </header>
  )
}