import React from "react";
import Section_Header from "../../global/Section_Header";

/**
 * Career Page Structure
 * World Rank Circle
 * Number
 * World Ranking Progression
 * Numbers
 */

import World_ranking_circle from "./world_ranking_circle";
/*
import  Carrer_Content_Pods from "./components/Batting_Career_Content_Pods";
import Career_Runs_Overview from "./components/Batting_Career_Runs_Overview_Content_Pods";

import World_ranking_progression from "./components/Batting_World_ranking_Progression";
import Go_to_component from "../global/go_to_component";

*/

export default class batting_career extends React.Component {

    constructor() { super();  }
    componentWillMount(){ 
        console.log(this.props)
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        /*
         <Section_Header header="Career" />
                        <Carrer_Content_Pods {... this.props} />
                        <Go_to_component label="More" path={this.props.match.url+"/batting/innings"} />
                        <World_ranking_progression {... this.props} />
                        <Section_Header header="Runs Over View" />
                        <Career_Runs_Overview  {... this.props} />
                        <Go_to_component label="Runs" path={this.props.match.url+"/batting/runs"}/>
        */
            return ( 
                <div>
                        <World_ranking_circle {... this.props} />
                       
                </div>
             ); 
      }
  }