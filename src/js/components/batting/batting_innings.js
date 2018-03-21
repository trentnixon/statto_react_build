import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Wrapper from "../global/wrapper";
import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
import Runs_Stacked from "./components/Chart_Bar_Stacked_Runs_Balls";
import Pie_Metric_over_the_years from  "./components/Chart_Pie_Metric_Innings_over_The_Years";

import List_Best_AES from "../_Pages/AES/List_Best_AES";
import Triple_Line from "./components/Chart_Line_avg_sr_ec";

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                        <Half_Circle>
                                <Triple_Line {...this.props}  Theme="Light" />
                        </Half_Circle>
                        <Content_Wrapper>
                                <Info_Badge  Text="I,A,S" />
                         
                        <Section_Header header="Innings" />
                        
                                <Wrapper>
                                        <List_Best_AES 
                                                Tag="Innings"
                                                header="Most Innings (2 Game Min)"
                                                filter="INN"
                                                {...this.props}
                                         />
                                </Wrapper>

                                <Wrapper>
                                        <Section_Header header="# Innings over the years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Innings"/>
                                </Wrapper>
                                
                                

                        <Section_Header header="Balls Faced" />
                                <Wrapper>
                                        <List_Best_AES 
                                                Tag="Balls Faced"
                                                header="Most Balls Faced (2 Game Min)"
                                                filter="Balls"
                                                {...this.props}
                                        />
                                </Wrapper>
                                <Wrapper>
                                        <Section_Header header="Balls Faced over the Years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Balls_Faced"/>
                                </Wrapper>
                                <Wrapper>
                                        <Runs_Stacked {...this.props}/>
                                </Wrapper>
                                
                        <Section_Header header="Averages" />
                                <Wrapper>
                                        <List_Best_AES 
                                                Tag="Averages"
                                                header="Average (2 Game Min)"
                                                filter="Avg"
                                                {...this.props}
                                        />
                                </Wrapper>
                                <Wrapper>
                                <Section_Header header="Averages over the Years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Average"/>
                                </Wrapper>
                                
                        <Section_Header header="Strike Rate" />
                                <Wrapper>
                                        <List_Best_AES 
                                                Tag="Strike Rate"
                                                header="Strike Rate (2 Game Min)"
                                                filter="SR"
                                                {...this.props}
                                        />
                                </Wrapper>
                                <Wrapper>
                                        <Section_Header header="STrike Rate over the Years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_StrikeRate"/>
                                </Wrapper>
                        </Content_Wrapper>
                </div>
             ); 
      }
  }