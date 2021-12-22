import React, { useState } from "react";
import { animated as a, useSpring, useRef, config } from "react-spring";



const UgLink = (props) => {
  const contactSpring = useSpring({
    to: { opacity: 1, marginLeft: "0px" },
    from: { opacity: 0, marginLeft: "-400px" },
    config: config.stable,
  });

  

  const [linkColor, setLinkColor] = useState("rgba(255, 255, 255, 1)");
  const [hoverStatus, setHoverStatus] = useState(false);
  const linkFadeOutSpring = useSpring({
    opacity: hoverStatus ? 1 : 0,
  })
  const linkFadeInSpring = useSpring({
    opacity: hoverStatus ? 0 : 1,
  })

//   const hoverRef = useRef(null);
// //   useEffect(() => {
// //     hoverRef.addEventListener("mouseover",
// //     ()=>{
// //         setHoverStatus(true);
// //     })
// //       return () => {
// //           hoverRef.removeEventListener("mouseover")
// //       }
// //   })

  return (
    <div href={props.link}>
      <a.div
        onMouseOver={() => setLinkColor("white")}
        style={contactSpring}
        className="ug-contact-container-line"
      >
        <img
          src={props.imageSource}
          alt={props.name}
          height="35px"
          width="35px"
        />
        <div
          className="ug-contact-links-divider"
          style={{
            backgroundColor: linkColor,
            transition: "background-color 0.5s",
          }}
        />
        <div className="ug-contact-links-div">
          <a.div
            style={contactSpring}
            className="ug-content-links-div-text"
            
          >
            <a
            // onMouseOver={()=>{setLinkColor("rgba(255, 255, 255, 1)")}}
            // onMouseOut={()=>{setLinkColor("rgba(255, 255, 255, 0.5)")}}
            onMouseEnter={()=>{setHoverStatus(true)}}
            onMouseLeave={()=>{setHoverStatus(false)}}
            target="_blank" rel="noopener noreferrer"
            // ref={hoverRef}
            className="ug-content-linkds-div-link" href={props.linkHref} style={{color: linkColor,transition: "color 0.5s"}}>
              {/* {hoverStatus?()=>{return props.username}:()=>{return props.name}} */}
              <div className="ug-contact-linkds-div-link-wrap">
                <a.div className="ug-contact-linkds-div-link-wrap-username" style={linkFadeOutSpring}>{props.username}</a.div>
                <a.div className="ug-contact-linkds-div-link-wrap-name" style={linkFadeInSpring}>{props.name}</a.div>
              </div>
              
            </a>
          </a.div>
        </div>
      </a.div>
    </div>
  );
};

export default UgLink;
