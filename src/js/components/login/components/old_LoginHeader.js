import React from "react";
import Logo from "./Logo";

/* COMPLETED */
/* This component has been Signed OFF*/

export default class LoginHeader extends React.Component {
render(){
	return(
			<div class="login-header">
					<div class="brand">
						<Logo /> 
						<h1>{this.props.Header}</h1>
						<h1>{this.props.SubHeader}</h1>
					</div>
					<div class="icon">
						{this.props.UI.icons.login}
					</div>
				</div>
		)
	}			
}