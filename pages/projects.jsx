import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config, useTransition, useSpring, animated as a } from "react-spring";
import _uniqueId from "lodash/uniqueId";
import Head from "next/head";
import Image from "next/image";
import Navright from "./../assets/navright.svg";
import Navleft from "./../assets/navleft.svg";
import Navbox from "./../assets/navbox.svg";
import Navboxactive from "./../assets/navboxactive.svg";


import UgProject from "../components/project/project.jsx";
// import NeighborooImage from "/assets/Neighboroo/NeighborooMockup.png";
// import trailerPlaceHolder from "/assets/Neighboroo/NeighborooMockup.png";

const Projects = () => {
  //local projects
  // const imageArray = [NeighborooImage, trailerPlaceHolder];
  const projectsJSON = [
    {
      // "_id" : ObjectId("5fa14938ee9eac91770b019b"),
      _id: _uniqueId("prefix-"),
      Title: "Neighboroo",
      Slogan: "Bringing Neighborhoods together.",
      Description:
        "Neighboroo is a iOS and Android-application which is built for getting in touch with your neighbors because especially during these hard times this can be quite complicated. The whole system is divided into four categories: Messenger, Selling, Transport, and Service. In the Messenger you are able to chat with your neighbors. The Trading section is for selling goods. Car-sharing can be done in the Transport section and the service section is for Offering and receiving simple jobs.[2020]",
      Link: "Link to the Github Project",
      Image: "/assets/Neighboroo/NeighborooMockup.png",
      Image2: "/assets/Neighboroo/NeighborooMockup2.png",
      LinkURL: "https://github.com/ungarmichael/neighboroo",
      ImageID: 0,
    },
    {
      // "_id" : ObjectId("5fa14938ee9eac91770b019b"),
      _id: _uniqueId("prefix-"),
      Title: "MealLog",
      Slogan: "Enjoying meals with others.",
      Description: "The intension was to create an application where you can share your food in order to inspire others diet.",
      Link: "Link to the Github Project",
      Image: "/assets/MealLog/MealLogMockup.png",
      Image2: "/assets/MealLog/MealLogMockup2.png",
      LinkURL: "https://github.com/ungarmichael/recipe-app",
      ImageID: 1,
    },
    {
      _id: _uniqueId("prefix-"),
      Title: "Trailer",
    },
  ];

  //variables
  const API_URL = "https://api.ungarmichael.com/projects";
  const [currentProject, setCurrentProject] = useState(0);
  const [projects, setProjects] = useState(projectsJSON);
  const [isLoaded, setLoaded] = useState(true);

  const [projectSize, setProjectSize] = useState();

  const [index, setIndex] = useState(0);

  const handleIndexChange = useCallback((titleName) => {
    projects.find((elem) => {
      if (elem.Title == titleName) {
        let l = projects.indexOf(elem);
        setIndex(l);
      }
    }),
      [];
  });

  const projectTransitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0,0,0) scale(0.5,0.5) " },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0,0) scale(1,1) ",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(0,0,0) scale(0.5,0.5) ",
    },
  });

  if (!isLoaded) {
    return (
      <>
        <Head>
          <title>Ungar | Projects from ungarmichael.com</title>
        </Head>
        <motion.div
          className="ug-projects"
          exit={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="ug-loading">Loading</div>
        </motion.div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Ungar | Projects from Michael Ungar</title>
        </Head>
        <motion.div
          className="ug-projects"
          exit={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="ug-project-diashow">
            {projectTransitions.map(({ item, props, key }) => {
              const Project = projects[item];
              return (
                <UgProject
                  key={Project._id}
                  Title={Project.Title}
                  Slogan={Project.Slogan}
                  Link={Project.Link}
                  Image={Project.Image}
                  Image2={Project.Image2}
                  Description={Project.Description}
                  LinkURL={Project.LinkURL}
                  key={key}
                  style={props}
                />
              );
            })}
          </div>
          <div className="nav-box">
            <div className="nav-left">
              
              <div
                className="nav-left-icon arrow"
                onClick={() => {
                  if(index!=0){
                    setIndex(index - 1);
                  }
                }}
              ><Navleft/></div>
            </div>
            <div className="ug-project-navigator">
              {projects.map((x) => {
                if (x.Title == projects[index].Title) {
                  return (
                    <div
                      key={x._id}
                      className="ug-project-navigator-dot"
                    ><Navboxactive/></div>
                  );
                } else {
                  return (
                    <div
                      onClick={() => handleIndexChange(x.Title)}
                      key={x._id}
                      className="ug-project-navigator-dot"
                    >
                      <Navbox/>
                    </div>
                  );
                }
              })}
            </div>
            <div className="nav-right">
              <div
                className="nav-right-icon"
                onClick={() => {
                  console.log("projectssize"+projects.length)
                  console.log("index"+index)
                  if(index < projects.length-1){
                    setIndex(index + 1);
                  }
                }}
              ><Navright/></div>
            </div>
          </div>
        </motion.div>
      </>
    );
  }
};

export default Projects;
