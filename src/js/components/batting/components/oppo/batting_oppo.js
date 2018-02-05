import React from "react";

//import OppoTable from "./Table_Opposition";
import OppoTable from "../../../global/filtered_table/Table_Batting";

export default class batting_Averages extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
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