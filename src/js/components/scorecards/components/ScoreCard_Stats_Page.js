import React from "react";

import Balls_Faced from "./ScoreCard_Chart_Balls_Faced_Percentage";
import Run_Rate_Comparison from "./ScoreCard_Chart_RunRate_Comparison";
import Batting_Position_Comparison from "./ScoreCard_Chart_BattingPosition_Comparison";
import Section_Header from "../../global/Section_Header";

export default class Display_Game_Stats extends React.Component {

    constructor() { super();  }
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div id="scorecard_Stats">
                    <Run_Rate_Comparison {... this.props} />
                    <Batting_Position_Comparison {... this.props} />
                    <Balls_Faced {... this.props}/>
                </div>
             );  
      }
  }