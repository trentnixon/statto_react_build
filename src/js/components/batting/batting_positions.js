import React from "react";
import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";

/* Components */

import Position_Header from "./components/Batting_Position_Header_Chart";
import Position_Radial from "./components/Batting_Position_Radial";
import Batting_Highest_Scores from "./components/Batting_Position_Highest_Scores";
import Batting_Position_Bar from "./components/Batting_Position_Horizontal_Totals";
import Batting_Position_Strikerate_Average from "./components/Batting_Position_Average_Strikerate";
import Batting_Position_Runs_Scored_Pie  from "./components/Batting_Position_Runs_Scores_Pie";
export default class batting_Position extends React.Component {

    constructor() { super();  }
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Half_Circle> 
                        <Position_Header {... this.props}/> 
                    </Half_Circle>
                        <Content_Wrapper>
                                <Info_Badge  Text="Batting Order" />
                        <Section_Header header="Runs by Position" />
                            <Batting_Position_Bar {... this.props}/>
                            <Batting_Position_Runs_Scored_Pie {... this.props}/> 
                        <Section_Header header="Runs to Balls by Batting Order" />
                            <Position_Radial {... this.props}/>
                        <Section_Header header="High Scores" />
                            <Batting_Highest_Scores {... this.props}/>
                        <Section_Header header="Strike Rate vs Average" />
                            <Batting_Position_Strikerate_Average {... this.props}/>
                        </Content_Wrapper>
                </div>
             ); 
      }
  }