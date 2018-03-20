import React from "react";
import Content_Pod from "../../global/Expandable_Panel/Create_Content_Pods";

let Display_Overview_Achievement_List=[];

export default class Overview_Achievement_List extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props.Player.over_the_years[0])
             // Second content pods
        Display_Overview_Achievement_List=[];
        Display_Overview_Achievement_List.push(
            {
                title:"Notouts", 
                value:this.props.Player.career_form.Batting_NotOuts,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_Notout',
                list:this.props.Player.over_the_years[5][0],
                type:'batting'
            },
            {
                title:"Ducks", 
                value:this.props.Player.career_form.Batting_Ducks,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_Ducks',
                list:this.props.Player.over_the_years[5][1],
                type:'batting'
            },{
                title:"In the teens", 
                value:this.props.Player.career_form.Batting_Teens,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_teen',
                list:this.props.Player.over_the_years[5][2],
                type:'batting'
            },
            {
                title:"20's", 
                value:this.props.Player.career_form.Batting_Twenties,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_20',
                list:this.props.Player.over_the_years[5][3],
                type:'batting'
            },
            {
                title:"30's", 
                value:this.props.Player.career_form.Batting_Thirties,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_30',
                list:this.props.Player.over_the_years[5][4],
                type:'batting'
            },
            {
                title:"40's", 
                value:this.props.Player.career_form.Batting_Forties,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_40',
                list:this.props.Player.over_the_years[5][5],
                type:'batting'
            },
            {
                title:"50's", 
                value:this.props.Player.career_form.Batting_Fifties,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_50',
                list:this.props.Player.over_the_years[5][6],
                type:'batting'
            },
            {
                title:"100's", 
                value:this.props.Player.career_form.Batting_Hundreds,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Batting_100',
                list:this.props.Player.over_the_years[5][7],
                type:'batting'
            },
        )
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( <Content_Pod data={Display_Overview_Achievement_List} /> ); 
      }
  }