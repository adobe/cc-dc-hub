import "./tool-detail-page.css";
import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { ToolsDetailHeader, ToolsDetailBody } from "../../components/layout";
import { View } from "@adobe/react-spectrum";

export const ToolsDetailPage = () => {
  const params = useParams();
  const [selectedTool, setSelectedTool] = useState();

  useEffect(() => {
    console.log(`Fetching tool data for ${params.id}`);

    (async () => {
      const searchData = await (
        await fetch(
          `${process.env.PUBLIC_URL}/data/pages/searchToolsCollection.json`
        )
      ).json();

      const toolEntry = searchData.filter((entry) => entry.id === params.id);
      if (toolEntry) {
        const response = await fetch(
          `${process.env.PUBLIC_URL}${toolEntry[0].path.replaceAll(
            "public",
            ""
          )}`
        );
        const tool = await response.json();
        setSelectedTool(tool);
      }
    })();
  }, [params.id]);

  return (
    <>
      {selectedTool && (
        <>
          <View id="tools-container">
            <ToolsDetailHeader
              title={selectedTool.properties.title}
              description={
                selectedTool.properties.tagline || selectedTool.properties.desc
              }
              repoUrl={selectedTool.properties.repo || ""}
              docUrlUrl={selectedTool.properties.docs || ""}
            />
            <ToolsDetailBody content={selectedTool.content} />
          </View>
        </>
      )}
    </>
  );
};
