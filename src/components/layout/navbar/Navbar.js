// import { Flex, Link, View, Text } from "@adobe/react-spectrum";
import './navbar.css'
import React from "react";
import { Flex } from '@adobe/react-spectrum';

export const Navbar = (props) => {
  return (
    // <Flex direction="row" height="size-1200" className="navbar nabar-default navbar-fixed-top" gap="size-100">
    //     <View width="size-2000"> 
    //         <Text>Source hub</Text> 
    //     </View>
    //     <View  flex />
    // </Flex>

    <nav id="menu" className="navbar nabar-default navbar-fixed-top u-d-flex u-justify-content-center">
      <div class="col-md-8">
        <Flex justifyContent="space-between">
          <div class="navbar-header">
            <a class="navbar-brand page-scroll header-title" href="/">Community Source Hub</a> 
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a href="#header" class="page-scroll header-link">Home</a></li>
              <li><a href="#tools" class="page-scroll header-link">Tools</a></li>
              <li><a href="#contribute" class="page-scroll header-link">Contribute</a></li>
            </ul>
          </div>
        </Flex>
      </div>

    </nav>

  )
}