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

// Import Routes
import BaseRoutes from "./components/stage/routes/baseRoutes";
import BattingRoutes from "./components/stage/routes/battingRoutes";
import BowlingRoutes from "./components/stage/routes/bowlingRoutes";
import KeepingRoutes from "./components/stage/routes/keepingRoutes";
import SearchRoutes from "./components/stage/routes/SearchRoutes";
import Scorecard from "./components/stage/routes/ScorecardRoutes";


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
                                        <BaseRoutes />
                                        <BattingRoutes {...this.props}  />
                                        <BowlingRoutes {...this.props}  />
                                        <KeepingRoutes {... this.props} />    
                                        <SearchRoutes  {... this.props} />
                                        <Scorecard  {... this.props}  />
                                </div>
                        </Router>
                <Drawer {... this.props} /> 
        </div>
             ); 
      }
  }