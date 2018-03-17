import React from "react";
import Section_Header from "../global/Section_Header";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";

import OppoTable from "../global/filtered_table/Table_Batting";

export default class Batting_Opposition extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props)
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
                       <OppoTable 
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