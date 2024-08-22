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
import React, { useEffect, useState } from "react";
import "./search-page.css";
import { InfoCard } from "../../common/info-card/InfoCard";
import AdobeLogo from "../../../assets/icons/AdobeLogo.png";
import AcrobatLogo from "../../../assets/icons/AcrobatLogo.png";
import SignLogo from "../../../assets/icons/SignLogo.png";
import FilterSVG from "../../../assets/icons/FilterSVG";
import { Footer } from "../../../components/layout/footer/Footer";
import {
  SearchField,
  View,
  Heading,
  Image,
  Checkbox,
  Content,
} from "@adobe/react-spectrum";

export const SearchPage = () => {
  const [fetchSearchData, setFetchSearchData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputFilterResult, setInputFilterResult] = useState([]);
  const [signFilterResult, setSignFilterResult] = useState([]);
  const [acrobatFilterResult, setAcrobatFilterResult] = useState([]);
  const [certifiedFilterResult, setCertifiedFilterResult] = useState([]);
  const [resultOutput, setResultOutput] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [numberOfResults, setNumberOfResults] = useState(0);

  // Fetch data from JSON file to load up information for the cards
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/data/pages/searchToolsCollection.json`
        );
        const data = await response.json();
        const sortedData = [...data].sort((a, b) => {
          return a.id.localeCompare(b.id, undefined, { sensitivity: "base" });
        });

        setFetchSearchData(sortedData);
        setInputFilterResult(sortedData);
        setSignFilterResult(sortedData);
        setAcrobatFilterResult(sortedData);
        setCertifiedFilterResult(sortedData);
      } catch (err) {
        alert(err);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e);
  };

  // Filter and update the list of searchable features
  const updateFetchedDataForSearch = () => {
    const filteredData = fetchSearchData.filter((item) => {
      const lowerCaseTitle = item.title.toLowerCase();
      const lowerCaseSearchQuery = searchQuery.toLowerCase();
      return lowerCaseTitle.startsWith(lowerCaseSearchQuery);
    });
    setInputFilterResult(filteredData);
  };

  // Calls the updateFetchDataForSearch function when the searchQuery state changes
  useEffect(() => {
    if (searchQuery === "") {
      setInputFilterResult(fetchSearchData);
    } else {
      updateFetchedDataForSearch();
    }
  }, [searchQuery]);

  // Calls the getCombinedFilterResult if anything in the filter changes
  useEffect(() => {
    getCombinedFilterResult();
  }, [
    searchQuery,
    inputFilterResult,
    signFilterResult,
    acrobatFilterResult,
    certifiedFilterResult,
  ]);

  // Combines all the filters together
  const getCombinedFilterResult = () => {
    const combinedFilterResult = fetchSearchData.filter((item) => {
      return (
        signFilterResult.includes(item) &&
        acrobatFilterResult.includes(item) &&
        inputFilterResult.includes(item) &&
        certifiedFilterResult.includes(item)
      );
    });
    setResultOutput(combinedFilterResult);
    setNumberOfResults(combinedFilterResult.length);
  };

  // Handles the checkbox filter
  const handleCheckbox = (isChecked, value) => {
    const filterMap = {
      Sign: (item) => item.productType.includes("Sign"),
      Acrobat: (item) => item.productType.includes("Acrobat"),
      Certified: (item) => item.adobeCertified === true,
    };

    const setFilterResultMap = {
      Sign: setSignFilterResult,
      Acrobat: setAcrobatFilterResult,
      Certified: setCertifiedFilterResult,
    };

    const filteredData = isChecked
      ? fetchSearchData.filter(filterMap[value])
      : fetchSearchData;

    setFilterResultMap[value](filteredData);
  };

  // Loading screen
  if (!fetchSearchData) {
    return <div>Loading...</div>;
  }

  // Handles the filter dropdown
  const handleFilterClick = () => {
    setToggleFilter(!toggleFilter);
  };

  return (
    <View id="search-section">
      {/*********************************************************************
       *                     SEARCH BAR SECTION
       ********************************************************************/}
      <View id="container">
        <Content id="content">
          <View id="search-filter-container">
            <View id="search-input-container">
              <SearchField
                id="search-field"
                width="100%"
                onChange={handleInputChange}
                icon=""
                aria-label="Search Box"
              />
            </View>

            <View id="filter-icon-container">
              <div onClick={handleFilterClick}>
                <FilterSVG />
              </div>
            </View>
          </View>

          <Heading level={2}>Results Found: {numberOfResults}</Heading>

          {/*********************************************************************
           *                     FILTER DROPDOWN SECTION
           ********************************************************************/}
          <View
            id={
              toggleFilter
                ? "filter-dropdown-container"
                : "filter-dropdown-container-hidden"
            }
          >
            <View id="search-checkbox">
              <Heading level={2}>Filter By: </Heading>
            </View>
            <View id="search-checkbox">
              <Image src={SignLogo} alt="Sign Logo" />
              <Heading level={2}>Sign</Heading>
              <Checkbox
                value="Sign"
                onChange={(isChecked) => handleCheckbox(isChecked, "Sign")}
                aria-label="Sign Checkbox"
                margin="0px"
              />
            </View>
            <View id="search-checkbox">
              <Image src={AcrobatLogo} alt="Acrobat Logo" />
              <Heading level={2}>Acrobat</Heading>
              <Checkbox
                value="Acrobat"
                onChange={(isChecked) => handleCheckbox(isChecked, "Acrobat")}
                aria-label="AcrobatCheckbox"
              />
            </View>
            <View id="search-checkbox">
              <Image src={AdobeLogo} alt="AdobeLogo" ari />
              <Heading level={2}>Certified</Heading>
              <Checkbox
                value="Certified"
                onChange={(isChecked) => handleCheckbox(isChecked, "Certified")}
                aria-label="Certified Checkbox"
              />
            </View>
          </View>

          {/*********************************************************************
           *                     RESULT CARD SECTION
           ********************************************************************/}
          <View id="card-container">
            {resultOutput.length === 0 ? (
              <Content>
                <Heading level={2}>No Result Found</Heading>
              </Content>
            ) : (
              resultOutput.map((item) => {
                return <InfoCard key={item.id} cardData={item} />;
              })
            )}
          </View>
        </Content>
      </View>

      <View id="navbar-background">
        <Footer />
      </View>
    </View>
  );
};
