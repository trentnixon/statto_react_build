import React from "react";
import { connect } from "react-redux";

import {Fetch_Player_Data,reset_login} from "../../actions/login";

import RegisterHeader from "../login/components/_LoginHeader";
import Register_User_Form_Shell from "./components/Register_User_Form_Shell";
import Register_MSG from "./components/Register_MSG";

// import RegisterPlayerName from "./components/RegisterPlayerName"
import Register_New_Player_Data from "./components/Register_New_Player_Data";
import Log_In_Successful from "../login/components/Logged_In_Successful";
import Reset_UI from "../login/components/reset_login";

// Testing
import Registration_Progress_Test from "./components/Registration_Progress_Test";

let Header, SubHeader, logo='', Register_UI, BackBtn='';

@connect((store) =>{
		return{
			UI: store.UI,
			REGISTRATION: store.REGISTRATION,
			Player: store.PLAYER
		}
	})
	
export default class Register_Login extends React.Component {
  	
	constructor() { super(); }
	
	shouldComponentUpdate(NewProps, NewState){ return true;}
  
 componentWillMount(){
		 
	reset_login(); 

		Header = this.props.UI.items.SiteName;
		SubHeader = this.props.UI.items.SubHeader;
		logo = this.props.UI.Statto_Logo;
		Register_UI = <Register_User_Form_Shell {...this.props}/>;
	}	
	 
  componentWillUpdate(NewProps, NewState){

 
			// Update UI
			Header = NewProps.UI.items.SiteName;
			logo = NewProps.UI.Statto_Logo
			
			console.log(NewProps.REGISTRATION.New_Registration, NewProps.Player.PLAYER_META.PLAYER_SET)
			if(NewProps.REGISTRATION.New_Registration == false){ 
					Register_UI = <Register_User_Form_Shell {...NewProps}/>
					BackBtn=<div class="row"><div class="col-md-12 m-t-10"><Reset_UI {...this.props} /></div></div>
					
			}
			else if(NewProps.REGISTRATION.New_Registration == true 
					&& NewProps.Player.PLAYER_META.PLAYER_SET == false)
				{ 	
					Register_UI =<Register_New_Player_Data {...NewProps}/> 
					BackBtn = '';
			}

			else if(NewProps.REGISTRATION.New_Registration_Games_Played > 0 
					&& NewProps.Player.PLAYER_META.PLAYER_SET == true)
					{ 
						Register_UI = <Log_In_Successful {...NewProps}/> 
						BackBtn = '';
			}
			else if(NewProps.REGISTRATION.New_Registration_Games_Played == 0 
				&& NewProps.Player.PLAYER_META.PLAYER_SET == true)
					{
						Register_UI = '0 Games assigned to this Player';
						BackBtn=<div class="row"><div class="col-md-12 m-t-10"><Reset_UI {...this.props} /></div></div>
					}
		}

  render() {
	// <Registration_Progress_Test {...this.props} />
	return (
		<div id="page-container" >
			<div class="login animated fadeInDown">
				<RegisterHeader 
					Header={Header}
					SubHeader={SubHeader}
					Logo={logo}
				/>
				<div class="login-content">
					{Register_UI}
					<Register_MSG {...this.props}/>
					{BackBtn}
				</div>
				
			</div>
			
		</div>
    );
  }
}