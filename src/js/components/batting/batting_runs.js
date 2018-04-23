import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
import Section_Runs from "./components/runs/Section_Runs";
import Section_Scores from "./components/runs/Section_Scores";
// actions 
import {breadcrumbs} from  "../../actions/ui";

import Chart_Line_Growth from "./components/runs/Chart_Line_Run_Growth";
export default class Batting_Runs extends React.Component {

    constructor() { super();  }
    componentWillMount(){
        // set BC
        breadcrumbs('Batting > Runs','parent');
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div>
                    <Half_Circle>
                        <Chart_Line_Growth {... this.props} />
                    </Half_Circle>  
                    <Content_Wrapper>   
                        <Info_Badge Text={this.props.Player.career_form.Batting_Total_Runs + " RUNS"} />
                        <Section_Runs {... this.props}/> 
                        <Section_Scores {... this.props} />
                    </Content_Wrapper>
                </div>
             ); 
      }
  }