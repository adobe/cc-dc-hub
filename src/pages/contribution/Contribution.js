import '../../index.css';
import './contribution-page.css';
import React from 'react';
import { Contributions } from '../../components/layout'
import { Flex, Heading } from '@adobe/react-spectrum';

export const ContributionPage = () => {
  return (
    <>
      <div className='contribution'>
        <div className='contribution-header'>
          <Flex direction="column" justifyContent={"center"} alignItems={"center"} height={"100%"}>
            <Heading level={1}>
              <span className="u-text-white u-font-weight-bold">How to contribute your project to the Community Source Hub?</span>
            </Heading>
            <Heading level={3}>
              <span className="u-text-white">
                <h2 className='contribution-title'>Clone Our Repository</h2>
                <p>
                  The site is currently in its soft launch phase, and we are 
                  currently only accepting contributions from internal Adobe <br />
                  employees. If you are an internal employee, please {" "}
                  <a href="https://git.corp.adobe.com/nnguyen/acs-dc-community">
                  click here
                  </a>
                  . If you are not an Adobe employee, we'll have a more formal way
                  for you to submit your project soon.
                </p>
              </span>
            </Heading>
          </Flex>
        </div>
      </div>
      <Contributions />
    </>
  );
};
