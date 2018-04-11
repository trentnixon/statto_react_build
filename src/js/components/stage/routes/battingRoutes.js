import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components

import Batting_overview from "../../batting/batting_overview";
import Batting_Runs from "../../batting/batting_runs";
import Batting_Innings from "../../batting/batting_innings";
import Batting_positions from "../../batting/batting_positions";
import Batting_dismissals from "../../batting/batting_dismissals";
import Batting_Goals from "../../batting/batting_goals";
import Batting_FormGuide from "../../batting/batting_form_guide";
import Batting_Teams from "../../batting/batting_teams";
import Batting_Oppo from "../../batting/batting_oppo";

////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BattingRoutes extends React.Component {

    constructor() { super(); }
    
    componentWillMount(){ 
/*      To Add 
        <Route  path="/:playerid/batting/positions"     render={()=><Batting_positions {... this.props } />}    />
        <Route  path="/:playerid/batting/dismissals"    render={()=><Batting_dismissals {... this.props } />}   />
  */          
         routes = [
            {
              path: "/:playerid/batting",
              component: <Batting_overview {... this.props } />,
              exact: true,
            },
            {
                path: "/:playerid/batting/formguide",
              component: <Batting_FormGuide {... this.props } />, 
              exact: true,
            },
            {
                path: "/:playerid/batting/runs",
                component: <Batting_Runs {... this.props } /> ,
            },
            {
                path: "/:playerid/batting/innings",
                component: <Batting_Innings {... this.props } /> ,
            },
            {
                path: "/:playerid/batting/goals",
                component: <Batting_Goals {... this.props } /> ,
            },
            {
                path: "/:playerid/batting/teams",
                component: <Batting_Teams {... this.props } /> ,
            },
            {
                path: "/:playerid/batting/opposition",
                component: <Batting_Oppo {... this.props } />
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
