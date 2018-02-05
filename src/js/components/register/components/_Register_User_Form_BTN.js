import React from "react";

export default class Register_User_Form_BTN extends React.Component {
   
	shouldComponentUpdate(newProps, newState) { return true; }

    componentWillUpdate(nextProps, nextState){  } 

    componentWillMount(){  }  

render(){
	return(
            <button type="submit" id="FindPlayer" class="btn btn-success btn-block btn-lg">Register Player</button>
		)
	}			
}