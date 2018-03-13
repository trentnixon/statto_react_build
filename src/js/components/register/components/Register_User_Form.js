import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {orange500, blue500} from 'material-ui/styles/colors';

// Login.js
import {Register_Player_Name,reset_login} from "../../../actions/login"
// Register.js
import {Fetch_New_Player, Register_New_Player_Name,New_Player_WP_ID,New_Player_LMS_ID,New_Registration,Register_Message} from "../../../actions/registration"



const dataSourceConfig = {
  text: 'username',
  value: 'LMSID',
};
const MSG = ({ name }) => <div>{name}</div>
const styles = {
  errorStyle: {
    color: orange500,
  },
	underlineStyle: {
    borderColor: '#73b393',
  },
  MainColor:{
		color:'#383838',
		fontWeight:'100'
 },
  floatingLabelStyle: {
    color: '#73b393',
  },
  floatingLabelFocusStyle: {
    color: '#73b393',
  },
};
var dataSource3 = [],  process=false, msg='';
let PlayerName;

export default class Register_User_Form extends React.Component {
	
	componentWillMount(){ msg = this.props.REGISTRATION.New_Registration_MSG; }
	shouldComponentUpdate(newProps, newState) { return true; }

	componentWillUpdate(nextProps, nextState){
		if(nextProps.UI.LMS_REGISTERED.length > 0){
			let merged = Object.assign(...nextProps.UI.LMS_REGISTERED);
			dataSource3 = merged;
		}
		}
		
	CheckValue(value){
		
		var ReturnValue = false;
		if(isNaN(parseInt(value))){
				let FindInmerged = Object.assign(...this.props.UI.LMS_REGISTERED);
				FindInmerged.map((user,i)=>{
					if(user.username == value)
						{
							ReturnValue = user.LMSID;
					}					
				})
			}
		else{
				ReturnValue = value;
			}
		return ReturnValue;
	}
		
	handleSubmit(event) {

		event.preventDefault();
		
		var UserID = jQuery("form#PlayerID").find('#id').val();
		
		jQuery("#FindPlayer").prop("disabled", true);	
		
		var processID = this.CheckValue(UserID)	

		if(processID != false)
			{
				Fetch_New_Player(processID)
				Register_Message("Fetching Player Name")

			}
		else if(processID == false)
			{
				// Need to sort this out
					const options = {
							onOpen: props => console.log(props.foo),
							onClose: props => console.log(props.foo),
							autoClose: 6000
						}; 
						jQuery("#FindPlayer").prop("disabled", false);	
					 toast(<MSG name="Player Name not found. To Register new Player use the LMS Player ID found at the LMS Website" />,options);
		}
	}
	
	render(){
			return(
			<form class="margin-bottom-0" id="PlayerID" onSubmit={this.handleSubmit.bind(this)}>
					<div class="form-group m-b-20">
					<MuiThemeProvider>
						<AutoComplete
							  dataSource={dataSource3}
							  dataSourceConfig={dataSourceConfig}
							  filter={AutoComplete.caseInsensitiveFilter}
							  onUpdateInput={this.handleUpdateInput}
							  floatingLabelText="LMS Player ID"
							  fullWidth={true}
							  id="id"
							  name="id"
							  underlineStyle={styles.underlineStyle}
							  floatingLabelFocusStyle={styles.MainColor}
							  floatingLabelShrinkStyle={styles.MainColor}
							  floatingLabelStyle={styles.MainColor}
							  inputStyle={styles.MainColor}
							/>
					</MuiThemeProvider>
					</div>
					<button type="submit" id="FindPlayer" class="btn btn-success btn-block btn-lg">{this.props.UI.icons.addplayer} Register Player</button>
			</form>
			
		)
	}
}