import React from 'react';
import { View } from '@adobe/react-spectrum';

export const ToolsDetailBody = ({ content }) => {
  content = content.replaceAll('\n', '')
  return (
    <View width="80vw" margin="auto" backgroundColor="static-white" padding="size-400">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </View>
  );
}