const InitialState ={
	
	New_Registration:false,
	New_Player_Name:false,
	New_Player_WP_ID:false,
	New_Player_LMS_ID:false,
	New_Registration_Games_Played:0,
	New_Registration_MSG:'Use your LMS ID to Register with STATTO'
}

const New_User = (state=InitialState, action) =>{
		switch(action.type){
			
			// Fetch New_Registration Details
			case "New_Registration_Games_Played":{
				console.log(action.payload);
				return {...state, New_Registration_Games_Played:action.payload}
				break
			}
			case "New_Registration":{
					return {...state, New_Registration:action.payload}
					break
                }
            case "New_Player_Name":{
					return {...state, New_Player_Name:action.payload}
					break
                }
            case "New_Player_WP_ID":{
					return {...state, New_Player_WP_ID:action.payload}
					break
                }
            case "New_Player_LMS_ID":{
					return {...state, New_Player_LMS_ID:action.payload}
					break
				}
			case "New_Registration_MSG":{
				console.log(action.payload)
				return {...state, New_Registration_MSG:action.payload}
				break 
			}
			}
		return state;
	}
export default New_User;	