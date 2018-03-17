import React from "react";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import TeamTable from "../global/filtered_table/Table_Bowling";

export default class Table_Bowling_Teams extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
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
                            Filter="Filter Team"
                            Title="Teams i have Played for"
                            NestedDisplay="Opposition"
                        />
                    </Content_Wrapper>
                </div>
             ); 
      }
  } 