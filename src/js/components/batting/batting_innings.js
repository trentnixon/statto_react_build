import React from "react";
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
                        <div class="darkWrapper">
                                <Section_Header header="By The Innings" />
                                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Innings"/>
                                                <List_Best_AES 
                                                                Tag="Innings"
                                                                header="Most Innings (2 Game Min)"
                                                                filter="INN"
                                                                {...this.props}
                                                        />
                                <Runs_Stacked {...this.props}/>
                        </div>
                        <div class="darkWrapper">
                                <Section_Header header="Balls Faced" />
                                <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Balls_Faced"/>
                                <List_Best_AES 
                                        Tag="Balls Faced"
                                        header="Most Balls Faced (2 Game Min)"
                                        filter="Balls"
                                        {...this.props}
                                />
                        </div>
                        <div class="darkWrapper">
                                <Section_Header header="Averages" />
                                <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_Average"/>
                                <List_Best_AES 
                                        Tag="Averages"
                                        header="Average (2 Game Min)"
                                        filter="Avg"
                                        {...this.props}
                                />
                        </div>
                        
                        <div class="darkWrapper">
                                <Section_Header header="Strike Rate" />
                                <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Batting_StrikeRate"/>
                                <List_Best_AES 
                                        Tag="Strike Rate"
                                        header="Strike Rate (2 Game Min)"
                                        filter="SR"
                                        {...this.props}
                                />
                        </div>
                </div>
             ); 
      }
  }