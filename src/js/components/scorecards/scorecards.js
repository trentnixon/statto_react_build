import React from "react";
import { connect } from "react-redux";
var _ = require('lodash');

import Section_Header from "../global/Section_Header";
import Scorecard_Found from "./scorecards_Found";
import Searching_Scorecards from "./scorecards_Seaching";
import Fetch_Scorecard from "./scorecards_Fetch_New";

let GameID=false, SelectedGame=false, findKey;

@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER,
        GAMES: store.GAMES,
    }
})
export default class Display_Scorecard extends React.Component {

    constructor(props) {super(props); }

    createScorecard(Games, GameID){
      let findKey;
       
      if(Games.Game_Data_Stored == true)
        {
            findKey = _.findKey(Games.Game_Data, { 'GameID': GameID});
         //   console.log(findKey);
           
            if(findKey === undefined){
                return -1;
            }
            else{
                return Games.Game_Data[findKey];
            }
        }   
    }

    componentWillMount(){ 
       SelectedGame = this.createScorecard(this.props.GAMES, this.props.match.params.gameID)
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        SelectedGame = this.createScorecard(this.props.GAMES, this.props.match.params.gameID)
    } 
    
    render() {

           if(SelectedGame === undefined){
                return(     
                    <div id="Scorecard">
                        <Searching_Scorecards />
                    </div>
                )
            
            }
            else if(SelectedGame == -1){
                return(
                    <div id="Scorecard">
                        <Fetch_Scorecard {... this.props}/>
                    </div>
                    )
            }
            else{
                return ( 
                    <div id="Scorecard">
                        <Scorecard_Found SelectedGame={SelectedGame} />
                    </div>
                 )
            }
      }
  }