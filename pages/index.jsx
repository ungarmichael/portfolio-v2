//npm packages
import React, { useEffect, useState, useRef } from "react";
import { useSpring, useSprings, animated as a } from "react-spring";
import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
import Head from "next/head";
import FullLogo from "./../assets/UNGAR-FULL.svg";
import useWindowDimensions from "../utils/useWindowDimensions";

// import useOnScreen from "../../utils/useOnScreen.jsx"
import VisibilitySensor from "react-visibility-sensor";

//local components
// import UgArrow from "../components/arrow/arrow.jsx";
import {About} from "./../assets/about.jsx";
import UgAboutCard from "./../components/about/about.jsx";
// import useBreakpointInText from "../utils/useBreakpointInText.jsx";
// import useOnScreen from "../utils/useOnScreen.jsx";
// import { Helmet } from 'react-helmet'

export default function Foyer() {
  const ref = useRef();
  const [isLoaded, setLoaded] = useState(false);

  // const { height, width } = useWindowDimensions();
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const ugFoyerNameSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -500,
  });

  const ugFoyerAboutHeadingSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100,
  });

  const [, setY] = useSpring(() => ({ y: 0 }));

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [isVisible, setVisible] = useState(false);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.3)",
    config: { duration: 400 },
  });

  return (
    <>
      <Head>
        <title>Ungar | Programmer and Designer from Austria</title>
        <meta
          name="description"
          content="Passionate Programmer (Web- and Appdevelopment) from Austria creating Blogs about self-improvement, Productivity, Programming and Minimalism."
        />
        <meta name="theme-color" content="#000000" />
      </Head>
      <motion.div
        className="ug-foyer"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* style={{height:height}} */}
        <div className="ug-foyer-intro">
          <a.div
            style={ugFoyerAboutHeadingSpring}
            onClick={() => {
              setY({
                y: 500,
                reset: true,
                from: { y: window.scrollY },
                onFrame: (props) => window.scroll(500, props.y),
              });
            }}
            className="ug-foyer-intro-about"
          >
            <div className="about-element"><About/></div>
            
          </a.div>
          <div id="ug-foyer-box">
            <a.div className="ug-foyer-name" style={ugFoyerNameSpring}>
              <FullLogo width="80%" height="200" className="fullLogo" />
            </a.div>
            <div className="ug-foyer-text">Web- and Appdevelopment</div>
            <div className="ug-foyer-text">UI/UX Design</div>
          </div>
        </div>
        <div className="about-readables">
          <VisibilitySensor
            partialVisibility
            onChange={(isVis) => {
              if (isVis && isVisible != true) {
                setVisible(true);
              }
            }}
          >
            <a.div style={springProps} ref={ref}>
              <div className="about-introbox">
                <div className="about-greeting"> Hi there ! </div>
                <br />
                <div className="about-introduction">
                  I`m Michael, a young programmer and designer from Upper
                  Austria focused on creating flawless code and beautiful
                  interfaces for humans.
                </div>
              </div>
            </a.div>
            {/* <div className="block">block</div> */}
          </VisibilitySensor>
          <UgAboutCard
            heading="Starting to code"
            subheading="My Journey"
            description="I was about 14 years old when I got exposed to code for the first time. Back then I played around with the Unity Game-engine and created simple CLI-applications. My first two object-oriented programming languages where Java and C#. Soon or later I encountered UI/UX-Design due to my interest in creating Applications with a GUI. Starting out with the Kivy-library in Python I learned the fundamentals in designing UI's. During this time I tried myself out in all kinds of software-projects and programming-languages in order to broaden my horizons. "
          />
          <UgAboutCard
            subheading="Now"
            heading="Fast forward"
            description="Eventually I started to get into freelancing on plattforms like Fiverr and Upwork. I settled down using ReactJS with NextJS for SEO and the Context-hook for statemanagement, Golang for Backend, and Dart with the Flutter-framework for Mobile-development."
          />
          <UgAboutCard
            subheading="Expertise"
            heading="My Focus"
            description="Currently my everyday life consists of planning, managing, designing and creating Mobile- and Webapplications. On the side I am also interested into self-improvement and creating innovative projects. "
          />
          <div className="bottom-bar">
            <div className="date">Michael Ungar - 2020</div>
            <a className="legal">Legal</a>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// function Foyerdd() {
//   const [isLoaded, setLoaded] = useState(false);

//   const ugFoyerNameSpring = useSpring({
//     opacity: isLoaded ? 1 : 0,
//     marginTop: isLoaded ? 0 : -500,
//   });

//   const ugFoyerAboutHeadingSpring = useSpring({
//     opacity: isLoaded ? 1 : 0,
//     marginTop: isLoaded ? 0 : -100,
//   });

//   const [, setY] = useSpring(() => ({ y: 0 }));

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <>
//       <Helmet>
//         <title>Ungar | Blogging, Programming and Self-improvement</title>
//         <meta name="description" content="Passionate Programmer (Web- and Appdevelopment) from Austria creating Blogs about self-improvement, Productivity, Programming and Minimalism." />
//         <meta name="theme-color" content="#000000" />
//       </Helmet>
//       <motion.div
//         className="ug-foyer"
//         exit={{ opacity: 0 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <div className="ug-foyer-intro">
//           <a.div
//             style={ugFoyerAboutHeadingSpring}
//             onClick={() => {
//               setY({
//                 y: 500,
//                 reset: true,
//                 from: { y: window.scrollY },
//                 onFrame: (props) => window.scroll(500, props.y),
//               });
//             }}
//             className="ug-foyer-intro-about"
//           >
//             about
//           </a.div>
//           <div id="ug-foyer-box">
//             <a.div className="ug-foyer-name" style={ugFoyerNameSpring}>
//               <FullLogo width="80%" height="200" className="fullLogo" />
//             </a.div>
//             <div className="ug-foyer-text">Programming and Blogging</div>
//           </div>
//         </div>
//         <UgAboutCard
//           heading="Who am I ?"
//           description="My Name is Ungar Michael and my Passion is to develop and organise Softwareprojects. I really love learning new things and improving myself."
//         />

//         <UgAboutCard
//           heading="What am I doing ?"
//           description="I plan, design and create Mobile- and Webapplications. I also started to create content in form of blogs and videos in order to share my thoughts, experiences and opinions with an audience.  "
//         />
//       </motion.div>
//     </>
//   );
// }
