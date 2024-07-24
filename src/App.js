import './App.css';
import  React, { useState, useEffect } from 'react';
import {Navbar} from "./components/Navbar";
import {Splash} from "./components/Splash";
import {Tools} from "./components/Tools";
import {Feature} from "./components/Feature";
import {Contribute} from "./components/Contribute";
import {Apps} from "./components/Apps";
import {Footer} from "./components/Footer";
import JsonData from "./data/data.json";
import { Provider, defaultTheme, Heading, Button, Flex, View } from '@adobe/react-spectrum';


const App=() =>{
  const [landingPageData,setlandingPageData] = useState({});
  useEffect(()=> {
  setlandingPageData(JsonData)
  }, []);

  return (
    <Provider theme={defaultTheme}>
      <Navbar/>
      <Splash data={landingPageData.Splash} />
      <Tools data={landingPageData.Tools} />
      <Feature data={landingPageData.Feature} />
      <Apps data={landingPageData.Apps} />
      <Contribute data={landingPageData.Contribute} />
      <Footer data={landingPageData.Footer} /> 
    </Provider>
  );
}

export default App;
