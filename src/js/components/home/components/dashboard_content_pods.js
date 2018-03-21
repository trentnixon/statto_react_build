import React from "react";
// import Content_Pod from "../../global/Expandable_Panel/content_pod";
import Content_Pod from "../../global/Expandable_Panel/Create_Content_Pods";

let Content=[];
export default class Display_Dashboard extends React.Component {

    constructor() { super();  }
    componentWillMount(){
        Content=[];
        Content.push(
            {  
                title:"Runs Scored", 
                value:this.props.Player.career_form.Batting_Total_Runs,
                sub:"", 
                width:"col-xs-12",
                
            },{  
                title:"Wickets", 
                value:this.props.Player.career_form.Bowling_Wickets,
                sub:"", 
                width:"col-xs-12",
                
            }
        )
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
     
    render() {
            return ( <Content_Pod data={Content}  /> ); 
      }
  }