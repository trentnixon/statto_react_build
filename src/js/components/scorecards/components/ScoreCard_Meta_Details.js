import React from "react";
var _ = require('lodash');

let bowling, batting;
export default class Display_Player_Meta_Details extends React.Component {

    constructor() { super();  }
    
        findMOMDeets(MOMID,FIRST,SECOND){
                let found=false, Details='';

                // merge the two objects and complete one map
                // This needs to be re done
               
                Details = FIRST.map((player,i)=>{ 
                        if(player.Player_ID == MOMID ){
                               // console.log(player.Player_Name. player)
                                found = true;
                                return(
                                        <p key={i} class="tone2">
                                                {player.Runs} Runs off {player.Balls_Faced} Balls
                                                <br /> 
                                                {player.Wickets}/{player.runs_conceded} - {player.Overs_Bowled} Overs          
                                        </p>
                                )  
                        }
                })

                if(found == false)
                {
                        Details = SECOND.map((player,i)=>{ 
                                if(player.Player_ID == MOMID ){
                                       found = true;
                                        return(
                                                <p key={i} class="tone2">
                                                        {player.Runs} Runs off {player.Balls_Faced} Balls
                                                        <br /> 
                                                        {player.Wickets}/{player.runs_conceded} - {player.Overs_Bowled} Overs          
                                                </p>
                                        )
                                }
                        })
                }
                return Details;
        }

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        let firstInnings = _.values(this.props.SelectedGame["1st_Innings"]);
        let SecondInnings = _.values(this.props.SelectedGame["2nd_Innings"]);
       
        let Details = this.findMOMDeets(this.props.SelectedGame.MOM_ID, firstInnings,SecondInnings )

        return ( 
                <div id="scorecard_Meta">
                        <h2>{this.props.SelectedGame.Batted_First} Batted First</h2>
                        <h3>Venue: {this.props.SelectedGame.Venue} Date : {this.props.SelectedGame.Date}</h3>
                        <h3> Umpire : {this.props.SelectedGame.Umpire}</h3>
                        <h2 class="tone">Man of the Match : {this.props.SelectedGame.MOM}</h2>
                        {Details}
                </div>
             ); 
      }
  }