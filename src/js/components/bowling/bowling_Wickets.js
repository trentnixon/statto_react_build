import React from "react";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Info_Badge from "../global/Info_Badge";

// Import Components    
import Chart_Pie_Wickets_Over_Years from "./components/Chart_Pie_Wickets_Over_Years";
import Chart_Bar_Wickets from "./components/Chart_Bar_Wickets";
import Naked_Wrapper from "../global/Naked_wrapper";
import Notable_Bowling from "./components/notable_bowling";
import List_Best_AES from "../_Pages/AES/List_Best_AES";


export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Half_Circle>
                        
                    </Half_Circle>
                    <Content_Wrapper>    
                    <Info_Badge Text={this.props.Player.career_form.Bowling_Wickets + " Career Wickets."} />
                        <Naked_Wrapper>
                            <List_Best_AES 
                                                Tag=""
                                                header="Most Wickets (3 Game Min)"
                                                filter="WicketsTaken"
                                                order="desc"
                                                {...this.props}
                            />
                        </Naked_Wrapper>

                        <Naked_Wrapper> 
                            <Chart_Pie_Wickets_Over_Years {... this.props}/>
                        </Naked_Wrapper> 
                        
                        <Naked_Wrapper> 
                            <Chart_Bar_Wickets {... this.props}/>
                        </Naked_Wrapper>
                        <Naked_Wrapper>
                            <Notable_Bowling {... this.props}/>
                        </Naked_Wrapper>
                    </Content_Wrapper>
                </div>
             ); 
      }
  }