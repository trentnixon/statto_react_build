import React from "react";
var _ = require('lodash');

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        
        let firstInnings = _.values(this.props.SelectedGame["1st_Innings"]);
        let SecondInnings = _.values(this.props.SelectedGame["2nd_Innings"]);

            return ( 
                <div id="scorecard_TeamSheets">
                    <div class=" col-xs-6 TeamA">
                        <h3>{this.props.SelectedGame.Batted_First}</h3>
                        <ul>
                        {
                                firstInnings.map((player,i)=>{
                                        return(
                                                <li key={i} >
                                                        {player.Player_Name}
                                                </li>
                                        )
                                })
                        } 
                        </ul>
                    </div>

                    <div class=" col-xs-6 TeamB">
                    <h3>{this.props.SelectedGame.Batting_Second}</h3>
                    <ul>
                        {    
                                SecondInnings.map((player,i)=>{
                                        return(
                                                <li key={i} >
                                                        {player.Player_Name}
                                                </li>
                                        )
                                })
                        } 
                        </ul>
                    </div>
                   
                </div>
             ); 
      }
  }