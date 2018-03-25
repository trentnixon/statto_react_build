import React from "react";
import Section_Header from "../../../global/Section_Header";
import DarkWrapper from "../../../global/wrapper";
import NakedWrapper from "../../../global/Naked_wrapper";

// Get Components
import Bar_Chart_Runs from "./Chart_Bar_Runs";

import Chart_Line_Growth from "./Chart_Line_Run_Growth";
import Radial from "../../../_Pages/Career/Radial_Two_Part";

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
                            <Chart_Line_Growth {... this.props} />
                        </NakedWrapper>
                        <NakedWrapper>
                            <Radial title="Runs vs Balls" data={RadialData} />
                        </NakedWrapper>
                        <NakedWrapper>
                            <Bar_Chart_Runs {... this.props}/>
                        </NakedWrapper>
                </div>
             ); 
      }
  }