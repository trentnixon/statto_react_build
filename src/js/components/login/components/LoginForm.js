import React from "react";
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import Icon_Login from "../../global/icons/Login";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {orange500, blue500} from 'material-ui/styles/colors';

import {FindPlayersStats, SetLiveStats, CreateUserUI} from "../../../actions/";
// Login.js
import {StorePlayerProfile, Register_Player_Name, Register_Player_WP_ID, Reigster_Statto_Player_ID, Fetch_Player_Data} from "../../../actions/login";



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


export default class LoginForm extends React.Component {
	
	componentWillMount(){ }
	shouldComponentUpdate(newProps, newState) { return true; }

	componentWillUpdate(nextProps, nextState){
			//console.log(nextProps.UI.LMS_REGISTERED);
			if(nextProps.UI.LMS_REGISTERED.length > 0){
				let merged = Object.assign(...nextProps.UI.LMS_REGISTERED);
				dataSource3 = merged
			}
		}
		
	CheckValue(value){
		
		var ReturnValue = false;
		if(isNaN(parseInt(value))){
				//console.log("This is TEXT")
				let FindInmerged = Object.assign(...this.props.UI.LMS_REGISTERED);
				FindInmerged.map((user,i)=>{
					if(user.username == value)
						{
								ReturnValue = user.LMSID;
					}					
				})
			}
		else{
					//console.log("This is a Number")
					ReturnValue = false;
			}
		return ReturnValue;
	}
		
		
	handleSubmit(event) {
		
		event.preventDefault();
		var UserID = jQuery("form#PlayerID").find('#id').val();	

		// Store Player Name
		Register_Player_Name(UserID)
		
		var processID = this.CheckValue(UserID)	

		if(processID != false)
			{
				
				/* Replace this with a action function */
				Fetch_Player_Data(processID);
	
			}
		else if(processID == false)
			{
					const options = {
							onOpen: props => console.log(props.foo),
							onClose: props => console.log(props.foo),
							autoClose: 6000
						};
					 toast(<MSG name="Player Name not found. To Register new Player use the LMS Player ID found at the LMS Website and the 'Register New Player' Button." />,options);
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
							  floatingLabelText="Find a Player"
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
					<button type="submit" class="btn btn-success btn-block btn-lg"> <Icon_Login /> Fetch Career </button>
			</form>
			
		)
	}
}