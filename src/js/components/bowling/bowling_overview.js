import React from "react";


import Section_Header from "../global/Section_Header";
import World_ranking_circle from "../_Pages/Career/world_ranking_circle";
import World_ranking_progression from "../_Pages/Career/World_ranking_Progression";
import Go_to_component from "../global/go_to_component";
import Content_Pod from "../_Pages/Career/Career_Content_Pods";
import FAS from "./components/fas";

// actions 
import {breadcrumbs} from  "../../actions/ui";

let Content_1=[], content_push_2=[];
export default class Bowling_Overview extends React.Component {

    constructor() { super();  }
    componentWillMount(){ 
        
        // set BC
        breadcrumbs('bowling > Overview','parent');

        // Create Content pod arrays to pass off to the compoent
       // first content pods
      //  console.log(this.props.Player.career_form);
      Content_1=[];
        Content_1.push(
            {  
                title:"Overs Bowled", 
                value:this.props.Player.career_form.Bowling_oversBowled,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Wickets Taken", 
                value:this.props.Player.career_form.Bowling_Wickets,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Runs Conceded", 
                value:this.props.Player.career_form.Bowling_RunsConceded,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Economy", 
                value:this.props.Player.career_form.Bowling_Economy_Rate,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Average", 
                value:this.props.Player.career_form.Bowling_Average,
                sub:"", 
                width:"col-xs-12"
            }
        )
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    
                    <World_ranking_circle value={this.props.Player.bowling_world_ranking[0].ranking} />
                        
                        <Section_Header header="Career" />
                            <Content_Pod data={Content_1} />
                                
                    <World_ranking_progression Rankings = {this.props.Player.bowling_world_ranking}   dataKey="ranking" />
                    <FAS {... this.props} />
                </div> 
             ); 
      }
  }