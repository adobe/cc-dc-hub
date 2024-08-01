import '../../index.css';
import './tools-page.css';
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Flex, Heading, View } from '@adobe/react-spectrum';
import { Navbar, Footer, Splash, Tools, Feature, Contribute, Apps } from "../../components";
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import JsonData from "../../data/data.json";
import { SearchPage } from '../../components/layout/search/SearchPage';


const ToolsPage = () => {
  return (
    <>
      <div className='tools-header'>
        <Flex direction="column" justifyContent={"center"} alignItems={"center"} height={"100%"}>
          <Heading level={1} >
            <span className="u-text-white u-font-weight-bold">Find The Perfect Solution For Your Business</span></Heading>
          <Heading level={3}>
            <span className="u-text-white">Discover Your Perfect Fit: Uncover the Solution That Works Best for You</span>
          </Heading>
        </Flex>
      </div>
      <SearchPage />
    </>
  );
}

export default ToolsPage;
