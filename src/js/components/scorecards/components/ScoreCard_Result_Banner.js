import React from "react";

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    
    render() {
            return ( 
                <div id="scorecard_Result">
                        <h2>{this.props.SelectedGame.Winner_Name} {this.props.SelectedGame.Winner_Summary}</h2>
                </div>
             ); 
      }
  }