import React from "react";

// Components

import Register_User_Form from "./Register_User_Form";
import Register_User_Form_BTN from "./_Register_User_Form_BTN";

// Why is this a thing?
export default class Register_User_Form_Shell extends React.Component {

render(){
	return(
			<div>
                <Register_User_Form {...this.props}/>
            </div>
		)
	}			
}