import React from "react";
import {Link} from 'react-router-dom';

import {reset_login} from "../../../actions/login";
export default class ReseRegister_User_Btn  extends React.Component {

    Reset_Login(){   }
    componentWillMount(){ 
        // Experimental .. this might cause problems being here
        reset_login(); 
    }
render(){
	return(
			<div class="row">
                <center>
                    <p class="m-t-10">OR</p>
                    <Link to="/register" onClick={this.Reset_Login} class="btn btn-warning"> {this.props.UI.icons.addplayer} Register New Player </Link>	
                </center>
            </div>
		)
	}			
}