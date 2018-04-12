import React from "react";
import { connect } from "react-redux";
import { matchPath } from 'react-router'
var _ = require('lodash');


import Section_Header from "../global/Section_Header";
import Scorecard_Found from "./scorecards_Found";
import Searching_Scorecards from "./scorecards_Seaching";
import Fetch_Scorecard from "./scorecards_Fetch_New";

import {Scorecards} from '../../actions/games';
const Scorecard = new Scorecards();
 
let url;
@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER,
        GAMES: store.GAMES,
    }
})
export default class Display_Scorecard extends React.Component {

    constructor(props) {super(props); }

    

    FetchGameStart(){
        
        const match = matchPath(this.props.location.pathname, {
            path: '/:playerid/scorecard/:gameID',
            exact: true,
            strict: false
          })
        
        if(this.props.GAMES.Game_Data.length > 0){
            Scorecard.StoredGames = this.props.GAMES.Game_Data;
            Scorecard.SearchID = match.params.gameID;
            Scorecard.FindGame();
        }
    }

    componentWillMount(){     
      // console.log("componentWillMount", this.props)
       
        this.FetchGameStart() 
    }
    componentWillUpdate(nextProps, nextState){
     //  console.log("componentWillUpdate",nextProps, nextProps.GAMES.Scorecard_Progression)
        if(nextProps.GAMES.Scorecard_Progression == false){
            this.FetchGameStart()
        }
    } 
    
    render() {
       
           if(this.props.GAMES.Scorecard_Progression == false){  
                return(     
                    <div id="Scorecard">
                        <Searching_Scorecards />
                    </div>
                )
            }
            else if(this.props.GAMES.Scorecard_Progression == 'searching'){
                return(
                    <div id="Scorecard">
                        <Fetch_Scorecard {... this.props}/>
                    </div>
                    )
            }
            else if(this.props.GAMES.Scorecard_Progression == true){
                return ( 
                    <div id="Scorecard">
                        <Scorecard_Found SelectedGame={this.props.GAMES.ActiveGame} {... this.props}/>
                    </div>
                 )
            }
      }
  }