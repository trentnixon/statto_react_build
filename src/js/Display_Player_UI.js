import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { Provider } from "react-redux";

// Actions
import {filter_json} from "./actions/filters";
import {Followers} from "./actions/followers";
import {InApp_Fetch_Games_Cron} from  "./actions/games";

const GetFollowers = new Followers();
const FG= new InApp_Fetch_Games_Cron();
// Structure
import Bottom_Nav_Bar from "./components/stage/components/Bottom_Nav_Bar";
import Drawer from "./components/stage/Navigation/Drawer";
import Top_Nav_Bar from "./components/stage/components/Top_Nav_Bar";
import SnackBar from "./components/global/snackbar/Snackbar";

// Import Routes
import BaseRoutes from "./components/stage/routes/baseRoutes";
import BattingRoutes from "./components/stage/routes/battingRoutes";
import BowlingRoutes from "./components/stage/routes/bowlingRoutes";
import KeepingRoutes from "./components/stage/routes/keepingRoutes";

// Stand Along pages (No Children)
import Following from "./components/search/Following";
import In_App_Search from "./components/search/search";
import News_Feed from './components/newsfeed/newsfeed';
import Scorecard from "./components/scorecards/scorecards";


export default class Display_Player_UI extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        GetFollowers.fetch();
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        

        // can this be moved into  OOP?
        // not even sure what it does!
        if(nextProps.UI.filter.process == true){
                        filter_json(nextProps.Player.raw_json, nextProps.UI.filter)
                }
             
        // Start Game CRON!        
        
        if(nextProps.GAMES.Game_Data != false &&
            nextProps.GAMES.Cron_in_Progress == false){
                
                console.log(nextProps.GAMES.Game_Data, nextProps.GAMES.GameIDs)
                FG.GamesPlayed = nextProps.GAMES.GameIDs;
                FG.GamesStored = nextProps.GAMES.Game_Data; 
                FG.start();
        } 
    }
    componentDidUpdate(){  }

    render() {
            return (  
                <div>   
                        <Top_Nav_Bar {... this.props}/>
                                      
                                        <div>  

                                                <BaseRoutes />
                                                <Route path='/:playerid/batting' render={()=> <BattingRoutes {... this.props}/> } />
                                                <Route path='/:playerid/bowling' render={()=> <BowlingRoutes {... this.props}/> } />
                                                <Route path='/:playerid/keeping' render={()=> <KeepingRoutes {... this.props}/> } />
                                                <Route path='/:playerid/search' render={()=> <In_App_Search {... this.props}/> } />
                                                <Route path='/:playerid/following' render={()=> <Following {... this.props}/> } />
                                                <Route path='/:playerid/news' render={()=> <News_Feed {... this.props}/> } />
                                                <Route  exact path='/:playerid/scorecard/:gameID' render={()=> <Scorecard {... this.props} /> } />
                                        
                                        </div>
                        <Drawer {... this.props} /> 
                        <SnackBar />
                </div>
             ); 
      }
  }