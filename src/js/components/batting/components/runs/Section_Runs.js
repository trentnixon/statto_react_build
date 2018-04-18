import React from "react";
import Section_Header from "../../../global/Section_Header";
import DarkWrapper from "../../../global/wrapper";
import NakedWrapper from "../../../global/Naked_wrapper";

// Get Components
import Bar_Chart_Runs from "./Chart_Bar_Runs";

import Chart_Line_Growth from "./Chart_Line_Run_Growth";
import Radial from "./Radial_Two_Part";
import Chart_Pie_Runs_Over_Years from "./Chart_Pie_Runs_Over_Years";
import {runsvsballs} from  "../../../../actions/ui";
let RadialData;

export default class batting_runs extends React.Component {

    constructor() { super();  }
    componentWillMount(){
        RadialData = runsvsballs(this.props.Player.filtered_json)
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <NakedWrapper>
                            <Chart_Pie_Runs_Over_Years {... this.props}/>
                        </NakedWrapper>
                        <NakedWrapper>
                            <Radial title="Runs against Balls" data={RadialData} />
                        </NakedWrapper>
                        <NakedWrapper> 
                            <Bar_Chart_Runs {... this.props}/>
                        </NakedWrapper>
                </div>
             ); 
      }
  }