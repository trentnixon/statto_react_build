import React from "react";
import Section_Header from "../global/Section_Header";
import TeamTable from "../global/filtered_table/Table_Batting";

export default class Batting_Teams extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div> 
                        <Section_Header header="Teams" />
                        <TeamTable 
                            TableData={this.props.Player.team_played_for_stats}
                            {... this.props}
                            Filter="Filter Team"
                            Title="Teams i have Played for"
                            NestedDisplay="Opposition"
                        />
                </div>
             ); 
      }
  }