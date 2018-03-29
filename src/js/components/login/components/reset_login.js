import React from "react";
import {Link} from 'react-router-dom';
import Icon_Reset from "../../global/icons/Reset";
import {reset_login} from "../../../actions/login";
export default class Reset_Login extends React.Component {

    Reset_Login(){
        reset_login();
    }
    componentWillMount(){  }
render(){
	return(
		    <Link to="/" onClick={this.Reset_Login} class="btn btn-warning btn-icon btn-circle pull-right"><Icon_Reset /></Link>
		)
	}			
}