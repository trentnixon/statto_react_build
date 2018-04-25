// JavaScript Document
// Login and Player Data Collection Actions

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');

import{Register_New_Player_Name,New_Player_WP_ID,New_Player_LMS_ID,New_Registration,New_Registration_Games_Played} from "./registration";
import { single_data_points,calculate_team_stats,AES } from "./create_ui_data";
import {Create_Year_Filter_Array, Create_Team_Filter_Array,Create_Opposition_Filter_Array} from "./filters";

// Store Games from OOP Call
import {Store_Player_Games,Scorecards} from "./games";


/**
 * New OOP Version of Login.js
 */

 export function Login(){
	/* properties */
	this.PlayerID = false;
	this.PlayerName=false;
	this.WordpressID = false;
	this.acf = false

	/** Methods */
	this.Start_Player = ()=>{
		// We need the WP Post ID from the Player before we can begin	
		const request = axios.get("ajax/player/login/FetchPlayerDetails.php?UserID="+this.PlayerID);
		request.then(({data}) =>{ 
				// Store the ID
				this.WordpressID = data["0"].ID;
				// Start Player Download
				this.Fetch_Player_Career();
				
			});
	}

	this.Fetch_Player_Career = ()=>{
		
		const request = axios.get("/statto/wp-json/wp/v2/statto_player/"+this.WordpressID);
		request.then(({data}) =>{ 
			
			this.acf = data.acf;
			// Store Player Profiles
			this.Store_Career_to_reducer();

			// Process Data 
			this.Process_Carrer();
			

			// Fetch and Store Player Game Data
			const  CreateScoreCard = new Scorecards();
			CreateScoreCard.ArrayOfGameIds = this.acf.game_ids;
			CreateScoreCard.Find_All_Games_In_API();
			// Set UI Update to False
			this.Set_Update_State(false);
		});	
	}


		this.Store_Career_to_reducer = ()=>{

			// Settings
			this.Store('STORE_ITERATION',this.acf.update_interation);
			this.Store('STORE_UPDATE_HISTORY',this.acf.update_history);
			this.Store('STORE_LAST_UPDATE',this.acf.update);
			this.Store('STORE_PLAYER_FORCE_UPDATE_VERSION',this.acf.force_update_version);

			// WRings
			this.Store('BATTING_WR_HISTORY',JSON.parse(this.acf.batting_word_ranking_history));
			this.Store('BOWLING_WR_HISTORY',JSON.parse(this.acf.bowling_word_ranking_history));
			this.Store('KEEPING_WR_HISTORY',JSON.parse(this.acf.keeping_word_ranking_history));
			
			// Career
			this.Store('CAREER_FORM',JSON.parse(this.acf.career_form));
			this.Store('RAW_DATA',JSON.parse(this.acf.raw_json));
			this.Store('FILTERED_DATA',JSON.parse(this.acf.raw_json));
			this.Store('FORM_GUIDE',JSON.parse(this.acf.form_guide));
			this.Store('LAST_TEN_GAMES',JSON.parse(this.acf.last_ten_games));
			this.Store('PLAYER_GAME_IDS',JSON.parse(this.acf.game_ids));

			// Store Meta
			this.Store('GAME_COUNT',JSON.parse(this.acf.raw_json).length);
			if(this.PlayerName != false){ this.Store('SET_UI_PLAYER_NAME',this.PlayerName); }
			if(this.WordpressID != false){ this.Store('SET_UI_STATTO_PLAYER_WP_ID',this.WordpressID);}
			if(this.PlayerID != false){this.Store('SET_UI_PLAYER_WP_ID',this.PlayerID ); }
			
	}



		this.Process_Carrer = ()=>{
			// Create OOP for these functions

				// send data to be cleaned
				single_data_points(this.acf.raw_json);
										
				// Create UI Filter Arrays
				Create_Year_Filter_Array(JSON.parse(this.acf.raw_json));
				Create_Team_Filter_Array(JSON.parse(this.acf.raw_json));
				Create_Opposition_Filter_Array(JSON.parse(this.acf.raw_json));

				// Create React Based Data Arrays
				calculate_team_stats(JSON.parse(this.acf.raw_json));
				AES(JSON.parse(this.acf.raw_json),JSON.parse(this.acf.career_form));

				// would love a call back before this i fired
				this.Set_True();
		}

		this.Reset_Player_UI =()=>{
				//console.log("Reset UI");

				this.Store('SET_TRUE',false);
				this.Store('SET_STATTO_UPDATE',false);
				this.Store('SET_STATTO_UPDATE_IN_PROGRESS',false);
				this.Store('SET_UI_STATTO_PLAYER_WP_ID',false);
				this.Store('SET_UI_PLAYER_WP_ID',false);
				this.Store('SET_UI_PLAYER_NAME',false);
				this.Store('New_Player_Name',false);
				this.Store('New_Player_WP_ID',false);
				this.Store('New_Player_LMS_ID',false);
				this.Store('New_Registration',false);
				this.Store('New_Registration_Games_Played',false);
		}

		this.Set_True = ()=>{
			// SET_TRUE
			this.Store('SET_TRUE',true);
			this.Store('SET_UI_PLAYER_FETCHED',true);
		}
		this.Set_Update_State = (state)=>{
			this.Store('SET_STATTO_UPDATE',state);			
		}
		this.Store = (type,payload) => {
			store.dispatch({ type:type, payload:payload })
		}

 }



/**** OLD FUNCTIONs */
// Fetch all Players Registered With Statto

