import React from "react";
import { connect } from "react-redux";
// Stage
import Half_Circle from "../stage/components/Half_Circle_Top";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

// Header
import Last_Game_Figures from "./components/Last_Game_Figures";

// Content
import World_Ranking_Figures from "./components/World_ranking_Figures_All";
import Extendable_Content_Pod from "../global/Expandable_Panel/Create_Content_Pods";
import Top_3_Teams from "./components/Top_3_Teams_Played_For";


// import WR_Circle from "./components/world_ranking_circle";
//import Info_Badge from "../global/Info_Badge";
// import Recent_Scores from "./components/Chart_Bar_Recent_Scores";
// import Radial from "../_Pages/Career/Radial_Two_Part";
// 
//import Content_Pod from "./components/dashboard_content_pods";
//import Last3Games from "./components/Last_3_Games";
// import World_Ranking_Table from "./components/dashboard_world_ranking_table";

// actions 
import {breadcrumbs} from  "../../actions/ui";

let Runs_Text=[],Wickets_Text=[],RadialData, NumofYears=0, OvertheYears;
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
        OvertheYears = this.props.Player.over_the_years["0"]
        NumofYears = OvertheYears.length -1;
       
        Runs_Text=[
            {  
                title:"Games Played", 
                value:this.props.Player.raw_json.length,
                sub: OvertheYears[NumofYears].Games + " Games played  in " + OvertheYears[NumofYears].Year, 
                width:"col-xs-12", 
                data:OvertheYears,
                filter:'Games',
            },{  
                title:"Runs Scored", 
                value:this.props.Player.career_form.Batting_Total_Runs,
                sub: OvertheYears[NumofYears].Batting_Runs + " Runs  in " + OvertheYears[NumofYears].Year, 
                width:"col-xs-12", 
                data:OvertheYears,
                filter:'Batting_Runs',
                Link:'/'+this.props.Player.PLAYER_META.WP_ID+'/batting/'
        },{  
            title:"Average", 
            value:this.props.Player.career_form.Batting_Average,
            sub: " Batting Average for  " + OvertheYears[NumofYears].Year + ' : ' +OvertheYears[NumofYears].Batting_Average, 
            width:"col-xs-12",
            data:OvertheYears,
            filter:'Batting_Average',
            Link:'/'+this.props.Player.PLAYER_META.WP_ID+'/batting/innings/'
        },{  
            title:"Wickets", 
            value:this.props.Player.career_form.Bowling_Wickets,
            sub: OvertheYears[NumofYears].Wickets + " Wickets  in " + OvertheYears[NumofYears].Year, 
            width:"col-xs-12",
            data:OvertheYears,
            filter:'Wickets',
            Link:'/'+this.props.Player.PLAYER_META.WP_ID+'/bowling/'
        },{  
            title:"Economy", 
            value:this.props.Player.career_form.Bowling_Economy_Rate,
            sub: "Economy for  " + OvertheYears[NumofYears].Year + ' : ' +OvertheYears[NumofYears].EconomyRate, 
            width:"col-xs-12",
            data:OvertheYears,
            filter:'EconomyRate',
            Link:'/'+this.props.Player.PLAYER_META.WP_ID+'/bowling/aes/'
        },
    ]
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
                        
                        <World_Ranking_Figures {... this.props}/>
                        
                        <Section_Header header="Career Basics" />
                        <Section_Subheader header="Click to expand"/>
                        <Naked_Wrapper>
                            <Extendable_Content_Pod data={Runs_Text}/>   
                        </Naked_Wrapper>
                        
                    </Content_Wrapper>
                   
                   
                    <Content_Wrapper AddClass="Dark_Blue">
                        <div class="row">
                            <Top_3_Teams Teams={this.props.Player.team_played_for_stats}/>
                        </div>
                    </Content_Wrapper>
                </div>
             ); 
      }
  }