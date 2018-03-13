import React from "react";
import {Link} from 'react-router-dom';

const styles ={
    p:{
        margin:'10px 0'
    }
}
import {reset_login} from "../../../actions/login";
export default class ReseRegister_User_Btn  extends React.Component {

    Reset_Login(){   }
    componentWillMount(){ 
        // Experimental .. this might cause problems being here
        reset_login(); 
    }
render(){
	return(
			<div class="row nomargin">
                <center>
                    <p style={styles.p}>OR</p>
                    <Link to="/register" onClick={this.Reset_Login} class="btn btn-warning"> {this.props.UI.icons.addplayer} Register New Player </Link>	
                </center>
            </div>
		)
	}			
}