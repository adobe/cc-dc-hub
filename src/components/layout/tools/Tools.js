import React from "react";
import './tools.css';
import { ToolCard } from '../../common';
import { Flex, Grid } from "@adobe/react-spectrum";
import { TOOLS } from '../constant';

export const Tools = (props) => {

  return (
    <div id="tools" className="tools u-d-flex u-justify-content-center u-align-items-center">
      <h1>Tools</h1>
      <Flex justifyContent="center" marginTop="size-500" marginBottom="size-500">
        <Grid
          areas={{
            base: [
              'one',
              'two',
              'three',
              'four',
              'five',
              'six'
            ],
            M: [ 
              'one  two three',
              'four five six'
            ],

          }}
          columns={{
            base: ['1fr'],
            M: ['1fr', '1fr', '1fr']
          }}
          // rows={['size-2000', 'size-2000', 'size-2000', 'size-2000']}
          autoRows="size-4000"
          height="size-10000"
          gap="size-400">
            {TOOLS.map(prop => <ToolCard  {...prop} />)}
        </Grid>
      </Flex>
    </div>
  )
}