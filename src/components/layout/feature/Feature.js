import React from "react";
import './feature.css';
import { Heading } from '@adobe/react-spectrum';

export const Feature = (props) => {
  return (
    <header id="features" >
      <div class="feature-intro">
        <div class="intro-text">
          <Heading level={1}>
            <span className="feature-text">
              Unlesh Our Versatile <span class="splash-header">API</span> Anywhere, <br/>
              Anytime!
            </span>
          </Heading>
        </div>
      </div>
    </header>
  )
}