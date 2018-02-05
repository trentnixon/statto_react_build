import React from "react";
import Section_Header from "../global/Section_Header";

// Import Components
import Chart_Pie_Wickets_Over_Years from "./components/Chart_Pie_Wickets_Over_Years";
import Chart_Bar_Wickets from "./components/Chart_Bar_Wickets";

export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <Section_Header header={this.props.Player.career_form.Bowling_Wickets + " Career Wickets."} />
                       
                        <div class="darkWrapper"> 
                            Most wickets for :
                            Most wickets Against : 
                        </div>
                        
                        <div class="darkWrapper"> 
                            <Chart_Pie_Wickets_Over_Years {... this.props}/>
                        </div>
                        <div class="darkWrapper"> 
                            <Chart_Bar_Wickets {... this.props}/>
                        </div>

                        

                        <div class="darkWrapper"> 
                            2-fa, 3fa, 4fa, 5-fa etc
                        </div>

                </div>
             ); 
      }
  }