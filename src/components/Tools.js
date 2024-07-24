import React from "react";
import {Flex,Grid,Heading,Text,Image,Link,Cell} from "@adobe/react-spectrum";
import { View } from "@adobe/react-spectrum";



export const Tools =(props) => {
    
    return(
      <Flex justifyContent="center" marginTop="size-500">
        
    <Grid
  areas={[
    'one  two three',
    'four five six'
  ]}
  columns={['1fr', '1fr','1fr']}
  rows={['size-2000',  'size-2000']}
  height="size-10000"
  gap="size-400">
    <div class="curved-grid-oranage">
  <View padding= "size-10"  gridArea="one"> 
  <Heading center>Services</Heading>
  <Text> This is one used to search serviced</Text>
  {/* <Link href="https://example.com" isExternal>
          Visit Example
        </Link> */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Image src="https://lfdanlu.github.io/docPhotos/photos/DSC00591.jpeg" 
              alt="Centered Image"
              width="80px"
              height="80px"
              objectFit="contain"
              justifyContent = "center"
            />
            </div>
 </View>
  </div>
  <div class="curved-grid-seafoam">
  <View padding= "size-50"  gridArea="Two"> 
  <Heading center>Tools</Heading>
  <Text> This is one used to find the available tools</Text>
  <Heading center>Learn More</Heading>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Image src="https://lfdanlu.github.io/docPhotos/photos/DSC00591.jpeg" 
              alt="Centered Image"
              width="80px"
              height="80px"
              objectFit="contain"
              justifyContent = "center"
            />
            </div>
 </View>
  </div>

  <div class="curved-grid-purple">
  <View padding= "size-50"  gridArea="Three"> 
  <Heading center>Tools</Heading>
  <Text> This is one used to find the available tools</Text>
  <Heading center>Learn More</Heading>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Image src="https://lfdanlu.github.io/docPhotos/photos/DSC00591.jpeg" 
              alt="Centered Image"
              width="80px"
              height="80px"
              objectFit="contain"
              justifyContent = "center"
            />
            </div>
 </View>
  </div>

</Grid>
</Flex> 
              
    )
}