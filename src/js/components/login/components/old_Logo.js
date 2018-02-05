import React from "react";

export default class Statto_Logo extends React.Component {
render(){
	return(
			<span class="logo">
				<img style={{width: 50}} src={this.props.Logo} />
			</span> 
		)
	}			
}