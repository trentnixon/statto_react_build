import React from "react";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Wrapper from "../global/wrapper";
import Info_Badge from "../global/Info_Badge";
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
                <Half_Circle>
                    <Triple_Line {...this.props}  Theme="Light" />
                </Half_Circle>
                
                <Content_Wrapper>

                    <Info_Badge Text="A,E,S" />
       
       <Section_Header header="Averages" />             
                    <Wrapper>
                        <List_Best_AEC 
                                Tag="Runs per Wicket"
                                header="Best Averages (2 Game Min)"
                                filter="Bowling_Average"
                                {...this.props}
                            />
                    </Wrapper>

                <Wrapper>
                        <Section_Header header="Averages over the years" />
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Bowling_Average"/>
                </Wrapper>
                <Wrapper>
                        <Section_Header header="Carrer Average against Current " />
                        <Double_Line_Chart  
                            data={this.props.Player.over_the_years[1]} 
                             dataKey1="Average" 
                            dataKey2="Career" 
                        /> 
                </Wrapper>
        
        
        <Section_Header header="Bowling  Economy" />
                <Wrapper>
                        <List_Best_AEC 
                            Tag="Runs per Over"
                            header="Best Economy (2 Game Min)"
                            filter="EconomyRate"
                            {...this.props}
                        />
                </Wrapper>
                <Wrapper>
                        <Section_Header header="Economy over the years" />
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="EconomyRate" />
                 </Wrapper>
                 <Wrapper>     
                        <Section_Header header="Carrer Economy against Current " />  
                        <Double_Line_Chart 
                            data={this.props.Player.over_the_years[2]} 
                            dataKey1="Economy" 
                            dataKey2="Career" 
                        />
                </Wrapper>
        
        
        <Section_Header header=" Strike Rate" />
                <Wrapper>

                        <List_Best_AEC 
                            Tag="Balls per Wicket"
                            header="Best Strikerate (2 Game Min)"
                            filter="BowlingstrikeRate"
                            {...this.props}
                        />
                </Wrapper>
                <Wrapper>
                        <Section_Header header="Strike Rate over the years" />
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="BowlingstrikeRate"/>
                </Wrapper>
                <Wrapper>  
                    <Section_Header header="Carrer Strike Rate against Current " />    
                        <Double_Line_Chart 
                            data={this.props.Player.over_the_years[3]} 
                            dataKey1="Strikerate" 
                            dataKey2="Career" 
                        />
                </Wrapper>    
                </Content_Wrapper>
            </div>
             ); 
      }
  }