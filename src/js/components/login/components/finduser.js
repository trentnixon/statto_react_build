import React from "react";

/* Components  */
import LoginForm from "./LoginForm";
import Register_User_Btn from "./Register_new_user_btn";
import Log_In_Successful from "./Logged_In_Successful";

/* Class  */
export default class FindUser extends React.Component {

	render(){

	if(this.props.Player.PLAYER_META.PLAYER_SET == false){
			return(
				<div>
						<LoginForm {...this.props}/> 
						<Register_User_Btn {...this.props} />
				</div>
			)	
		}
	else
		{	
			return( <Log_In_Successful {...this.props} />)	
		}
	}
}