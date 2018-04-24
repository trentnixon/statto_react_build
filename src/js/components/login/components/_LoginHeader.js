import React from "react";
import Logo from "./_Logo";

/* COMPLETED */
/* This component has been Signed OFF*/

export default class LoginHeader extends React.Component {
render(){
	return(
			<div class="login-header">
				<div class="col-xs-12 nopadding text-center">
						<Logo Logo={this.props.Logo}/>
				</div>
				
				<div class="col-xs-12 nopadding text-center">	
						<h4>{this.props.SubHeader}</h4>
				</div>
			</div> 
		)
	}			
}