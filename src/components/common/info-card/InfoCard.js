/************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.

 *************************************************************************
 */
// create a react component called InfoCard
import React from "react";
import "./info-card.css";
import FileSVG from "../../../assets/icons/FileSVG";
import GearSVG from "../../../assets/icons/GearSVG";
import ToolSVG from "../../../assets/icons/ToolSVG";
import AdobeLogo from "../../../assets/icons/AdobeLogo.png";
import AcrobatLogo from "../../../assets/icons/AcrobatLogo.png";
import SignLogo from "../../../assets/icons/SignLogo.png";
import { Button } from "../button/Button";

export const InfoCard = ({ cardData }) => {
  const {
    id,
    title,
    desc,
    featureType,
    productType,
    adobeCertified,
  } = cardData;

  const imgMap = {
    sample: <FileSVG />,
    integration: <GearSVG />,
    tool: <ToolSVG />,
  };

  const productTypeMap = {
    Acrobat: (
      <img
        className="infoProductIcon"
        src={AcrobatLogo}
        alt="Acrobat Logo"
      />
    ),
    Sign: (
      <img className="infoProductIcon" src={SignLogo} alt="Sign Logo" />
    ),
  };

  return (
    <div className="infoCard">
      <div className="infoCardContainer">
        <div className="infoCardItem infoCardTitle">
          <div className="infoCardFeatureType">
            {imgMap[featureType]}
          </div>
          <h3>{title}</h3>
        </div>
        <div className="infoCardItem infoCardBody">
          <p className="itemDesc">{desc}</p>
        </div>
        <div className="infoCardItem infoCardFooter">
          <div className="infoCardFooterItem">
            {productType.map((item) => {
              return <div key={id + item}>{productTypeMap[item]}</div>;
            })}
            {adobeCertified ? (
              <div>
                <img
                  className="infoProductIcon"
                  src={AdobeLogo}
                  alt="Adobe Certified"
                />
              </div>
            ) : null}
          </div>
          <div className="infoCardFooterItem">
            <Button text="Learn More" color="blue" link={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

