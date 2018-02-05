import React from "react";
import {Link} from 'react-router-dom';

import {Register_Message} from "../../../actions/registration";

import Login_WR from "./Login_WR";
import Login_Reset from "./reset_login";
import Store_Player from "./Login_Store_Player_As_Default";
let wr1,wr2,wr3;
export default class FindUser extends React.Component {
	
    componentWillMount(){ 
		Register_Message("Login Complete.")
		
	}
    
	shouldComponentUpdate(newProps, newState) { return true; }
	
	componentWillUpdate(nextProps, nextState){}
	
	render(){
		wr1= this.props.Player.batting_world_ranking["0"].ranking;
	return(
		<div>
			
				
				<div class="col-md-12 nopadding">
					<Login_Reset {... this.props}/>
					<h3>{this.props.Player.PLAYER_META.UserName} <small> ({this.props.Player.PLAYER_META.GAME_COUNT} Games) </small></h3>
				</div>
				<div class="darkWrapper">
				<div class="col-md-12  login-wr-container">
					<Login_WR 
						Title="Batting"
						Value={wr1}
						Icon={this.props.UI.icons.batting}
					/>
					<Login_WR 
						Title="Bowling"
						Value={this.props.Player.bowling_world_ranking["0"].ranking}
						Icon={this.props.UI.icons.bowling}
					/>
					<Login_WR 
						Title="Keeping"
						Value={this.props.Player.keeping_world_ranking["0"].ranking}
						Icon={this.props.UI.icons.keeping}
					/>
				</div>
			
				</div>

			<Link to={'/'+this.props.Player.PLAYER_META.WP_ID} class="login_btn btn row btn-success btn-block btn-lg">
				<div class="col-md-12">
					View Career Stats
				</div>
			</Link>
			
		

			<Store_Player {... this.props}/>
			
		</div>
	)		
}
}