import React from "react";
import Logo from "./_Logo";

/* COMPLETED */
/* This component has been Signed OFF*/

export default class LoginHeader extends React.Component {
render(){
	return(
			<div class="login-header">
				<div class="col-xs-5 nopadding text-right">
						<Logo Logo={this.props.Logo}/>
				</div>
				<div class="col-xs-7 nopadding text-left">
						<h1>{this.props.Header}</h1>
				</div>
				<div class="col-xs-12 nopadding text-center">	
					<h2>{this.props.SubHeader}</h2>
				</div>
			</div>
		)
	}			
}