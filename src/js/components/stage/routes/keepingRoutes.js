import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components
import Keeping_overview from "../../keeping/keeping_overview";
import Keeping_career from "../../keeping/keeping_career";

////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BattingRoutes extends React.Component {

    constructor() { super(); }
    componentWillMount(){}

    render() {
        
            return ( 
                <div>
                    <Route  exact path='/:playerid/keeping' render={()=> <Keeping_overview {... this.props}/> } />
                    <Route exact  path='/:playerid/keeping/career' render={()=> <Keeping_career {... this.props}/> } />
                </div>
             ); 
      }
  }
