import React from "react";
import './tools.css';
import { ToolCard } from '../../common';
import { Flex, Grid, Heading } from "@adobe/react-spectrum";
import { TOOLS } from '../constant';

export const Tools = (props) => {

  return (
    <Flex alignItems="center" justifyContent="center" direction="column">
      <div id="tools" className="tools col-md-8">
        {/* <Heading level={1} marginX="auto" maxWidth="fit-content" marginTop="80px">Tools</Heading> */}
        <Flex justifyContent="center" marginTop="size-1000" marginBottom="size-1000" alignItems="center">
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
            width="100%"
            gap="size-1000">
            {TOOLS.map((prop, index) => <ToolCard key={index} {...prop} />)}
          </Grid>
        </Flex>

      </div>
    </Flex>
  )
}