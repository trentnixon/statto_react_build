import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Wrapper from "../global/wrapper";
import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
import Runs_Stacked from "./components/Chart_Bar_Stacked_Runs_Balls";
import Pie_Metric_over_the_years from  "./components/Chart_Pie_Metric_Innings_over_The_Years";
import List_Best_AES from "./components/List_Best_AES";
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                        <Half_Circle>
                                <Section_Header header="Averages" />
                        </Half_Circle>
                        <Content_Wrapper>
                                <Info_Badge  Text="A,E,S" />
                         
                        <Section_Header header="By The Innings" />
                        
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
                                
                                <Wrapper>
                                       
                                        <Runs_Stacked {...this.props}/>
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
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Balls_Faced"/>
                                </Wrapper>
                                
                        <Section_Header header="Averages" />
                                <Wrapper>
                                <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Average"/>
                                </Wrapper>
                                <Wrapper>
                                <List_Best_AES 
                                        Tag="Averages"
                                        header="Average (2 Game Min)"
                                        filter="Avg"
                                        {...this.props}
                                />
                                </Wrapper>
                        <Section_Header header="Strike Rate" />
                                <Wrapper>
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_StrikeRate"/>
                                </Wrapper>
                                <Wrapper>
                                        <List_Best_AES 
                                                Tag="Strike Rate"
                                                header="Strike Rate (2 Game Min)"
                                                filter="SR"
                                                {...this.props}
                                        />
                                </Wrapper>
                        </Content_Wrapper>
                </div>
             ); 
      }
  }