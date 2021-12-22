import React, { useEffect, useState } from "react";
import {animated as a, useSpring} from "react-spring";

const Content = () => {
    const [isLoaded, setLoaded] = useState(false); 
    useEffect(()=>{
        setLoaded(true);
    },[])

    const comingsoonanimation = useSpring({
        opacity: isLoaded ? 1 : 0,
        marginTop: isLoaded ? 0 : -500,
      });

    return (
    <a.div class="soon-text" style={comingsoonanimation}>
        more blogs, design-assets and typefaces coming soon
    </a.div>
    )
}

export default Content;