const InitialState ={
    Team_Progression:false,
    Team_Data_Stored:false,
    Team_Raw:false,
    Team_Game_Data_Raw:false,
    Team_Roster:false,
    Team_Network_Training:false,
    Team_Network_Run:[],
    
}

const Teams = (state=InitialState, action) =>{
		switch(action.type){	
			// Fetch New_Registration Details
			case "Team_In_Progress":{
				return {...state, Team_Progression:action.payload}
				break
            }
            case "TEAM_STORED":{
				return {...state, Team_Data_Stored:action.payload}
				break
            }
            case "Team_Raw":{
				return {...state, Team_Raw:action.payload}
				break
            }
            case "TEAM_GAMES":{
				return {...state, Team_Game_Data_Raw:action.payload}
				break
            } 
            case "TEAM_ROSTER":{
				return {...state, Team_Roster:action.payload}
				break
            } 
            case "TEAM_NETWORK_TRAINING":{
				return {...state, Team_Network_Training:action.payload}
				break
            } 
            case "TEAM_NETWORK_RUN":{
				return {...state, Team_Network_Run:action.payload}
				break
            }    
                 
		}
		return state;
	}
export default Teams;	