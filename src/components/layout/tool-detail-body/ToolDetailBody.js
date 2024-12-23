import React from "react";
import { View, Content } from "@adobe/react-spectrum";
import "./tool-detail-body.css";
import "../../../index.css";
import "../splash/Splash.css";
import { Footer } from "../footer/Footer";
import LeaveSiteDialog from "../../common/dialog/LeaveSiteDialog";

export const ToolsDetailBody = ({ content }) => {
  
  const [showDialog, setShowDialog] = React.useState(false);
  const [targetUrl, setTargetUrl] = React.useState("");
  
  content = content.replaceAll("\n", "");
  
  const linkClickHandler = (e) => {

    // This is using bubbling, so need to ensure we only process anchors
    if (e.target.tagName !== "A") {
      return
    } 

    const a = e.target;
    if (a.href.startsWith("http")) {
      console.log("External link clicked");
      console.log(a.href);
      e.preventDefault();
      setTargetUrl(a.href);
      setShowDialog(true);
    } 
  }

  const primaryClickHandler = () => {
    window.open(targetUrl, "_self");
  }

  return (
    <>
      <View
        width="100%"
        margin="auto"
        padding="size-400"
        id="tool-detail-body-section"
      >
        <View id="ResponsiveContainer">
          <Content>
            <div onClick={linkClickHandler} dangerouslySetInnerHTML={{ __html: content}}></div>
          </Content>
        </View>
      </View>
      <View id="navbar-background">
        <Footer />
      </View>
      <LeaveSiteDialog 
        isOpen={showDialog} 
        primaryAction={() => primaryClickHandler()} 
        cancelAction={() => setShowDialog(false)}
      />
    </>
  );
};
