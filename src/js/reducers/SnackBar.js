const InitialState ={
    Snack_State:false,
    Snack_Message:false,
}

const SnackBar = (state=InitialState, action) =>{
		switch(action.type){	
			// Fetch New_Registration Details
			case "Snack_State":{
				return {...state, Snack_State:action.payload}
				break
			}
			case "Snack_Message":{
				return {...state, Snack_Message:action.payload}
				break
            }
		}
		return state;
	}
export default SnackBar;	