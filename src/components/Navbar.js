import { Flex, Link, View,Text } from "@adobe/react-spectrum";
import React from "react";

export const Navbar = (props) => {
    return(
        // <Flex direction="row" height="size-1200" className="navbar nabar-default navbar-fixed-top" gap="size-100">
        //     <View width="size-2000"> 
        //         <Text>Source hub</Text> 
        //     </View>
        //     <View  flex />
        // </Flex>
        
        <nav id="menu" className="navbar nabar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                 <a class="navbar-brand page-scroll" href="/">COMMUNITY SOURCE HUB</a> </div>
                      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="" class="page-scroll">HOME</a></li>
                            <li><a href="" class="page-scroll">TOOLS</a></li>
                            <li><a href="" class="page-scroll">CONTRIBUTE</a></li>
                        </ul>
                </div>
            </div>

        </nav>

    )
}