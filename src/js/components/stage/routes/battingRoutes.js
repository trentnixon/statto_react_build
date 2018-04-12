import React from "react";
import {  Router, Route, Link, Switch } from "react-router-dom";

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
        console.log("Batting Routes")
    }

    render() {
        
            return ( 
                <div>
                    <Route  exact path='/:playerid/batting' render={()=> <Batting_overview {... this.props}/> } />
                    <Route exact  path='/:playerid/batting/formguide' render={()=> <Batting_FormGuide {... this.props}/> } />
                    <Route  exact path='/:playerid/batting/runs' render={()=> <Batting_Runs {... this.props}/> } />
                    <Route  exact path='/:playerid/batting/innings' render={()=> <Batting_Innings {... this.props}/> } />
                    <Route  exact path='/:playerid/batting/goals' render={()=> <Batting_Goals {... this.props}/> } />
                    <Route  exact path='/:playerid/batting/teams' render={()=> <Batting_Teams {... this.props}/> } />
                    <Route  exact path='/:playerid/batting/opposition' render={()=> <Batting_Oppo {... this.props}/> } />
                </div>
             ); 
      }
  }
