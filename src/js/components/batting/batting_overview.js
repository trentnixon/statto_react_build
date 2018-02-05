import React from "react";


import Section_Header from "../global/Section_Header";
import World_ranking_circle from "../_Pages/Career/world_ranking_circle";
import World_ranking_progression from "../_Pages/Career/World_ranking_Progression";
import Go_to_component from "../global/go_to_component";
import Content_Pod from "../_Pages/Career/Career_Content_Pods";

import Radial from "../_Pages/Career/Radial_Two_Part";

// actions 
import {breadcrumbs,runsvsballs} from  "../../actions/ui";


let Content_1=[], content_push_2=[], RadialData;
export default class batting_career extends React.Component {

    constructor() { super();  }

    setUI(){}
    componentWillMount(){ 
       // set BC
       breadcrumbs('batting > Overview','parent');
       RadialData = runsvsballs(this.props.Player.filtered_json)

        Content_1=[]; content_push_2=[];
        // Create Content pod arrays to pass off to the compoent
       // first content pods
        Content_1.push(
            {  
                title:"Innings Count", 
                value:this.props.Player.career_form.Batting_Innings_Count,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Total Runs", 
                value:this.props.Player.career_form.Batting_Total_Runs,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Average", 
                value:this.props.Player.career_form.Batting_Average,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Strike Rate", 
                value:0,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Highest Score", 
                value:this.props.Player.career_form.Batting_Highest_Score,
                sub:"", 
                width:"col-xs-12"
            }
        )

        // Second content pods
        content_push_2.push(
            {
                title:"Notouts", 
                value:this.props.Player.career_form.Batting_NotOuts,
                sub:"", 
                width:"col-xs-6"
            },
            {
                title:"Ducks", 
                value:this.props.Player.career_form.Batting_Ducks,
                sub:"", 
                width:"col-xs-6"
            },{
                title:"In the teens", 
                value:this.props.Player.career_form.Batting_Teens,
                sub:"", 
                width:"col-xs-6"
            },
            {
                title:"20's", 
                value:this.props.Player.career_form.Batting_Twenties,
                sub:"", 
                width:"col-xs-6"
            },
            {
                title:"30's", 
                value:this.props.Player.career_form.Batting_Thirties,
                sub:"", 
                width:"col-xs-6"
            },
            {
                title:"40's", 
                value:this.props.Player.career_form.Batting_Forties,
                sub:"", 
                width:"col-xs-6"
            },
            {
                title:"50's", 
                value:this.props.Player.career_form.Batting_Fifties,
                sub:"", 
                width:"col-xs-6"
            },
            {
                title:"100's", 
                value:this.props.Player.career_form.Batting_Hundreds,
                sub:"", 
                width:"col-xs-6"
            },
        )
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <World_ranking_circle value={this.props.Player.batting_world_ranking[0].ranking} />
                        
                        <Section_Header header="Career" />
                            <Content_Pod data={Content_1} />
                                <Go_to_component label="More" path={this.props.match.url+"/batting/innings"} />
                        

                    <World_ranking_progression Rankings = {this.props.Player.batting_world_ranking} dataKey="ranking" />
                        
                        <Section_Header header="Runs Over View" />
                           
                            <Radial 
                                title="Runs vs Balls"
                                data={RadialData}
                            />
                            
                            <Content_Pod data={content_push_2} />
                                <Go_to_component label="Runs" path={this.props.match.url+"/batting/runs"}/>
                </div>
             ); 
      }
  }