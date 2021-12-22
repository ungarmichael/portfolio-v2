import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSpring, config, animated as a } from "react-spring";
import emailjs from "emailjs-com";
import UgLink from "../components/contactLink/contactlink.jsx";
import Head from "next/head";
import Image from "next/image";
import Twitter from "./../assets/twitter.svg";
import Fiverr from "./../assets/fiverr.svg";
import Dribble from "./../assets/dribble.svg";
import Linkedin from "./../assets/linkedin.svg";
import Instagram from "./../assets/instagram.svg";
import Github from "./../assets/github.svg";
import Bar200 from "./../assets/bar200.svg";
import Bar50 from "./../assets/bar50.svg";

import { BlurContext } from "../context/BlurContext.js";

export default function Contact() {
  var ungar_email_serviceID = "ungar-gmail";
  var ungar_email_templateID = "ungar-template";
  var ungar_email_userID = "user_aElxq1gVsDKZjQqSdu8al";
  const [linkColor, setLinkColor] = useState("blue");
  const [mailStatus, setMailStatus] = useState(null);
  const [blur, setBlur] = useContext(BlurContext);
  const changeMailStatusTo = (ms) => {
    setMailStatus(ms);
    setBlur("4px");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        ungar_email_serviceID,
        ungar_email_templateID,
        e.target,
        ungar_email_userID
      )
      .then(
        (result) => {
          changeMailStatusTo(result.text);
        },
        (error) => {
          changeMailStatusTo(error.text);
        }
      );
  };

  const contactSpring = useSpring({
    to: { opacity: 1, marginTop: "0px" },
    from: { opacity: 0, marginTop: "-400px" },
    config: config.stable,
  });

  const mailStatusSpring = useSpring({
    to: { opacity: 1, marginTop: "0px" },
    from: { opacity: 0, marginTop: "-400px" },
    config: config.stable,
  });

  return (
    <React.Fragment>
      <Head>
        <title>Ungar | Contact</title>
        <meta name="description" content="Contact Michael Ungar" />
        <meta name="theme-color" content="#000000" />
      </Head>

      {mailStatus != null ? (
        <div className="ug-contact-mailStatus">
          {
            <a.div
              style={mailStatusSpring}
              className="ug-contact-mailStatus-box"
            >
              <p>Your message was sent succesfully.</p>
              <p>I will try my best to message you back as soon as possible.</p>
              <button
                onClick={() => {
                  setMailStatus(null);
                  setBlur(null);
                }}
              >
                OK
              </button>
            </a.div>
          }
        </div>
      ) : null}
      <motion.div
        className="ug-contact"
        style={
          mailStatus != null ? { filter: `blur(${blur})` } : { filter: "none" }
        }
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        // import Twitter from './../assets/twitter.svg' // import Fiverr from
        './../assets/fiverr.svg' // import Dribble from
        './../assets/dribble.svg' // import Linkedin from
        './../assets/linkedin.svg' // import Instagram from
        './../assets/instagram.svg'
        <div className="ug-contact-container">
          {/* <div className="ug-contact-links">
              <div className="ug-contact-links-pos">
                <UgLink
                  imageSource="./../assets/twitter.svg"
                  linkHref="https://www.facebook.com/michael.ungar.1232"
                  name="Facebook"
                  username="@ungarmichael"
                />
                <UgLink
                  imageSource='./../assets/instagram.svg'
                  linkHref="https://www.instagram.com/ungar_/"
                  name="Instagram"
                  username="@_ungar"
                />
                <UgLink
                  imageSource="/assets/Instagram-Logo.png"
                  linkHref="https://www.instagram.com/ungar_/"
                  name="Instagram"
                  username="@_ungar"
                />
                <UgLink
                  imageSource="/assets/Github-Logo.png"
                  linkHref="https://github.com/ungarmichael"
                  name="Github"
                  username="@ungarmichael"
                />
                <UgLink
                  imageSource="/assets/Fiverr-Logo.png"
                  linkHref="https://www.fiverr.com/ungarmichael"
                  name="Fiverr"
                  username="@ungarmichael"
                />
                <UgLink
                  imageSource="/assets/Linkedin-Logo.png"
                  linkHref="https://www.linkedin.com/in/michael-ungar-9624391b4/"
                  name="Linkedin"
                  username="@Michael Ungar"
                />
              </div>
            </div> */}
          {/* <a.div style={contactSpring} className="ug-contact-divider"></a.div> */}
          <div className="ug-contact-frame">
            <a.div style={contactSpring} className="ug-contact-input">
              <form onSubmit={sendEmail}>
                <div className="ug-contact-input-heading">say hello</div>
                <div className="ug-contact-input-box">
                  <div className="wrapper50">
                    <Bar50 className="bar50" />
                    <input
                      type="email"
                      name="user_email"
                      className="ug-contact-input-box-input"
                      placeholder="enter email"
                      required
                    />
                  </div>
                  <div>
                    <Bar200 className="bar200" />
                    <textarea
                      type="text"
                      name="message"
                      className="ug-contact-input-box-input_text"
                      placeholder="enter text"
                      required
                    />
                  </div>

                 
                  <div className="wrapper50">
                    <Bar50 className="bar50" />
                    <input
                    type="submit"
                    value="submit"
                    className="ug-contact-input-box-input_submit"
                    required
                  />
                  </div>

                </div>
              </form>
              <div className="contact-text">visit me on other platforms </div>
              <div className="contact-items">
                <div className="contact-item">
                  <a href="https://github.com/ungarmichael"><Github /></a>
                </div>
                <div className="contact-item">
                  <a href="https://dribbble.com/ungarmichael"><Dribble /></a>
                </div>
                <div className="contact-item">
                  <a href="https://twitter.com/ungarmichael_"><Twitter /></a>
                </div>
                <div className="contact-item">
                  <a href="https://www.instagram.com/ungar_/"><Instagram /></a>
                </div>
                <div className="contact-item">
                <a href="https://www.linkedin.com/in/michael-ungar-9624391b4/"><Linkedin /></a>
                </div>
                <div className="contact-item">
                  <a href="https://www.fiverr.com/ungarmichael"><Fiverr /></a>
                  
                </div>
              </div>
            </a.div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
