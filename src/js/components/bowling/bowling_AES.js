import React from "react";
import Section_Header from "../global/Section_Header";

// Import Components
import Triple_Line from "./components/Chart_Line_avg_sr_ec";

// Charts
import Pie_Metric_over_the_years from "./components/Chart_Pie_Metric_Over_The_Years";
import Double_Line_Chart from "./components/Chart_Metric_Lines";
import List_Best_AEC from "./components/List_Best_AES";

let AES;
export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
    
            return ( 
            <div>
                <div class="darkWrapper">
                        <Section_Header header=" Average, Economy and Strike rate." />
                        <Triple_Line {...this.props} />
                </div>
                <div class="darkWrapper">
                        <Section_Header header="Averages over the years" />
                        
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Bowling_Average"/>

                        <Double_Line_Chart  
                            data={this.props.Player.over_the_years[1]} 
                             dataKey1="Average" 
                            dataKey2="Career" 
                        /> 

                        <List_Best_AEC 
                            Tag="Runs per Wicket"
                            header="Best Averages (2 Game Min)"
                            filter="Bowling_Average"
                            {...this.props}
                        />

                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Economy" />
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="EconomyRate" />
                        
                        <Double_Line_Chart 
                            data={this.props.Player.over_the_years[2]} 
                            dataKey1="Economy" 
                            dataKey2="Career" 
                        />

                        <List_Best_AEC 
                            Tag="Runs per Over"
                            header="Best Economy (2 Game Min)"
                            filter="EconomyRate"
                            {...this.props}
                        />
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Strike rate" />
                        
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="BowlingstrikeRate"/>
                        
                        <Double_Line_Chart 
                            data={this.props.Player.over_the_years[3]} 
                            dataKey1="Strikerate" 
                            dataKey2="Career" 
                        />

                        <List_Best_AEC 
                            Tag="Balls per Wicket"
                            header="Best Strikerate (2 Game Min)"
                            filter="BowlingstrikeRate"
                            {...this.props}
                        />
                </div>
            </div>
             ); 
      }
  }