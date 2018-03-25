import React from "react";

import Half_Circle from "../stage/components/Half_Circle_Top";
    import Pie_vs_Line from "../_Pages/Career/Pie_vs_Line_Header";    
    
import Content_Wrapper from "../stage/components/Content_Wrapper";
    import Info_Badge from "../global/Info_Badge";
    import World_Ranking_Figures from "../_Pages/Career/World_ranking_Figures";
    import Section_Header from "../global/Section_Header";
    import LatestScores from "./components/Latest_Scores";
    import Carrer_Overview_List from "./components/Overview_Career_list";
    import Achievement_Overview from "./components/Overview_achievement_list";


// actions 
import {breadcrumbs} from  "../../actions/ui";

let Content_1=[];
export default class batting_career extends React.Component {

    constructor() { super();  }

    setUI(){}
    componentWillMount(){ 
       // set BC
       breadcrumbs('batting > Overview','parent');
       
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
     
    render() {
            return ( 
                <div>
                    <Half_Circle>
                        <Pie_vs_Line 
                            {... this.props}
                            Pie={this.props.Player.batting_world_ranking[0].ranking}
                            Line={this.props.Player.batting_world_ranking}
                            dataKey="ranking"
                        />
                        
                    </Half_Circle>

                    <Content_Wrapper>   
                        <Info_Badge Text="BATTING" />   
                            <World_Ranking_Figures Rankings={this.props.Player.batting_world_ranking}/>
                        <Section_Header header="Recent Scores" />
                            <LatestScores {... this.props} />
                        <Section_Header header="Career" />
                            <Carrer_Overview_List {... this.props}/>
                       
                        <Section_Header header="Achievement Overview" />
                            <Achievement_Overview {... this.props}/>
                    </Content_Wrapper>
               </div>
             ); 
      }
  }