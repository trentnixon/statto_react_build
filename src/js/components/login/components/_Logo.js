import React from "react";

/* COMPLETED */
/* This component has been Signed OFF*/
const styles={
	logo:{
		width:'60%',
		margin:'10px -2% 10px 0 '
	}
}
export default class Statto_Logo extends React.Component {
render(){
	return(
			<span  class="logo">
				<img style={styles.logo} src={this.props.Logo} />
			</span> 
		)
	}			
}