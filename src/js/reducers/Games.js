const InitialState ={
    Scorecard_Progression:false,
    Cron_in_Progress:false,
    ActiveGame:false,
    GameIDs:false,
    Game_Data:false,
    Game_Data_Stored:false,
}

const Games = (state=InitialState, action) =>{
		switch(action.type){	
			// Fetch New_Registration Details
			case "PLAYER_GAME_IDS":{
				return {...state, GameIDs:action.payload}
				break
            }
            case "PLAYER_GAME_DATA":{
                return {...state, Game_Data:action.payload}
				break
            }
            case "PLAYER_GAME_DATA_STORED":{
                return {...state, Game_Data_Stored:action.payload}
				break
            }
            case "SCORECARD_PROGRESSION":{
                return {...state, Scorecard_Progression:action.payload}
				break
            }
            case "STORE_ACTIVE_GAME":{
                return {...state, ActiveGame:action.payload}
				break
            } 
            case "GAME_CRON":{
                return {...state, Cron_in_Progress:action.payload}
				break
            }     
                   
		}
		return state;
	}
export default Games;	