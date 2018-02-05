import React from "react";
import Section_Header from "../global/Section_Header";
import TeamTable from "../global/filtered_table/Table_Bowling";

export default class Table_Bowling_Teams extends React.Component {

    constructor() { super();  }
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <TeamTable 
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