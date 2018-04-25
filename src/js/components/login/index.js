import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';

import FindUser from "./components/finduser";
import LoginHeader from "./components/_LoginHeader";

import {Fetch_New_Player_Data} from "../../actions/registration"
import {Update_In_Progress} from "../../actions/login"


const load = require("little-loader");
load("/lms/wp-content/themes/twentyseventeen-child/assets/plugins/pace/pace.min.js", function (err) { });

let Header, SubHeader, logo='',UpdateNotification, Store_Player, Store_Player_ID;
@connect((store) =>{
		return{
			UI: store.UI,
			Player: store.PLAYER
		}
	})
export default class Login extends React.Component {
  constructor() { super();  }
 
  shouldComponentUpdate(NewProps, NewState){ return true;}
  
 componentWillMount(){

		Store_Player = reactLocalStorage.get('Store_Player', true);
		Store_Player_ID = reactLocalStorage.get('Store_ID', true);

		if(Store_Player == 'true'){ this.props.history.push('/'+Store_Player_ID);}
		Header = this.props.UI.items.SiteName;
		SubHeader = this.props.UI.items.SubHeader;
	}	
	
  componentWillUpdate(NewProps, NewState){
	  		//console.log(NewProps.UI)
			Header = NewProps.UI.items.SiteName;
			logo = NewProps.UI.Statto_Logo_Full_White
			
			if(NewProps.UI.updateStatto == true && 
				NewProps.UI.UPDATE_IN_PROGRESS == false)
				{
					Update_In_Progress(true);
					Fetch_New_Player_Data(NewProps.Player.PLAYER_META.WP_ID);
				}	
		}

  render() {
	return (
		<div id="page-container">
			<div id="Login_Form" class="login animated fadeInDown">
				<LoginHeader Header={Header} SubHeader={SubHeader} Logo={logo}/>  
				<div class="login-content">
				  	<FindUser {...this.props} /> 
				</div>
			</div>
		</div> 
    );
  }
}