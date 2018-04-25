import React from "react";
import {Link} from 'react-router-dom';
import Icon_AddPlayer from "../../global/icons/AddPlayer";
const styles ={
    p:{
        margin:'10px 0'
    }
}
// import {reset_login} from "../../../actions/login";
import {Login} from "../../../actions/login";
const LG = new Login();

export default class ReseRegister_User_Btn  extends React.Component {

    Reset_Login(){   }
    componentWillMount(){ 
        // Experimental .. this might cause problems being here
        LG.Reset_Player_UI();
    }
render(){
	return(
			<div class="row nomargin">
                <center>
                    <p style={styles.p}>OR</p>
                    <Link to="/register" onClick={this.Reset_Login} class="btn btn-warning"> <Icon_AddPlayer /> Register New Player </Link>	
                </center>
            </div>
		)
	}			
}