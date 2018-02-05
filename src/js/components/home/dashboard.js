import React from "react";
import { connect } from "react-redux";

import Section_Header from "../global/Section_Header";
import WR_Circle from "./components/world_ranking_circle";
import Content_Pod from "./components/dashboard_content_pods";
import Last3Games from "./components/Last_3_Games";
import World_Ranking_Table from "./components/dashboard_world_ranking_table";

// actions 
import {breadcrumbs} from  "../../actions/ui";

@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER
    }
})
export default class Display_Dashboard extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
         // set BC
        breadcrumbs('Dashboard','parent');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       } 
    
    render() {
            return ( 
                <div>
                    <WR_Circle {...this.props}/>
                        <Content_Pod  {...this.props}/>
                    <Section_Header header="World Rankings" />
                        <World_Ranking_Table {...this.props} />
                    <Section_Header header="Last 5 Games" />
                        <Last3Games {...this.props}/>
                </div>
             ); 
      }
  }