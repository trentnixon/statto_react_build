// JavaScript Document

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');
// Bread Crumbs
export function breadcrumbs(location, path){
	//breadcrumbs('bowling','parent');

	if(path =='parent')
	{
		store.dispatch({ type:"STORE_UI_BREADCRUMBS_PARENT", payload:location })
	}
	else if(path == 'child')
	{ store.dispatch({ type:"STORE_UI_BREADCRUMBS_CHILD", payload:location }) }
}

// Get runs vs balls
export function runsvsballs(data){
	let returnThis=[], year=data[0].Year, runs=0, balls=0;
	// console.log(data, data.length);

	data.map((game,i)=>{
		//console.log(year, game.Year);
		
		if(year !=game.Year){ 
			
			returnThis.push({ year: year.toString(), Runs:runs, Balls: balls  })
			runs=0, balls=0; 
			year=game.Year;
		}

		if(
			isNaN(parseInt(game.Batting_Runscored)) == false &&
			year == game.Year
			){
				runs = parseInt(runs) + parseInt(game.Batting_Runscored);
				balls = parseInt(balls) + parseInt(game.Batting_BallsFaced);
			}

		if(i == (data.length-1)) { returnThis.push({ year: year.toString(), Runs:runs, Balls: balls  }) }
	})
	return returnThis;
}