// JavaScript Document
// Login and Player Data Collection Actions

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');
import { Fetch_Player_Data } from "./login";

export function Store_Player_Games(Player_Games){
    
    const request = axios.get("/statto/wp-json/wp/v2/statto_game/?slug="+Player_Games);
				request.then(({data}) =>{  
                        
                    let Store_Games=[];
                      //  console.log(data);
                        data.map((game,i)=>{
                           //  console.log(game.acf.game_raw_data)
                            Store_Games.push(JSON.parse(game.acf.game_raw_data))
                        })
            
                        // console.log(Store_Games);
                        store.dispatch({ type:"PLAYER_GAME_DATA", payload:Store_Games });
                        store.dispatch({ type:"PLAYER_GAME_DATA_STORED", payload:true });
                        
                    });	
}

/** Fetch new game data from LMS */
export function Fetch_Game(gameID, PlayerID){
    const request = axios.get("/statto/ajax/team/update/Register_Team_Game.php?GameID="+gameID );
		request.then(({data}) =>{  
            if(data){ Fetch_Player_Data(PlayerID); }
    });	
}