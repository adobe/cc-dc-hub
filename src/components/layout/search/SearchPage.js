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
    setSearchQuery(e.target.value);
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
  const handleCheckbox = (e) => {
    const checkboxValue = e.target.value;

    const filterMap = {
      Sign: (item) => item.productType.includes("Sign"),
      Acrobat: (item) => item.productType.includes("Acrobat"),
      Certified: (item) => item.adobeCertified === true,
    };

    if (e.target.checked) {
      const filteredData = fetchSearchData.filter(filterMap[checkboxValue]);
      switch (checkboxValue) {
        case "Sign":
          setSignFilterResult(filteredData);
          break;
        case "Acrobat":
          setAcrobatFilterResult(filteredData);
          break;
        case "Certified":
          setCertifiedFilterResult(filteredData);
          break;
        default:
          break;
      }
    } else {
      switch (checkboxValue) {
        case "Sign":
          setSignFilterResult(fetchSearchData);
          break;
        case "Acrobat":
          setAcrobatFilterResult(fetchSearchData);
          break;
        case "Certified":
          setCertifiedFilterResult(fetchSearchData);
          break;
        default:
          break;
      }
    }
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
    <div className="pageBackgroundContainer">
      {/*********************************************************************
       *                     SEARCH BAR SECTION
       ********************************************************************/}
      <div className="container containerBg">
        <div className="content contentUpdate">
          <div className="searchFilterContainer">
            <div className="searchInputContainer">
              <input
                className="searchInputField"
                type="text"
                placeholder="Search for something"
                onChange={handleInputChange}
              />
            </div>

            <div className="filterIconContainer">
              <div onClick={handleFilterClick}>
                <FilterSVG />
              </div>
            </div>
          </div>

          <h2>Results Found: {numberOfResults}</h2>

          {/*********************************************************************
           *                     FILTER DROPDOWN SECTION
           ********************************************************************/}
          <div
            className={
              toggleFilter
                ? "filterDropdownContainer"
                : "filterDropdownContainerHidden"
            }
          >
            <div className="searchCheckbox">
              <h2>Filter By: </h2>
            </div>
            <div className="searchCheckbox">
              <img src={SignLogo}></img>
              <h2>Sign</h2>
              <input type="checkbox" value="Sign" onClick={handleCheckbox} />
            </div>
            <div className="searchCheckbox">
              <img src={AcrobatLogo}></img>
              <h2>Acrobat</h2>
              <input type="checkbox" value="Acrobat" onClick={handleCheckbox} />
            </div>
            <div className="searchCheckbox">
              <img src={AdobeLogo}></img>
              <h2>Certified</h2>
              <input
                type="checkbox"
                value="Certified"
                onClick={handleCheckbox}
              />
            </div>
          </div>

          {/*********************************************************************
           *                     RESULT CARD SECTION
           ********************************************************************/}
          <div className="cardContainer">
            {resultOutput.length === 0 ? (
              <div>
                <h2>No Result Found</h2>
              </div>
            ) : (
              resultOutput.map((item) => {
                return <InfoCard key={item.id} cardData={item} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
