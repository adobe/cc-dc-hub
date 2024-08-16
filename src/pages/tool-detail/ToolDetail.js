import './tool-detail-page.css';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { ToolsDetailHeader, ToolsDetailBody } from '../../components/layout';
import json from './mock.json'

export const ToolsDetailPage = () => {
  const params = useParams()
  const [ selectedTool, setSelectedTool ] = useState();
  const { properties: { tagline, title, repo }, content } = json;

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:3000${process.env.PUBLIC_URL}/data/pages/searchToolsCollection.json`
      );
      const toolsData = await response.json();
      const tool = toolsData.find(e => e.id === params.id)
      setSelectedTool(tool);
    })();
  }, []);

  return (
    <>
      {selectedTool &&
        <>
          <ToolsDetailHeader 
            title={selectedTool.title} 
            description={selectedTool.tagline || selectedTool.desc} 
            repoUrl={selectedTool.repo || ''} 
            docUrlUrl={selectedTool.docs || ''} 
          />
          <ToolsDetailBody content={content} />
          <br /><br />
        </>}
    </>
  );
}