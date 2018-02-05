import React from "react";
import { connect } from "react-redux";

let msg;

@connect((store) =>{
    return{
        REGISTRATION: store.REGISTRATION,
    }
})
export default class Register_MSG extends React.Component {
   
	shouldComponentUpdate(newProps, newState) { return true; }

    componentWillUpdate(nextProps, nextState){ 
        console.log(nextProps.REGISTRATION.New_Registration_MSG)
        msg = nextProps.REGISTRATION.New_Registration_MSG;
    } 
 
    componentWillMount(){ 
        msg = this.props.REGISTRATION.New_Registration_MSG;
     }  

render(){
	return(
			<div>
                <p class="m-t-20">{msg}</p> 
            </div>
		)
	}			
}