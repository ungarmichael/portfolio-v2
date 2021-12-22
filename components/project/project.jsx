import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { animated as a } from "react-spring";

const UgProject = (props) => {
  if (props.Title != "Trailer") {
    return (
      <a.div style={props.style} className="ug-project">
        <div className="section-1">
          <div className="text">
            <div className="ug-project-title">{props.Title}</div>
            <div className="ug-project-slogan">{props.Slogan}</div>
          </div>
          <div className="image">
            <img className="image-class" src={props.Image} alt="image here" />
          </div>
        </div>

        <div className="section-2">
          <div className="image-2">
            <img className="image-class" src={props.Image2} alt="image here" />
          </div>
          <div className="text2">
            <div className="ug-project-description">{props.Description}</div>
          </div>
        </div>

        <div className="ug-project-link">
          {props.Link}
          <div className="ug-project-contact-border">
            <a href={props.LinkURL} className="link">
              here
            </a>
          </div>
        </div>
      </a.div>
    );
  } else {
    return (
      <a.div style={props.style} className="ug-trailer">
        <div className="ug-project-title"> More Projects coming soon</div>
        <div className="ug-project-you">Want to work together?</div>
        <div className="ug-project-contact">
          <div className="ug-project-contact-first">Contact me</div>
          <Link href="/contact" >
          <span className="contact-span">
            <a>here</a>
          </span>
          </Link>
        </div>
      </a.div>
    );
  }
};

export default UgProject;
