import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Wrapper from "../global/wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
import Runs_Stacked from "./components/Chart_Bar_Stacked_Runs_Balls";
import Pie_Metric_over_the_years from  "./components/Chart_Pie_Metric_Innings_over_The_Years";

import List_Best_AES from "../_Pages/AES/List_Best_AES";
import Triple_Line from "./components/Chart_Line_avg_sr_ec";

export default class Batting_Innings extends React.Component {

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
                                <Naked_Wrapper>
                                        <List_Best_AES 
                                                Tag=""
                                                header="Most Innings (3 Game Min)"
                                                filter="INN"
                                                order="desc"
                                                {...this.props}
                                         />
                                </Naked_Wrapper>
                                
                                <Naked_Wrapper>
                                        <Section_Header header="# Innings over the years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Innings"/>
                                </Naked_Wrapper>
                                
                               <hr /> 

                        <Section_Header header="Balls Faced" />
                                <Naked_Wrapper>
                                        <List_Best_AES 
                                                Tag=""
                                                header="Most Balls Faced (3 Game Min)"
                                                filter="Balls"
                                                order="desc"
                                                {...this.props}
                                        />
                                </Naked_Wrapper>
                                <Naked_Wrapper>
                                        <Section_Header header="Balls Faced over the Years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Balls_Faced"/>
                                </Naked_Wrapper>
                                <Naked_Wrapper>
                                        <Runs_Stacked {...this.props}/>
                                </Naked_Wrapper>
                                
                                <hr />

                        <Section_Header header="Averages" />
                                <Naked_Wrapper>
                                        <List_Best_AES 
                                                Tag=""
                                                header="Average (3 Game Min)"
                                                filter="Avg"
                                                order="desc"
                                                {...this.props}
                                        />
                                </Naked_Wrapper>
                                <Naked_Wrapper>
                                <Section_Header header="Averages over the Years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Average"/>
                                </Naked_Wrapper>
                                
                                <hr />

                        <Section_Header header="Strike Rate" />
                                <Naked_Wrapper>
                                        <List_Best_AES 
                                                Tag=""
                                                header="Strike Rate (3 Game Min)"
                                                filter="SR"
                                                order="desc"
                                                {...this.props}
                                        />
                                </Naked_Wrapper>
                                <Naked_Wrapper>
                                        <Section_Header header="Strike Rate over the Years" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_StrikeRate"/>
                                </Naked_Wrapper>
                        </Content_Wrapper>
                </div>
             ); 
      }
  }