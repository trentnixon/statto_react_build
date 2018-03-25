import React from "react";
import Content_Pod from "../../global/Expandable_Panel/Create_Content_Pods";

let Display_Overview_Achievement_List=[], Link_Prefix,OvertheYears,NumofYears;

export default class Overview_Achievement_List extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        
        OvertheYears = this.props.Player.over_the_years["0"]
        NumofYears = OvertheYears.length -1;

        Link_Prefix = '/'+this.props.Player.PLAYER_META.WP_ID+'/batting/'
        // Second content pods
        Display_Overview_Achievement_List=[];
        Display_Overview_Achievement_List.push(
            {  
                title:"Innings Count", 
                value:this.props.Player.career_form.Batting_Innings_Count,
                sub: OvertheYears[NumofYears].Batting_Innings + " Innings  in " + OvertheYears[NumofYears].Year,  
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_Innings',
               
            },
            {  
                title:"Total Runs", 
                value:this.props.Player.career_form.Batting_Total_Runs,
                sub: OvertheYears[NumofYears].Batting_Runs + " Runs  in " + OvertheYears[NumofYears].Year,  
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_Runs',
                Link:Link_Prefix+'runs'
            },
            {  
                title:"Average", 
                value:this.props.Player.career_form.Batting_Average,
                sub:  "Average for " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_Average,  
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_Average',
                Link:Link_Prefix+'innings'
            },
            {  
                title:"Strike Rate", 
                value:this.props.Player.career_form.Batting_StrikeRate.toFixed(2),
                sub:  "Strike Rate for " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_StrikeRate, 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_StrikeRate',
                Link:Link_Prefix+'innings'
            },
            {  
                title:"Highest Score", 
                value:this.props.Player.career_form.Batting_Highest_Score,
                sub:  "Highest Score for " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_HS,
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_HS',
                Link:Link_Prefix+'runs'
                
            }
        )
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( <Content_Pod data={Display_Overview_Achievement_List} /> ); 
      }
  }