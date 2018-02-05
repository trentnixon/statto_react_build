import React from "react";

// Components

import Register_User_Form from "./Register_User_Form";
import Register_User_Form_BTN from "./_Register_User_Form_BTN";


export default class Register_User_Form_Shell extends React.Component {
   
    shouldComponentUpdate(newProps, newState) { return true; }
    
    componentWillUpdate(nextProps, nextState){ 
        console.log(nextProps.REGISTRATION.New_Registration_MSG)
    }
    
    componentWillMount(){ }  

render(){
	return(
			<div>
                <Register_User_Form {...this.props}/>
            </div>
		)
	}			
}