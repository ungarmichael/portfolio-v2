import React, { useState, useRef, useEffect, useContext } from "react";
import { useSpring, animated as a } from "react-spring";
import { SearchContext } from "./../../context/SearchContext";

import Link from "next/link";
import { useRouter } from "next/router";
import Loginbtn from "./../../assets/loginbtn.svg";
import FullLogo from "./../../assets/UNGAR-FULL.svg";

const UgBtn = () => {
  const router = useRouter();
  // const [isActive, setActive] = useState(false);
  // const [searchInput, setSearchInput] = useContext(SearchContext);
  // const searchRef = useRef();
  // const location = useLocation();

  if (router.pathname == "/") {
    return (
      <div className="ug-btn">
        <Link className="ug-nav-link" href="/login">
          <a>
            <div className="ug-btn-login"><Loginbtn/></div>
          </a>
        </Link>
      </div>
    );
  } else if (router.pathname == "/projects") {
    return (
      <div className="ug-btn">
        <Link className="ug-nav-link" href="/login">
          <a>
          <div className="ug-btn-login"><Loginbtn/></div>
          </a>
        </Link>
      </div>
    );
  } else if (router.pathname == "/content") {
    return (
      <div className="ug-btn">
        <a>
          <Link className="ug-nav-link" href="/login">
          <div className="ug-btn-login"><Loginbtn/></div>
          </Link>
        </a>
      </div>
    );
  } else if (router.pathname == "/contact") {
    return (
      <div className="ug-btn">
        <div className="ug-btns">
          <Link className="ug-nav-link" href="/login">
            <a>
              <div className="ug-btn-login"><Loginbtn/></div>
            </a>
          </Link>
        </div>
      </div>
    );
  } else if (router.pathname == "/login") {
    return (
      <div className="ug-btn">
        <div className="ug-btns"></div>
      </div>
    );
  } else {
    return (
      <div className="ug-btn">
        <Link className="ug-nav-link" href="/login">
          <a>
          <div className="ug-btn-login"><Loginbtn/></div>
          </a>
        </Link>
      </div>
    );
  }
};

export default UgBtn;
