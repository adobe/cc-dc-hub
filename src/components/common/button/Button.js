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
import React from "react";
import './button.css';
import { Link } from "react-router-dom";

export const Button = ({ text, color, link = null, externalLink = null }) => {
  let fileName = link;

  const handleClick = () => {
    window.open(externalLink);
  };

  // This is a button for links to the feature detail in the search page
  if (link !== null) {
    return (
      <Link to={`/search/${fileName}`} state={{ fileName: fileName }}>
        <button className={`button ${color}`}>{text}</button>
      </Link>
    );
    // This is a button for external links
  } else if (externalLink !== null) {
    return (
      <button className={`button ${color}`} onClick={handleClick}>{text}</button>
    );
    // This is a button for internal links to other pages
  } else {
    return (
      <button className={`button ${color}`}>{text}</button>
    );
  }
};