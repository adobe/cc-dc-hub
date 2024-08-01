import React from "react";
import './feature.css';
import { Heading } from '@adobe/react-spectrum';

export const Feature = (props) => {
  return (
    <header id="features" >
      <div className="feature-intro">
        <div className="intro-text">
          <Heading level={1}>
            <span className="feature-text">
              Unleash Our Versatile <span className="splash-header">API</span> Anywhere, <br/>
              Anytime!
            </span>
          </Heading>
        </div>
      </div>
    </header>
  )
}