const InitialState ={
	News_From_API:false,
	News_Stored:false,
	}
	
const Games = (state=InitialState, action) =>{
	switch(action.type){	
		// Fetch New_Registration Details
		
		case "News_From_API":{
			return {...state, News_From_API:action.payload}
			break
		}
		case "Store_News":{
			return {...state, News_Stored:action.payload}
			break
		}
		
	}
	return state;
}
export default Games;	

