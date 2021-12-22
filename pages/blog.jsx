import React, { useState, useEffect, useContext, useRef } from "react";
import { animated as a, useSpring, useTransition } from "react-spring";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from 'next/image';
// import Head from "../../components/ContentSwitch/ContentSwitch.jsx";

import Container from "../components/Container/container.jsx";

import Link from "next/link";
import { useRouter } from "next/router";

import { SearchContext } from "../context/SearchContext";

// import SearchIcon from "./../../assets/SearchIcon.png";

// import "./content.scss";
// import { Helmet } from 'react-helmet'

const Blog = () => {
  const API_URL = "https://api.ungarmichael.com/contributions";
  // const API_URL = "http://api.ungarmichael.com:8080/contributions";
  const [contributions, setContributions] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [fetchingErrorStatus, setFetchingErrorStatus] = useState(false);
  const [heading, setHeading] = useState("recents");
  const [contributionSearchResults, setContributionSearchResults] = useState(
    []
  );
  const [isActive, setActive] = useState(false);
  const [searchInput, setSearchInput] = useContext(SearchContext);
  const searchRef = useRef();
  const location = useRouter().pathname;
  const searchSpring = useSpring({ width: isActive ? "200px" : "140px" });

  const fetchData = async () => {
    await fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setContributions(data);
        setLoaded(true);
      })
      .catch((error) => {
        setFetchingErrorStatus(true);
        throw error;
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    contributions.map((x) => {
      // boolean isFound = searchInput.indexOf(x.Name) != -1 ? true : false;
      if (x.Name.includes(searchInput)&&!contributionSearchResults.includes(x)) {
        // contributionSearchResults.forEach((b)=>{
        //   if(b.Name == x.Name){
        //     return;
        //   }
        // })
        setContributionSearchResults((prevRes) => {
          return [...prevRes, x];
        });
      }else{
        if(contributionSearchResults.includes(x)){
          var index = contributionSearchResults.indexOf(x);
          contributionSearchResults.splice(index,1);
          setContributionSearchResults(contributionSearchResults);
        }
      }
    });
  }, [searchInput]);

  useEffect(() => {
    if (contributionSearchResults.length == 0 && searchInput != "") {
      setHeading("noresult");
    } else if (searchInput == "") {
      setHeading("recents");
    } else if (contributionSearchResults.length == 1) {
      setHeading("result");
    } else if (contributionSearchResults.length > 1) {
      setHeading("results");
    }
  }, [contributionSearchResults]);

  const springProps = useSpring({
    from: {
      opacity: 0,
      color: "gray",
      transform: "translate3d(100px, 0,0)",
    },
    to: {
      opacity: 1,
      color: "white",
      transform: "translate3d(0, 0,0)",
    },
  });

  const springHeadingTransition = useTransition(heading, null, {
    from: {
      opacity: 0,
      color: "gray",
      transform: "translate3d(100px, 0,0)",
    },
    enter: {
      opacity: 1,
      color: "white",
      transform: "translate3d(0, 0,0)",
    },
    leave: {
      opacity: 1,
      color: "white",
      transform: "translate3d(0, 0,0)",
    },
  });

  return (
    <>
      <Head>
        <title>Ungar | Contributions</title>
      </Head>
      <motion.div
        className="ug-content"
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          style={{
            backgroundColor: "transparent",
            height: "100px",
            width: "100%",
          }}
        ></div>
        <div className="search-bar">
          {heading == "recents" ? (
            <div className="ug-container-recents_heading">recents</div>
          ) : heading == "results" ? (
            <div className="ug-container-recents_heading">results</div>
          ) : heading == "result" ? (
            <div className="ug-container-recents_heading">result</div>
          ) : heading == "noresult" ? (
            <div className="ug-container-recents_heading">no results</div>
          ) : (
            "error"
          )}
          <a.div className="ug-btn-search" style={searchSpring}>
            <input
              ref={searchRef}
              onFocus={() => {
                setActive(true);
              }}
              onBlur={() => {
                setActive(false);
              }}
              onChange={(e) => setSearchInput(e.target.value)}
              className="ug-btn-search-input"
              type="text"
              value={searchInput}
              placeholder="search"
            />
            <div
              onClick={() => {
                searchRef.current.focus();
              }}
              className="ug-btn-search_icon"
            >
              {/* <img src={SearchIcon} alt="" height="20px" width="20px" /> */}
              <Image src="/assets/Searchicon.png" height={30} width={30}/>
            </div>
          </a.div>
        </div>

        {searchInput == ""
          ? contributions.map((x) => (
              <Container
                key={x.ID}
                Name={x.Name}
                Route={x.Route}
                Description={x.Description}
              />
            ))
          : contributionSearchResults.length != 0
          ? contributionSearchResults.map((x) => (
              <Container
                key={x.ID}
                Name={x.Name}
                Route={x.Route}
                Description={x.Description}
              />
            ))
          : ""}
      </motion.div>
    </>
  );
};

export default Blog;
