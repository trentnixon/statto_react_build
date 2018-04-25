import React from "react";
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import Icon_Login from "../../global/icons/Login";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {orange500, blue500} from 'material-ui/styles/colors';

//import {FindPlayersStats, SetLiveStats, CreateUserUI} from "../../../actions/";
//import {StorePlayerProfile, Register_Player_Name, Register_Player_WP_ID, Reigster_Statto_Player_ID, Fetch_Player_Data} from "../../../actions/login";

// Login.js
import {Login} from "../../../actions/login";
const LG = new Login();

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
				ReturnValue = false;
			}
		return ReturnValue;
	}
		
	handleUpdateInput(){}

	HandleOnFocus(){
		document.getElementById("Login_Form").className += " Keyboard";
	}	
	
	HandleOnBlur(){
		setTimeout(function(){document.getElementById("Login_Form").classList.remove("Keyboard");}, 10)
	}
	
	handleSubmit(event) {
		
		event.preventDefault();
		var UserID = jQuery("form#PlayerID").find('#id').val();	

		var processID = this.CheckValue(UserID)	

		if(processID != false)
			{
				LG.PlayerID=processID;
				LG.PlayerName=UserID;
				LG.Start_Player();	
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
							  onFocus={() => {this.HandleOnFocus() }}
							  onBlur ={() => {this.HandleOnBlur() }}
							/>
					</MuiThemeProvider>
					</div>
					<button type="submit" class="btn btn-success btn-block btn-lg"> <Icon_Login /> Fetch Career </button>
			</form>
			
		)
	}
}