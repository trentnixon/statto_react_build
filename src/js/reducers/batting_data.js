const InitialState ={
	Batting_Data_Complete:false,
    Batting_Data_inProgress:false,
	Batting_Order_Data:false,
	Batting_Dismissal_Data:false
	}
	
const batting = (state=InitialState, action) =>{
	switch(action.type){	
		// Fetch New_Registration Details
		
		case "BATTING_COMPLETE":{
			return {...state, Batting_Data_Complete:action.payload}
			break
		}
		case "BATTING_INPROGRESS":{
			return {...state, Batting_Data_inProgress:action.payload}
			break
        }
        
        // Data
        case "BATTING_ORDER_DATA":{
			return {...state, Batting_Order_Data:action.payload}
			break
		}
		case "BATTING_DISMISSALS":{
			return {...state, Batting_Dismissal_Data:action.payload}
			break
		}
	}
	return state;
}
export default batting;	

