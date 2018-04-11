import React from "react";
var _ = require('lodash');

import Batting from "./Scorecard_Batting";
import Bowling from "./Scorecard_Bowling";

export default class Scorecard_Display extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    render() {
        
            let firstInnings = _.values(this.props.SelectedGame["1st_Innings"]);
            let SecondInnings = _.values(this.props.SelectedGame["2nd_Innings"]);

            return ( 
                <div id="Display_The_Scorecard">
                    <h2>First Innings</h2>
                    <h3>Batting</h3>
                        <Batting  innings={firstInnings} />
                    <h3>Bowling</h3>
                        <Bowling  innings={SecondInnings} />

                    <h2 class="secondInnings">Second Innings</h2>
                    <h3>Batting</h3>
                        <Batting  innings={SecondInnings} />  
                    <h3>Bowling</h3>
                        <Bowling  innings={firstInnings} />  
                   
                </div>
             ); 
      }
  }