import React from "react";
import { connect } from "react-redux";
// Stage
import Section_Header from "../global/Section_Header";
import Content_Wrapper from "../stage/components/Content_Wrapper";
// Header
import WR_Circle from "./components/world_ranking_circle";

// Content
import Info_Badge from "../global/Info_Badge";
import Content_Pod from "./components/dashboard_content_pods";
import Last3Games from "./components/Last_3_Games";
import World_Ranking_Table from "./components/dashboard_world_ranking_table";

import Half_Circle from "../stage/components/Half_Circle_Top";
// actions 
import {breadcrumbs} from  "../../actions/ui";

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
        breadcrumbs('Dashboard','parent');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
                <div>
                    <Half_Circle>
                        <WR_Circle {...this.props}/>
                    </Half_Circle>
                    
                    <Content_Wrapper>
                        <Info_Badge 
                            Text={' Games Played : '+ this.props.Player.PLAYER_META.GAME_COUNT}
                        />
                        <Content_Pod  {...this.props}/>
                        <Section_Header header="World Rankings" />
                            <World_Ranking_Table {...this.props} />
                        <Section_Header header="Last 5 Games" />
                            <Last3Games {...this.props}/>
                    </Content_Wrapper>
                </div>
             ); 
      }
  }