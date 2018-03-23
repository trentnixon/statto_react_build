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
import Radial from "../_Pages/Career/Radial_Two_Part";
import Extendable_Content_Pod from "../global/Expandable_Panel/Create_Content_Pods";
//import Content_Pod from "./components/dashboard_content_pods";
//import Last3Games from "./components/Last_3_Games";
// import World_Ranking_Table from "./components/dashboard_world_ranking_table";
import World_Ranking_Figures from "./components/World_ranking_Figures_All";
import Top_3_Teams from "./components/Top_3_Teams_Played_For";
import Half_Circle from "../stage/components/Half_Circle_Top";
// actions 
import {breadcrumbs,runsvsballs} from  "../../actions/ui";

let Runs_Text=[],Wickets_Text=[],RadialData;
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
        RadialData = runsvsballs(this.props.Player.filtered_json)

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

                        <Section_Header header="World Ranking" />                    
                        <World_Ranking_Figures {... this.props}/>
                        
                        <Section_Header header="Career" />
                        <Naked_Wrapper>
                            <Extendable_Content_Pod data={Runs_Text}/>
                            <Extendable_Content_Pod data={Wickets_Text}/>    
                        </Naked_Wrapper>
                        <ul>
                            <p>MOM performances? </p>
                        </ul>
                    </Content_Wrapper>
                    <Content_Wrapper AddClass="Dark_Blue">                            
                        <Section_Header header={"Regular Teams"} />
                            <Top_3_Teams Teams={this.props.Player.team_played_for_stats}/>
                        <ul>
                            <li>Win loss Ratios</li>
                            <li>next fixtures?</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Content_Wrapper>
                </div>
             ); 
      }
  }