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
import styles from "./infoCard.module.css";
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
    featureFileName,
  } = cardData;

  const imgMap = {
    sample: <FileSVG />,
    integration: <GearSVG />,
    tool: <ToolSVG />,
  };

  const productTypeMap = {
    Acrobat: (
      <img
        className={styles.infoProductIcon}
        src={AcrobatLogo}
        alt="Acrobat Logo"
      />
    ),
    Sign: (
      <img className={styles.infoProductIcon} src={SignLogo} alt="Sign Logo" />
    ),
  };

  return (
    <div className={styles.infoCard}>
      <div className={styles.infoCardContainer}>
        <div className={`${styles.infoCardItem} ${styles.infoCardTitle}`}>
          <div className={styles.infoCardFeatureType}>
            {imgMap[featureType]}
          </div>
          <h3>{title}</h3>
        </div>
        <div className={`${styles.infoCardItem} ${styles.infoCardBody}`}>
          <p className={styles.itemDesc}>{desc}</p>
        </div>
        <div className={`${styles.infoCardItem} ${styles.infoCardFooter}`}>
          <div className={styles.infoCardFooterItem}>
            {productType.map((item) => {
              return <div key={id + item}>{productTypeMap[item]}</div>;
            })}
            {adobeCertified ? (
              <div>
                <img
                  className={styles.infoProductIcon}
                  src={AdobeLogo}
                  alt="Adobe Certified"
                />
              </div>
            ) : null}
          </div>
          <div className={styles.infoCardFooterItem}>
            <Button text="Learn More" color="blue" link={featureFileName} />
          </div>
        </div>
      </div>
    </div>
  );
};

