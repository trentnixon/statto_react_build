import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from "react-redux";
// Actions
 
import {filter_json} from "./actions/filters";
// Structure
import Bottom_Nav_Bar from "./components/stage/components/Bottom_Nav_Bar";
import Drawer from "./components/stage/Navigation/Drawer";
import Top_Nav_Bar from "./components/stage/components/Top_Nav_Bar";
// View
// import home from "./components/home/home";
import dashboard from "./components/home/dashboard";
import history from "./components/history/history"; 
/** Batting */
         import Batting_overview from "./components/batting/batting_overview";
         import Batting_Runs from "./components/batting/batting_runs";
         import Batting_Innings from "./components/batting/batting_innings";
         import Batting_positions from "./components/batting/batting_positions";
         import Batting_dismissals from "./components/batting/batting_dismissals";
         import Batting_Goals from "./components/batting/batting_goals";
         import Batting_FormGuide from "./components/batting/batting_form_guide";
        import Batting_Teams from "./components/batting/batting_teams";
        import Batting_Oppo from "./components/batting/batting_oppo";

import Bowling from "./components/bowling/bowling";
        import Bowling_FormGuide from "./components/bowling/bowling_formGuide";
        import Bowling_overview from "./components/bowling/bowling_overview";
        import Bowling_Wickets from  "./components/bowling/bowling_Wickets";
        import Bowling_AES from "./components/bowling/bowling_AES";
        import Bowling_Played_For from "./components/bowling/bowling_teams";
        import Bowling_Opposition from "./components/bowling/bowling_oppo";
        import Bowling_Goals from "./components/bowling/bowling_goals";
        
import Keeping from "./components/keeping/keeping";
        import Keeping_overview from "./components/keeping/keeping_overview";
        import Keeping_career from "./components/keeping/keeping_career";
import Following from "./components/search/Following";
import In_App_Search from "./components/search/search";

import teams from "./components/teams/teams";
import settings from "./components/settings/settings";
import scorecard from "./components/scorecards/scorecards";

export default class Display_Player_UI extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){

                if(nextProps.UI.filter.process == true){
                        filter_json(nextProps.Player.raw_json, nextProps.UI.filter)
                }
                
        }
    componentDidUpdate(){ }

    render() {
            return (  
        <div>
                <Top_Nav_Bar {... this.props}/>
                                <Router>
                                        <div>  	
                                                <Route exact path="/:playerid" component={dashboard}/>
                                                <Route exact path="/:playerid/overview" component={dashboard}/>
                                                <Route exact path="/:playerid/history" component={history} />
                                                
                                                <Route exact path="/:playerid/batting" render={()=><Batting_overview {... this.props } />}  />
                                                <Route exact path="/:playerid/batting/formguide" render={()=><Batting_FormGuide {... this.props } />}  />
                                                <Route  path="/:playerid/batting/runs"       render={()=><Batting_Runs {... this.props } />}          />
                                                <Route  path="/:playerid/batting/innings"       render={()=><Batting_Innings {... this.props } />}          />
                                                <Route  path="/:playerid/batting/goals"       render={()=><Batting_Goals {... this.props } />}          />
                                                <Route  path="/:playerid/batting/teams"       render={()=><Batting_Teams {... this.props } />}          />
                                                <Route  path="/:playerid/batting/opposition"       render={()=><Batting_Oppo {... this.props } />}          />
                                                <Route  path="/:playerid/batting/positions"     render={()=><Batting_positions {... this.props } />}    />
                                                <Route  path="/:playerid/batting/dismissals"    render={()=><Batting_dismissals {... this.props } />}   />
                                                
                                                <Route exact path="/:playerid/bowling" render={()=><Bowling_overview {... this.props } />} />
                                                <Route exact path="/:playerid/bowling/formguide" render={()=><Bowling_FormGuide {... this.props } />} />
                                                <Route  path="/:playerid/bowling/wickets"       render={()=><Bowling_Wickets {... this.props } />}       />
                                                <Route  path="/:playerid/bowling/aes"       render={()=><Bowling_AES {... this.props } />}       />
                                                <Route  path="/:playerid/bowling/goals"       render={()=><Bowling_Goals {... this.props } />}       />
                                                <Route  path="/:playerid/bowling/playedfor"       render={()=><Bowling_Played_For {... this.props } />}       />
                                                <Route  path="/:playerid/bowling/opposition"       render={()=><Bowling_Opposition {... this.props } />} />

                                                <Route exact path="/:playerid/keeping" render={()=><Keeping_overview {... this.props } />}  />          
                                                <Route  path="/:playerid/keeping/career"        render={()=><Keeping_career {... this.props } />}       />
                                               
                                                <Route  path="/:playerid/search/"        render={()=><In_App_Search {... this.props } />}       />
                                                <Route  path="/:playerid/following/"        render={()=><Following {... this.props } />}       />
                                                
                                                <Route exact path="/:playerid/teams" component={teams} />
                                                <Route exact path="/:playerid/scorecard" component={scorecard}/>
                                                <Route exact path="/:playerid/scorecard/:gameID" component={scorecard}/>
                                                <Route exact path="/:playerid/settings" component={settings} /> 
                                        </div>
                                </Router>
                <Drawer {... this.props} /> 
        </div>
             ); 
      }
  }