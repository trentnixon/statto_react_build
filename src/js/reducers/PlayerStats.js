const InitialState ={
		batting_world_ranking:null,
		bowling_world_ranking:null,
		keeping_world_ranking:null,
		career_form:null,
		form_guide:null,
		last_ten_games:null,
		raw_json:null,
		filtered_json:null,
		opposition_stats:null,
		team_played_for_stats:null,
		Register:{
			FoundGames:0,
			GamesAdded:0
			},
		Player_single_Data_Points:{},
		PLAYER_META:{
			PLAYER_SET:false,
			UpdateProfile:false,
			UpdateProfileProgress:false
		},
		GameIDs:false
	}

const Player_stat_reducer = (state=InitialState, action) =>{
		switch(action.type){
			
			// Store Players META Data
			case "SET_UI_PLAYER_NAME":{
					return {...state, PLAYER_META:{...state.PLAYER_META,UserName:action.payload}}
					break
				}
			case "SET_UI_PLAYER_WP_ID":{
					return {...state, PLAYER_META:{...state.PLAYER_META,WP_ID:action.payload}}
					break
				}
			case "SET_UI_STATTO_PLAYER_WP_ID":{
					return {...state, PLAYER_META:{...state.PLAYER_META,WP_STATTO_ID:action.payload}}
					break
				}
			case "STORE_ITERATION":{
				return {...state, PLAYER_META:{...state.PLAYER_META,update_interation:action.payload}}
					break
				}
			
			case "STORE_UPDATE_HISTORY":{
				return {...state, PLAYER_META:{...state.PLAYER_META,update_history:action.payload}}
					break
				}
				
			case "STORE_LAST_UPDATE":{
				return {...state,  PLAYER_META:{...state.PLAYER_META,Last_update:action.payload} }
					break
				}
				
			case "SET_TRUE":{
					return {...state, PLAYER_META:{...state.PLAYER_META,PLAYER_SET:action.payload} }
					break
				}
			
			case "GAME_COUNT":{
					return {...state, PLAYER_META:{...state.PLAYER_META,GAME_COUNT:action.payload} }
					break
				}
			case "STORE_PLAYER_FORCE_UPDATE_VERSION":{
					return {...state, PLAYER_META:{...state.PLAYER_META,STORE_PLAYER_FORCE_UPDATE_VERSION:action.payload} }
					break
			}
			// END Player META
			
			// PLAYERS JSON STATS
	
			case "BATTING_WR_HISTORY":{
					return {...state, batting_world_ranking:action.payload}
					break
				}	
			case "BOWLING_WR_HISTORY":{
					return {...state, bowling_world_ranking:action.payload}
					break
				}	
			case "KEEPING_WR_HISTORY":{
					return {...state, keeping_world_ranking:action.payload}
					break
				}	
				
			case "CAREER_FORM":{
					return {...state, career_form:action.payload}
					break
				}
			case "RAW_DATA":{
					return {...state, raw_json:action.payload}
					break
				}
			case "FORM_GUIDE":{
					return {...state, form_guide:action.payload}
					break
				}
			case "LAST_TEN_GAMES":{
					return {...state, last_ten_games:action.payload}
					break
				}
			case "FILTERED_DATA":{
					return {...state, filtered_json:action.payload}
					break
				}
	
			case "SET_OPPOSITION_STATS":{
					return {...state, opposition_stats:action.payload}
					break
			}	
			case "SET_TEAM_PLAYED_FOR_STATS":{
				return {...state, team_played_for_stats:action.payload}
					break
			}
			// Calculated Stats from Statto
			case "PLAYER_RUNS_SCORED":{
					return {...state, 
								Player_single_Data_Points:{...state.Player_single_Data_Points,
															TOTAL_RUNS:action.payload
														}
							}
					break
			}

			}
		return state;
	}
	
export default Player_stat_reducer;	