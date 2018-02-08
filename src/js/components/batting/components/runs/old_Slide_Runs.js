import React from "react";
import Section_Header from "../../../global/Section_Header";

// Import Components
import Section_Runs from "./Section_Runs";
import Section_Scores from "./Section_Scores";

export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
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