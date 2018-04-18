const InitialState ={
    Form_Analysis:false,
    Form_Breakdown:false,
}

const Form_Guide = (state=InitialState, action) =>{
		switch(action.type){	
			// Fetch New_Registration Details
			case "Form_Analysis":{
				return {...state, Form_Analysis:action.payload}
				break
			}
			case "Form_Breakdown":{
				return {...state, Form_Breakdown:action.payload}
				break
            }
		}
		return state;
	}
export default Form_Guide;	