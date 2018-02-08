import React from "react";
import Section_Header from "../global/Section_Header";
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
                       <Section_Header header="Opposition" />
                       <OppoTable 
                            TableData={this.props.Player.opposition_stats}
                            {... this.props}
                            Filter="Filter Opposition"
                            Title="Played Against"
                            NestedDisplay="Team"
                        /> 
                </div>
             ); 
      }
  }