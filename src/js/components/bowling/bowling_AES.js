import React from "react";
import Wrapper from "../global/wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Info_Badge from "../global/Info_Badge";
// Import Components
import Triple_Line from "./components/Chart_Line_avg_sr_ec";

// Charts
import Pie_Metric_over_the_years from "./components/Chart_Pie_Metric_Over_The_Years";
import Double_Line_Chart from "./components/Chart_Metric_Lines";
import List_Best_AEC from "../_Pages/AES/List_Best_AES";
 
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
                    <Naked_Wrapper>
                        <List_Best_AEC 
                                Tag=""
                                header="Best Averages (3 Game Min)"
                                filter="Bowling_Average"
                                order="asc"
                                {...this.props}
                            />
                    </Naked_Wrapper>

                <Naked_Wrapper>
                        <Section_Header header="Averages over the years" />
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="Bowling_Average"/>
                </Naked_Wrapper>
                <Naked_Wrapper>
                        <Section_Header header="Career Average against Current " />
                        <Double_Line_Chart  
                            data={this.props.Player.over_the_years[1]} 
                             dataKey1="Average" 
                            dataKey2="Career" 
                        /> 
                </Naked_Wrapper>
        
                <hr />
        
                <Section_Header header="Bowling  Economy" />
                <Naked_Wrapper>
                        <List_Best_AEC 
                            Tag=""
                            header="Best Economy (3 Game Min)"
                            filter="EconomyRate"
                            order="asc"
                            {...this.props}
                        />
                </Naked_Wrapper>
                <Naked_Wrapper>
                        <Section_Header header="Economy over the years" />
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="EconomyRate" />
                 </Naked_Wrapper>
                 <Naked_Wrapper>     
                        <Section_Header header="Career Economy against Current " />  
                        <Double_Line_Chart 
                            data={this.props.Player.over_the_years[2]} 
                            dataKey1="Economy" 
                            dataKey2="Career" 
                        />
                </Naked_Wrapper>
        
                <hr />
        
                <Section_Header header=" Strike Rate" />
                <Naked_Wrapper>

                        <List_Best_AEC 
                            Tag=""
                            header="Best Strikerate (3 Game Min)"
                            filter="BowlingstrikeRate"
                            order="asc"
                            {...this.props}
                        />
                </Naked_Wrapper>
                <Naked_Wrapper>
                        <Section_Header header="Strike Rate over the years" />
                        <Pie_Metric_over_the_years data={this.props.Player.over_the_years[0]} filter="BowlingstrikeRate"/>
                </Naked_Wrapper>
                <Naked_Wrapper>  
                    <Section_Header header="Career Strike Rate against Current " />    
                        <Double_Line_Chart 
                            data={this.props.Player.over_the_years[3]} 
                            dataKey1="Strikerate" 
                            dataKey2="Career" 
                        />
                </Naked_Wrapper>    
            </Content_Wrapper>
        </div>
             ); 
      }
  }