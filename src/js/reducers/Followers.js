const InitialState ={
    Followers:false,

}

const Followers = (state=InitialState, action) =>{
		switch(action.type){	
			// Fetch New_Registration Details
			case "Local_Followers":{
				return {...state, Followers:action.payload}
				break
			}
		}
		return state;
	}
export default Followers;	