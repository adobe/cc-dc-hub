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

 **************************************************************************/
import React from "react";
import "./info-card.css";
import AdobeLogo from "../../../assets/icons/AdobeLogo.png";
import AcrobatLogo from "../../../assets/icons/AcrobatLogo.png";
import SignLogo from "../../../assets/icons/SignLogo.png";
import { Button } from "../button/Button";
import {
  View,
  Content,
  Heading,
  Text,
  Image,
  Flex,
} from "@adobe/react-spectrum";

export const InfoCard = ({ cardData }) => {
  const { id, title, desc, productType, adobeCertified } = cardData;

  const productTypeMap = {
    Acrobat: (
      <Image id="info-product-icon" src={AcrobatLogo} alt="Acrobat Logo" />
    ),
    Sign: <Image id="info-product-icon" src={SignLogo} alt="Sign Logo" />,
  };

  return (
    <View id="info-card">
      <Flex>
        <View id="info-card-container">
          <View id="info-card-item">
            <Content id="info-card-title">
              <Heading level={3}>{title}</Heading>
            </Content>
          </View>
          <View id="info-card-item">
            <Content id="info-card-body">
              <Flex height="70%" alignSelf="flex-start">
                <Text id="item-desc">{desc}</Text>
              </Flex>
            </Content>
          </View>
          <View id="info-card-item">
            <View id="info-card-footer" width="100%">
              <Flex
                width="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Content id="info-card-footer-item">
                  {productType.map((item) => {
                    return <View key={id + item}>{productTypeMap[item]}</View>;
                  })}
                  {adobeCertified ? (
                    <View>
                      <Image
                        className="infoProductIcon"
                        src={AdobeLogo}
                        alt="Adobe Certified"
                      />
                    </View>
                  ) : null}
                </Content>
                <Content id="info-card-footer-item">
                  <Button text="Learn More" color="blue" link={id} />
                </Content>
              </Flex>
            </View>
          </View>
        </View>
      </Flex>
    </View>
  );
};
