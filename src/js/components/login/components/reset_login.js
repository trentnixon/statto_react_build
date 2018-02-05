import React from "react";
import {Link} from 'react-router-dom';

import {reset_login} from "../../../actions/login";
export default class Reset_Login extends React.Component {

    Reset_Login(){
        reset_login();
    }
    componentWillMount(){  }
render(){
	return(
			<div>
                <Link to="/" onClick={this.Reset_Login} class="btn btn-warning btn-icon btn-circle pull-right">{this.props.UI.icons.reset}</Link>	
            </div>
		)
	}			
}