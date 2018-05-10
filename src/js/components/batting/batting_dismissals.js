import React from "react";
import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";

// Components

import Dismissal_Header from "./components/Batting_Dismissal_Header_Chart";
import Dismissal_Runs_BarChart from  "./components/Batting_Dismissal_Runs_BarChart";
import Dismissal_Balls_barChart from "./components/Batting_Dismissal_Balls_BarChart";
import Dismissal_Average from "./components/Batting_Dismissal_Average_Radial";

export default class batting_Dismissals extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){
        
     }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Half_Circle> 
                        <Dismissal_Header {... this.props}/> 
                    </Half_Circle>
                        <Content_Wrapper>
                                <Info_Badge  Text="Dismissals" />
                        <Section_Header header="Batting Dismissals" />
                            <Dismissal_Average {...this.props}/>
                            
                            <Dismissal_Runs_BarChart {... this.props}/>
                            
                        </Content_Wrapper>
                </div>
             ); 
      }
  }