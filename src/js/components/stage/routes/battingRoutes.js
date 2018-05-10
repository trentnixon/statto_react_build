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
// Create Batting Data
import {batting_data} from "../../../actions/Create_Batting_Data";

const BD = new batting_data;
////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BattingRoutes extends React.Component {

    constructor() { super(); }
    
    StartData(data){
        // console.log(data.GAMES.Game_Data)
        BD.PlayerID = data.Player.PLAYER_META.WP_ID;
        BD.GameData = data.GAMES.Game_Data;
        BD.start();
    }

    componentWillMount(){ 
        if(this.props.GAMES.Game_Data != false 
            && this.props.BATTING.Batting_Data_Complete == false){
            if(this.props.BATTING.Batting_Data_inProgress == false){
                    this.StartData(this.props)
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        
        if(nextProps.GAMES.Game_Data != false 
            && nextProps.BATTING.Batting_Data_Complete == false){
            if(nextProps.BATTING.Batting_Data_inProgress == false){
                    this.StartData(nextProps)
            }
        }
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
                    <Route  exact path='/:playerid/batting/positions' render={()=> <Batting_positions {... this.props}/> } />
                    <Route  exact path='/:playerid/batting/dismissals' render={()=> <Batting_dismissals {... this.props}/> } />
                    
                    
                </div>
             ); 
      }
  }
