import React from "react";
import Section_Header from "../global/Section_Header";
import TeamTable from "../global/filtered_table/Table_Bowling";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";

// actions 
import {breadcrumbs} from  "../../actions/ui";

export default class Table_Bowling_Teams extends React.Component {

    constructor() { super();  }
    componentWillMount(){ 
        // set BC
        breadcrumbs('Bowling > Opposition','parent');
     }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
     
    render() {
            return ( 
                <div>
                    <Half_Circle>
                        <Section_Header header="Opposition" />
                    </Half_Circle>
                    <Content_Wrapper>
                        <TeamTable 
                            TableData={this.props.Player.opposition_stats}
                            {... this.props}
                            Filter="Filter Opposition"
                            Title="Played Against"
                            NestedDisplay="Team"
                        />
                    </Content_Wrapper>
                </div>
             ); 
      }
  } 