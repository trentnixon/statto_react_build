import React from "react";
import { connect } from "react-redux";


import Single_data_point from '../global/single_data_point';

import {FetchPlayerProfile} from '../../actions/login';

let battingAve, battingHS, battingRuns;
@connect((store) =>{
		return{
			UI: store.UI,
			Player: store.PLAYER
		}
	})
	
export default class Layout extends React.Component {
  constructor() { super();  }
  
  
  listIds(data)
  	{
		// console.log(typeof data)
		
		return data.map((game,i)=>{
			//console.log(game.GameID)
		})
	
	}
  
  
  componentWillMount(){ 
  	FetchPlayerProfile(11)
  }
  
  shouldComponentUpdate(newProps, newState) {return true; }
  componentWillUpdate(newProps, newState) {
    
		console.log(this.props.Player.form_guide);
		
		if(this.props.Player.form_guide !=null ){ 

		battingAve = <Single_data_point  heading="Batting Average" Link="dev" value={this.props.Player.form_guide.Batting_Average} />
		battingHS = <Single_data_point  heading="Highest Score" Link="dev" value={this.props.Player.form_guide.Batting_Highest_Score} />
		battingRuns = <Single_data_point  heading="Total Runs" Link="dev" value={this.props.Player.form_guide.Batting_Total_Runs} />
			

			
		}
	   	if(this.props.Player.raw_json != null){ 
		this.listIds(this.props.Player.raw_json)}
		
    }
  
  render() {
		return (
				<section id="basicInfo">
					<h1>Hello</h1>
					{battingAve}
					{battingHS}
					{battingRuns}
				</section>
		);  
  }
}