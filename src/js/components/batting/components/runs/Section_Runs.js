import React from "react";
import Section_Header from "../../../global/Section_Header";


// Get Components
import Bar_Chart_Runs from "./Chart_Bar_Runs";
import Chart_Pie_Runs_Over_Years from "./Chart_Pie_Runs_Over_Years";
import Chart_Line_Growth from "./Chart_Line_Run_Growth";

export default class batting_runs extends React.Component {

    constructor() { super();  }
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <div class="darkWrapper">
                            <Chart_Pie_Runs_Over_Years {... this.props}/>
                        </div>
                        <div class="darkWrapper">
                            <Chart_Line_Growth {... this.props} />
                        </div>
                        <div class="darkWrapper">
                            <Bar_Chart_Runs {... this.props}/>
                        </div>
                </div>
             ); 
      }
  }