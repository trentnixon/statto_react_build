import React from "react";

import Half_Circle from "../stage/components/Half_Circle_Top";
import Pie_vs_Line from "../_Pages/Career/Pie_vs_Line_Header";    

import Content_Wrapper from "../stage/components/Content_Wrapper";
import Info_Badge from "../global/Info_Badge";
import World_Ranking_Figures from "../_Pages/Career/World_ranking_Figures";
import Section_Header from "../global/Section_Header";
import Go_to_component from "../global/go_to_component";
import Lastest_Figures from "./components/Latest_Figures";
import FAS from "./components/fas";
import List_Overview_Career from  "./components/List_Overview_Career";

// actions 
import {breadcrumbs} from  "../../actions/ui";

let Content_1=[], content_push_2=[];
export default class Bowling_Overview extends React.Component {

    constructor() { super();  }
    componentWillMount(){ 
        // set BC
    // console.log(this.props);
        breadcrumbs('bowling > Overview','parent');
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Half_Circle>
                    <Pie_vs_Line 
                            {... this.props}
                            Pie={this.props.Player.bowling_world_ranking[0].ranking}
                            Line={this.props.Player.bowling_world_ranking}
                            dataKey="ranking"
                        />
                    </Half_Circle>    
                    <Content_Wrapper>
                    <Info_Badge Text="BOWLING" />
                        <World_Ranking_Figures Rankings={this.props.Player.bowling_world_ranking}/>
                        <Section_Header header="Recent Figures" />
                        <Lastest_Figures {... this.props} />
                        <Section_Header header="Career" />
                            <List_Overview_Career {... this.props}/>
                        <Section_Header header="Achievements" />   
                            <FAS {... this.props} />
                    </Content_Wrapper>
                </div> 
             ); 
      }
  }