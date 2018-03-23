import React from "react";
import { connect } from "react-redux";
// Stage
import Section_Header from "../global/Section_Header";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";
// Header
import WR_Circle from "./components/world_ranking_circle";

// Content
import Info_Badge from "../global/Info_Badge";
import Last_Game_Figures from "./components/Last_Game_Figures";
import Recent_Scores from "./components/Chart_Bar_Recent_Scores";

import Extendable_Content_Pod from "../global/Expandable_Panel/Create_Content_Pods";
//import Content_Pod from "./components/dashboard_content_pods";
//import Last3Games from "./components/Last_3_Games";
// import World_Ranking_Table from "./components/dashboard_world_ranking_table";

import Half_Circle from "../stage/components/Half_Circle_Top";
// actions 
import {breadcrumbs} from  "../../actions/ui";

let Runs_Text=[],Wickets_Text=[];
@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER
    }
})
export default class Display_dashboard extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
         // set BC
        breadcrumbs('Dashboard','parents');


        Runs_Text=[{  
            title:"Runs Scored", 
            value:this.props.Player.career_form.Batting_Total_Runs,
            sub:"", 
            width:"col-xs-12", 
        }]
        Wickets_Text=[{  
            title:"Wickets", 
            value:this.props.Player.career_form.Bowling_Wickets,
            sub:"", 
            width:"col-xs-12",
        }]
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() { 
        // <WR_Circle {...this.props}/>
            return ( 
                <div>
                    <Half_Circle>
                        <Last_Game_Figures {... this.props}/>
                    </Half_Circle>
                    
                    <Content_Wrapper>
                        <Info_Badge 
                            Text={' Games Played : '+ this.props.Player.PLAYER_META.GAME_COUNT}
                        />

                    <Section_Header header="Teams" />
                    <ul>
                        <li>Win loss Ratios</li>
                        <li>top 3 Teams</li>
                        <li>next fixtures?</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <Section_Header header="Career" />
                        <ul>
                            <li>world rankings</li>
                            <li>Radial Graph</li>
                            <li></li>       
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                        <Naked_Wrapper>
                            <Extendable_Content_Pod data={Runs_Text}/>
                            <Section_Header header="Recent Runs" />
                            <Recent_Scores {... this.props}/>
                        </Naked_Wrapper>
                        
                        

                        <Naked_Wrapper>
                        <Extendable_Content_Pod data={Wickets_Text}/>
                            <Section_Header header="Recent Wickets" />
                            <Recent_Scores {... this.props}/>
                        </Naked_Wrapper>

                       
                        
                        <p> More Fun!!!  Charts interactive elements and colors! </p>
                        <p> Teams Played for: link to page </p>
                        <p> W/L Ratios</p>
                        <p>MOM performances? </p>


                       
                       
                    </Content_Wrapper>
                </div>
             ); 
      }
  }