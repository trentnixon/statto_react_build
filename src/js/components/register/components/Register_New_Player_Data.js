import React from "react";
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';
import {New_Registration_Games_Played, Fetch_New_Player_Data,Register_Message} from "../../../actions/registration"


let GamesFound=0,LoggedIn;
export default class Register_New_Player_Data extends React.Component {
    
componentWillMount(){ 
        Fetch_New_Player_Data(this.props.REGISTRATION.New_Player_LMS_ID); 
        Register_Message('This process may take a while, but only needs to be done once. Please do not close this browser window')
    }	

render(){
	return(
			<div class="m-t-20"> 
				<h3><i class="fa fa-user-plus" aria-hidden="true"></i> {this.props.REGISTRATION.New_Player_Name}</h3>
                <p class="reg-notification">Collecting Data for {this.props.REGISTRATION.New_Player_Name} from the LMS website.</p>
                <MuiThemeProvider>
                    <LinearProgress mode="indeterminate" />
                </MuiThemeProvider>
            </div>
		)
	}
}