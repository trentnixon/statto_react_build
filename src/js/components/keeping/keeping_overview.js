import React from "react";


import Section_Header from "../global/Section_Header";
import World_ranking_circle from "../_Pages/Career/world_ranking_circle";
import World_ranking_progression from "../_Pages/Career/World_ranking_Progression";
import Go_to_component from "../global/go_to_component";
import Content_Pod from "../_Pages/Career/Career_Content_Pods";

// actions 
import {breadcrumbs} from  "../../actions/ui";

let Content_1=[], content_push_2=[];
export default class batting_career extends React.Component {

    constructor() { super();  }
    componentWillMount(){ 
        // set BC
       breadcrumbs('keeping > overview','parent');
        // Create Content pod arrays to pass off to the compoent
       // first content pods
      // console.log(this.props.Player.career_form);
      Content_1=[];
        Content_1.push( 
            {  
                title:"Catches", 
                value:this.props.Player.career_form.Keeping_Catches,
                sub:"", 
                width:"col-xs-6"
            },
            {  
                title:"Stumpings", 
                value:this.props.Player.career_form.keeper_Stumping,
                sub:"", 
                width:"col-xs-6"
            }
        )
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    
                    <World_ranking_circle value={this.props.Player.keeping_world_ranking[0].ranking} />
                        
                        <Section_Header header="Career" />
                            <Content_Pod data={Content_1} />
                                
                    <World_ranking_progression Rankings = {this.props.Player.keeping_world_ranking} dataKey="ranking"  />
                
                </div> 
             ); 
      }
  }