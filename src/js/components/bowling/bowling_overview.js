import React from "react";

import Half_Circle from "../stage/components/Half_Circle_Top";
import World_ranking_circle from "../_Pages/Career/world_ranking_circle";

import Content_Wrapper from "../stage/components/Content_Wrapper";
import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
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
                width:"col-xs-12"
            },
            {  
                title:"Wickets Taken", 
                value:this.props.Player.career_form.Bowling_Wickets,
                sub:"", 
                width:"col-xs-12"
            },
            {  
                title:"Runs Conceded", 
                value:this.props.Player.career_form.Bowling_RunsConceded,
                sub:"", 
                width:"col-xs-12"
            },
            {  
                title:"Economy", 
                value:this.props.Player.career_form.Bowling_Economy_Rate,
                sub:"", 
                width:"col-xs-12"
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
                    <Half_Circle>
                        <World_ranking_circle value={this.props.Player.bowling_world_ranking[0].ranking} />
                    </Half_Circle>    
                    <Content_Wrapper>
                    <Info_Badge Text="BOWLING" />
                    <World_ranking_progression Rankings = {this.props.Player.bowling_world_ranking}   dataKey="ranking" />
                            
                        <Section_Header header="Career" />
                            <Content_Pod data={Content_1} />
                                
                        <FAS {... this.props} />
                    </Content_Wrapper>
                </div> 
             ); 
      }
  }