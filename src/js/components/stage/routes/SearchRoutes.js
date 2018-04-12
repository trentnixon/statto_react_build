import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components
import Following from "../../search/Following";
import In_App_Search from "../../search/search";
import News_Feed from '../../newsfeed/newsfeed';

////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BattingRoutes extends React.Component {

    constructor() { super(); }
    componentWillMount(){}

    render() {
        
            return ( 
                <div>
                     <Route  exact path='/:playerid/search' render={()=> <In_App_Search {... this.props}/> } />
                     <Route  exact path='/:playerid/following' render={()=> <Following {... this.props}/> } />
                     <Route  exact path='/:playerid/news' render={()=> <News_Feed {... this.props}/> } />
                </div>
             ); 
      }
  }
