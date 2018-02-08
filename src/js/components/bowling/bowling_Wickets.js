import React from "react";
import Section_Header from "../global/Section_Header";

// Import Components
import Chart_Pie_Wickets_Over_Years from "./components/Chart_Pie_Wickets_Over_Years";
import Chart_Bar_Wickets from "./components/Chart_Bar_Wickets";
import Most_for_and_Against from  "./components/most_for_and_against";
import FAS from "./components/fas";


export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <Section_Header header={this.props.Player.career_form.Bowling_Wickets + " Career Wickets."} />
                       
                        <Most_for_and_Against  {... this.props} />
                       
                        <div class="darkWrapper"> 
                            <Chart_Pie_Wickets_Over_Years {... this.props}/>
                        </div>
                        <div class="darkWrapper"> 
                            <Chart_Bar_Wickets {... this.props}/>
                        </div>

                        <FAS {... this.props} />
                        
                        <p> Add in list table like the batting for best bowling, lest runs, most runs, etc </p>
                </div>
             ); 
      }
  }