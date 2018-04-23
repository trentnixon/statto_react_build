import React from "react";

import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";

import Section_Header from "../global/Section_Header";
import TeamTable from "../global/filtered_table/Table_Batting";
// actions 
import {breadcrumbs} from  "../../actions/ui";

export default class Batting_Teams extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
                // set BC
                breadcrumbs('Batting > Teams','parent');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div> 
                    <Half_Circle>
                        <Section_Header header="Teams Played For" />
                    </Half_Circle>
                    <Content_Wrapper>
                        
                        <TeamTable 
                            TableData={this.props.Player.team_played_for_stats}
                            {... this.props}
                            Filter="Filter Teams"
                            Title="Teams i have Played for"
                            NestedDisplay="Opposition"
                        />
                    </Content_Wrapper>
                </div>
             ); 
      }
  }