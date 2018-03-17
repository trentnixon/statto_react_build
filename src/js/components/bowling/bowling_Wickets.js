import React from "react";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";


// Import Components    
import Chart_Pie_Wickets_Over_Years from "./components/Chart_Pie_Wickets_Over_Years";
import Chart_Bar_Wickets from "./components/Chart_Bar_Wickets";
import Most_for_and_Against from  "./components/most_for_and_against";

import Notable_Bowling from "./components/notable_bowling";

export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Half_Circle>
                        <Section_Header header={this.props.Player.career_form.Bowling_Wickets + " Career Wickets."} />
                    </Half_Circle>
                    <Content_Wrapper>   
                        <Most_for_and_Against  {... this.props} />
                       
                        <div class="darkWrapper"> 
                            <Chart_Pie_Wickets_Over_Years {... this.props}/>
                        </div>
                        <div class="darkWrapper"> 
                            <Chart_Bar_Wickets {... this.props}/>
                        </div>
                        <Notable_Bowling {... this.props}/>
                    </Content_Wrapper>
                </div>
             ); 
      }
  }