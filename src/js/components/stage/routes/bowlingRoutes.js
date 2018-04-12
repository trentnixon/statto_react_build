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
    componentWillMount(){}
    render() {
        
            return ( 
                <div>
                    <Route  exact path='/:playerid/bowling' render={()=> <Bowling_overview {... this.props}/> } />
                    <Route exact  path='/:playerid/bowling/formguide' render={()=> <Bowling_FormGuide {... this.props}/> } />
                    <Route  exact path='/:playerid/bowling/wickets' render={()=> <Bowling_Wickets {... this.props}/> } />
                    <Route  exact path='/:playerid/bowling/aes' render={()=> <Bowling_AES {... this.props}/> } />
                    <Route  exact path='/:playerid/bowling/goals' render={()=> <Bowling_Goals {... this.props}/> } />
                    <Route  exact path='/:playerid/bowling/playedfor' render={()=> <Bowling_Played_For {... this.props}/> } />
                    <Route  exact path='/:playerid/bowling/opposition' render={()=> <Bowling_Opposition {... this.props}/> } />
                </div>
             ); 
      }
  }