/*
// Fetch Selected Players Details
export function StorePlayerProfile(acf)
		{
						// console.log(acf);

						// Settings
						store.dispatch({ type:"STORE_ITERATION", payload:acf.update_interation });
						store.dispatch({ type:"STORE_UPDATE_HISTORY", payload:acf.update_history });
						store.dispatch({ type:"STORE_LAST_UPDATE", payload:acf.update });
						store.dispatch({ type:"STORE_PLAYER_FORCE_UPDATE_VERSION", payload:acf.force_update_version });
						
						// Arrays
						store.dispatch({ type:"BATTING_WR_HISTORY", payload:JSON.parse(acf.batting_word_ranking_history) });
						store.dispatch({ type:"BOWLING_WR_HISTORY", payload:JSON.parse(acf.bowling_word_ranking_history) });
						store.dispatch({ type:"KEEPING_WR_HISTORY", payload:JSON.parse(acf.keeping_word_ranking_history) });
						
						// Career
						
						store.dispatch({ type:"CAREER_FORM", payload:JSON.parse(acf.career_form) });
						store.dispatch({ type:"RAW_DATA", payload:JSON.parse(acf.raw_json) });
						store.dispatch({ type:"FILTERED_DATA", payload:JSON.parse(acf.raw_json) });
						store.dispatch({ type:"FORM_GUIDE", payload:JSON.parse(acf.form_guide)  });
						store.dispatch({ type:"LAST_TEN_GAMES", payload:JSON.parse(acf.last_ten_games) });
						store.dispatch({ type:"PLAYER_GAME_IDS", payload:JSON.parse(acf.game_ids) });

						// send data to be cleaned
						single_data_points(acf.raw_json);
						
						// Create UI Filter Arrays
						Create_Year_Filter_Array(JSON.parse(acf.raw_json));
						Create_Team_Filter_Array(JSON.parse(acf.raw_json));
						Create_Opposition_Filter_Array(JSON.parse(acf.raw_json));
						// Create React Based Data Arrays
						calculate_team_stats(JSON.parse(acf.raw_json));
						AES(JSON.parse(acf.raw_json),JSON.parse(acf.career_form));



						// Move these to another function to be called after data rendered
						// SET_TRUE
						store.dispatch({ type:"SET_TRUE", payload:true });
						store.dispatch({ type:"SET_UI_PLAYER_FETCHED", payload:true });
						//store.dispatch({ type:"SET_STATTO_UPDATE", payload:false });
						//Set_State_To_Update(false);
						//Update_In_Progress(false);

						//Meta
						store.dispatch({ type:"GAME_COUNT", payload:JSON.parse(acf.raw_json).length });
							
	}

	*/

/* PLAYER LOGIN FUNCTION 
export function Fetch_Player_Data(processID){
	//console.log('processID', processID)
	// Register WP ID
	Register_Player_WP_ID(processID)
	const request = axios.get("ajax/player/login/FetchPlayerDetails.php?UserID="+processID);
	request.then(({data}) =>{ 
		
			// Register STATTO PLAYER ID
		//	console.log(data["0"].ID)
			Reigster_Statto_Player_ID(data["0"].ID)
			
			const request = axios.get("/statto/wp-json/wp/v2/statto_player/"+data["0"].ID);
				request.then(({data}) =>{  
						
						// Store Player Profiles
						StorePlayerProfile(data.acf);

						// Fetch and Store Player Game Data
						 const  CreateScoreCard = new Scorecards();
						 CreateScoreCard.ArrayOfGameIds = data.acf.game_ids;
						 CreateScoreCard.Find_All_Games_In_API();
						// Set UI Update to False
						Set_State_To_Update(false);
						

				});		
			
	});
}

*/

/* PLAYER NAME AND PLAYER ID 
export function Register_Player_Name(Name)
	{		
		store.dispatch({ type:"SET_UI_PLAYER_NAME", payload:Name });
	}

export function Register_Player_WP_ID(ID)
	{	
		store.dispatch({ type:"SET_UI_PLAYER_WP_ID", payload:ID });
	}

export function Reigster_Statto_Player_ID(ID)
	{
		store.dispatch({ type:"SET_UI_STATTO_PLAYER_WP_ID", payload:ID });
		
	}

*/
/** Update Logged Player 
export function Set_State_To_Update(value){
	store.dispatch({ type:"SET_STATTO_UPDATE", payload:value });
}
export function Update_In_Progress(value){
	 // store.dispatch({ type:"SET_STATTO_UPDATE_IN_PROGRESS", payload:value });
	}

export function Store_This_Player(value){
	store.dispatch({ type:"Store_This_Player", payload:value});
}
*/

/* RESET Login Components 

export function reset_login(){
			//	console.log("Reset UI")
			store.dispatch({ type:"SET_TRUE", payload:false });
			store.dispatch({ type:"SET_STATTO_UPDATE", payload:false });
			//store.dispatch({ type:"SET_STATTO_UPDATE_IN_PROGRESS", payload:false });
			store.dispatch({ type:"SET_UI_STATTO_PLAYER_WP_ID", payload:false });
			store.dispatch({ type:"SET_UI_PLAYER_WP_ID", payload:false });
			store.dispatch({ type:"SET_UI_PLAYER_NAME", payload:false });
			Register_New_Player_Name(false);
			New_Player_WP_ID(false);
			New_Player_LMS_ID(false);
			New_Registration(false);
			New_Registration_Games_Played(false); 
}
 */