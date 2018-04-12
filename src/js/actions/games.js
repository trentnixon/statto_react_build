// JavaScript Document
// Login and Player Data Collection Actions

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');
import { Fetch_Player_Data } from "./login";

/**
 * Purpose of this Function
 * Fetch Game Data
 * If present store in reducer
 * If not Fetch New Game from LMS
 * Store in WP and Store in reducer
 * CHange UI State
 * 
 */

/** New OOP Approach */
export function Scorecards(){

/** Set Properties */
    // Stored ID Array of all Games Listed
    let ArrayOfGameIds;
    // ID of Game to be Showen
    let SearchID;
    let StoredGames;


/** Set Methods */

    // Find all GAmes from the API
    // This function is triggered on App Load
    this.Find_All_Games_In_API = function(){

        //console.log("Find_All_Games_In_API Runnings")
        const request = axios.get("/statto/wp-json/wp/v2/statto_game/?slug="+this.ArrayOfGameIds);
        request.then(({data}) =>{  
             
            let Store_Games=[];
            data.map((game,i)=>{ Store_Games.push(JSON.parse(game.acf.game_raw_data))})

            //** Dispatch
            this.UI("PLAYER_GAME_DATA", Store_Games);
            this.UI("PLAYER_GAME_DATA_STORED", true);
        });	
    }

    this.FindGame = function(){
        
        //** Dispatch
        this.UI("SCORECARD_PROGRESSION", false);
        
        let findKey = _.findKey(this.StoredGames, { 'GameID': this.SearchID});
        // If !Key then fetch new game for DB
       // console.log("findKey = ",findKey, this.StoredGames, this.SearchID)
        if(findKey === undefined){  this.Fetch() }
        else{ this.SelectActive(this.StoredGames[findKey]); }
    }

    this.Fetch = function(){
        
        //** Dispatch
        this.UI("SCORECARD_PROGRESSION", 'searching');
        
        const request = axios.get('/statto/ajax/team/update/Register_Team_Game.php?GameID='+this.SearchID);
		request.then(({data}) =>{  
            if(data){ 
               // Send Active game to Active Function
                this.SelectActive(data);
                this.StoreNew(data);
            }
        });	
    }

    this.StoreNew = function(data){
        // Store new Game in the Reducer Array
        let findKey = _.findKey(this.StoredGames, { 'GameID': data.GameID});
        if(findKey === undefined){ 
            this.StoredGames.push(data)
            //** Dispatch
            this.UI("PLAYER_GAME_DATA", this.StoredGames);
        }
    }
    this.SelectActive = function(ActivateThis){
        
        //** Dispatch
        this.UI("STORE_ACTIVE_GAME", ActivateThis);
        this.UI("SCORECARD_PROGRESSION", true);
    }

    this.UI = function(TYPE, state){
        store.dispatch({ type:TYPE, payload:state });
    }
}