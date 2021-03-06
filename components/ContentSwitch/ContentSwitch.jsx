import React from 'react';
import Content from "../../pages/Content/index.jsx";
import Blog from "../../pages/Content/[blog].jsx"

const ContentSwitch = () => {
    const {path, url} = useRouteMatch()
    return (
        <React.Fragment>
            <Route exact path={`${path}`}>
                <Content/>
            </Route>
            <Route path={`${path}/:blogID`} children={<Blog/>}/>
        </React.Fragment>
    )
}

export default ContentSwitch;