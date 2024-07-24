import React from "react";
import {Button,ButtonGroup,Flex,Heading} from '@adobe/react-spectrum';

export const Splash =(props) =>{
     return(

     <header id="header" >
          <div class="intro">
               <div class="col-md-8 col-md-offset-2 intro-text">
                    <Flex direction="column" justifyContent={"center"}>
                         <Heading level={1}><span color="gray-50">Empowering Success : Unlock Your Full Potential with Community Source Hub's Solution</span></Heading>
                         <Heading level={3}>Seamlessly integrate and leverage cutting-edge Tolls to prople your success and unlock new horizons of achivement</Heading>
                         <ButtonGroup align="center" >
                              <Button variant="accent" height={"60px"} width={"150px"}>Rate Now</Button>
                              <Button variant="accent" height={"60px"} width={"150px"}>No, thanks</Button>
                         </ButtonGroup>
                    </Flex>
               </div>
          </div>
      </header>

    
     )
}