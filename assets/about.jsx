import { animated as a, useSpring } from "react-spring";
import React,{useState} from "react";

export function About() {
  const [hoverStatus,setHoverStatus] = useState(false);
  const animation = useSpring({
    transform:hoverStatus?"translate(-50.53 -23.33) matrix(1.11565 0 0 1.17905 54.806 99.29)":"translate(90.53 30.33) matrix(1.11565 0 0 1.17905 54.806 99.29)"
  })

  return (
    <a.svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 1000 1000"
      onMouseEnter={()=>setHoverStatus(!hoverStatus)}
      onMouseLeave={()=>setHoverStatus(!hoverStatus)}
    >
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="19.97"
        d="M852.728 240.108H141.194v274.868c0 39.299 33.668 71.157 75.2 71.157h595.108l41.226-47.267V240.108z"
        transform="translate(-50.53 -23.33) matrix(1.11565 0 0 1.17905 -62.617 .573)"
      ></path>
      <a.path
        style={animation}
        stroke="#fff"
        strokeWidth="19.97"
        d="M852.728 240.108H141.194v274.868c0 39.299 33.668 71.157 75.2 71.157h595.108l41.226-47.267V240.108z"
        transform="translate(-50.53 -23.33) matrix(1.11565 0 0 1.17905 54.806 99.29)"
      ></a.path>
      <text
        x="202.383"
        y="588.787"
        fill="#fff"
        fontFamily="'ZCOOLQingKeHuangYou-Regular', 'ZCOOL QingKe HuangYou'"
        fontSize="312.755"
        transform="translate(-50.53 -23.33) translate(108.635 107.369)"
      >
        about
      </text>
    </a.svg>
  );
}



