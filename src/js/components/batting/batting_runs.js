import React from "react";
import Section_Header from "../global/Section_Header";
import Section_Runs from "./components/runs/Section_Runs";
import Section_Scores from "./components/runs/Section_Scores";
export default class Batting_Runs extends React.Component {

    constructor() { super();  }
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div>
                        <Section_Header header={this.props.Player.career_form.Batting_Total_Runs + " Career Runs."} />
                        <Section_Runs {... this.props}/>
                        <Section_Scores {... this.props} />
                </div>
             ); 
      }
  }