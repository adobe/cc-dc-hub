import React from "react";
import { ToolCard } from '../../common';
import { Flex, Grid } from "@adobe/react-spectrum";
import { TOOLS } from '../constant';

export const Tools = (props) => {

  return (
    <Flex justifyContent="center" marginTop="size-500" marginBottom="size-500">
      <Grid
        areas={[ 
          'one  two three',
          'four five six'
        ]}
        columns={['1fr', '1fr', '1fr']}
        // rows={['size-2000', 'size-2000', 'size-2000', 'size-2000']}
        autoRows="size-4000"
        height="size-10000"
        gap="size-400">
          {TOOLS.map(prop => <ToolCard  {...prop} />)}
      </Grid>
    </Flex>
  )
}