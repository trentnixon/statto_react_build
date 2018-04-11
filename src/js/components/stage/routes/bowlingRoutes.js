import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components

import Bowling from "../../bowling/bowling"
import Bowling_FormGuide from "../../bowling/bowling_formGuide";
import Bowling_overview from "../../bowling/bowling_overview";
import Bowling_Wickets from  "../../bowling/bowling_Wickets";
import Bowling_AES from "../../bowling/bowling_AES";
import Bowling_Played_For from "../../bowling/bowling_teams";
import Bowling_Opposition from "../../bowling/bowling_oppo";
import Bowling_Goals from "../../bowling/bowling_goals";

////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BowlingRoutes extends React.Component {

    constructor() { super(); }
    
    componentWillMount(){ 
         routes = [
            {
              path: "/:playerid/bowling",
              component: <Bowling_overview {... this.props } />,
              exact: true,
            },
            {
              path: "/:playerid/bowling/formguide",
              component: <Bowling_FormGuide {... this.props } />, 
              exact: true,
            },
            {
                path: "/:playerid/bowling/wickets",
                component: <Bowling_Wickets {... this.props } /> ,
            },
            {
                path: "/:playerid/bowling/aes",
                component: <Bowling_AES {... this.props } /> ,
            },
            {
                path: "/:playerid/bowling/goals",
                component: <Bowling_Goals {... this.props } /> ,
            },
            {
                path: "/:playerid/bowling/playedfor",
                component: <Bowling_Played_For {... this.props } /> ,
            },
            {
                path: "/:playerid/bowling/opposition",
                component: <Bowling_Opposition {... this.props } />
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
                                render={()=>route.component }  
                            />
                        ))
                    }
                </div>
             ); 
      }
  }
