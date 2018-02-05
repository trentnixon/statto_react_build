import React from "react";
import Section_Header from "../global/Section_Header";
import {Fetch_Game} from "../../actions/games";

export default class Fetch_Scorecards extends React.Component {

    constructor() { super();  }
    
    fetchGame(gameID, PlayerID){
        Fetch_Game(gameID,PlayerID)
    }
    componentWillMount(){ 
            this.fetchGame(this.props.match.params.gameID, this.props.match.params.playerid)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div  class="darkWrapper fetch_new_scorecard">
                        <i class='material-icons tone3 pull-left'>file_download</i>
                        <Section_Header header="Downloading Scorecard" />
                        <h2 class="tone1">Statto is downloading the scorecard for <br /> Game ID : {this.props.match.params.gameID} </h2>
                        <p class="tone2">This may take a few seconds. </p>
                        <p class="tone2">Statto will update once the Game has been verified </p>
                </div>
             ); 
      }
  }