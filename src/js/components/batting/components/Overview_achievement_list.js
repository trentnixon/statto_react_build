import React from "react";
import Content_Pod from "../../global/Expandable_Panel/Create_Content_Pods";

let Display_Overview_Achievement_List=[],OvertheYears,NumofYears;

export default class Overview_Achievement_List extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        // Second content pods
        OvertheYears = this.props.Player.over_the_years["0"];
        NumofYears = OvertheYears.length -1;
        Display_Overview_Achievement_List=[];
        Display_Overview_Achievement_List.push(
            {
                title:"Notouts", 
                value:this.props.Player.career_form.Batting_NotOuts,
                sub:"Not Outs in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_Notout,
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_Notout',
                list:this.props.Player.over_the_years[5][0],
                type:'batting'
            },
            {
                title:"Ducks", 
                value:this.props.Player.career_form.Batting_Ducks,
                sub:"Ducks in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_Ducks, 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_Ducks',
                list:this.props.Player.over_the_years[5][1],
                type:'batting'
            },{
                title:"In the teens", 
                value:this.props.Player.career_form.Batting_Teens,
                sub:"Scores over 10 yet under 20 in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_teen, 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_teen',
                list:this.props.Player.over_the_years[5][2],
                type:'batting'
            },
            {
                title:"20's", 
                value:this.props.Player.career_form.Batting_Twenties,
                sub:"Scores in the 20's in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_20, 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_20',
                list:this.props.Player.over_the_years[5][3],
                type:'batting'
            },
            {
                title:"30's", 
                value:this.props.Player.career_form.Batting_Thirties,
                sub:"30's in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_30,
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_30',
                list:this.props.Player.over_the_years[5][4],
                type:'batting'
            },
            {
                title:"40's", 
                value:this.props.Player.career_form.Batting_Forties,
                sub:"40's in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_40, 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_40',
                list:this.props.Player.over_the_years[5][5],
                type:'batting'
            },
            {
                title:"50's", 
                value:this.props.Player.career_form.Batting_Fifties,
                sub:"50's in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_50,
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_50',
                list:this.props.Player.over_the_years[5][6],
                type:'batting'
            },
            {
                title:"100's", 
                value:this.props.Player.career_form.Batting_Hundreds,
                sub:"100's in  " + OvertheYears[NumofYears].Year + " : " + OvertheYears[NumofYears].Batting_100,
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_100',
                list:this.props.Player.over_the_years[5][7],
                type:'batting'
            },
        )
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( <Content_Pod data={Display_Overview_Achievement_List} /> ); 
      }
  }