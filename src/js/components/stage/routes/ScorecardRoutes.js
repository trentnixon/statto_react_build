import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components

import Scorecard from "../../scorecards/scorecards";

////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BattingRoutes extends React.Component {

    constructor() { super(); }
    
    componentWillMount(){ 
       // console.log(this.props.match);
        routes = [
            {
                path: "/:playerid/scorecard/",
                component: <Scorecard  />,
              } ,
            {
              path: "/:playerid/scorecard/:gameID",
              component: <Scorecard  />, 
            } 
          ];
    }

    render() {
        
            return ( 
                <div>
                    {
                        routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component} 
                            />
                        ))
                    }
                </div>
             ); 
      }
  }
