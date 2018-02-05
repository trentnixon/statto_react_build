import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');

function SortByDate(SortObject)
	{
		var NewArray = SortObject.sort(function(a, b) {
    		return new Date(b.UnixDate) - new Date(a.UnixDate);
		});
			return NewArray;
		}

function fixInt2(value)
	{
		value = value.toFixed(2)
		value = parseFloat(value);
		return value;
		}

function foo(arr) {
		var a = [], b = [], prev;
		arr.sort();
		for ( var i = 0; i < arr.length; i++ ) {
			if ( arr[i] !== prev ) {
				a.push(arr[i]);
				b.push(1);
			} else {
				b[b.length-1]++;
			}
			prev = arr[i];
		}
		return [a, b];
    }
    

 function parseToInt(value)
    {
        parseInt(value,10)
        if(isNaN(value)){value = 0;}
        
        return parseInt(value);
    }   


// dont thing this is used anymore	
export  function single_data_points(data){ let TotalRunsScored = 100;  };

function collect_Team_Names(data, filter){
    let teamArray=[], TeamLists;

    data.map((games,i)=>{
	
		if(typeof  games[filter] === 'undefined'){ teamArray.push('Team Missing'); console.log(games[filter])}
		else{ teamArray.push(games[filter]); }
        
    })
	// console.log(teamArray);
    return foo(teamArray);
}



function calc_Stats(team,data,filter){
	let ReturnThis=[], StoreGames=[]
	let Runs=0, Balls=0, Avg=0, NO=0,Score=0,inn=0,SR=0;
	let bowling_inn=0,GameFigures=0, WicketsTaken=0,RunsConceded=0, Bowling_Average=0, EconomyRate=0,BowlingstrikeRate=0, OversBowled=0;

	data.map((game,i)=>{
		// Is the game oppo matched?
		if(game[filter] == team){
		  // Did you bat?
		  if(parseInt(game.Batting_BallsFaced) > 0)
			{
				// Were you not out?
				if(game.Batting_Runscored.indexOf("*") != -1){NO = NO + 1;}
				// If score is NaN make it 0 else make Score 
				if(isNaN(parseInt(game.Batting_Runscored))){Score = 0;}
				else{Score = parseInt(game.Batting_Runscored)}

				// Add Score to Total
				Runs = parseInt(Runs) + parseInt(Score);
				// Add # Balls Faced
				Balls = parseInt(Balls) + parseInt(game.Batting_BallsFaced);
				inn++;
				// Add this game to the Array for the nested list
				
			}
		// Bowling
		if(parseInt(game.Bowling_OversBowled) > 0){

				GameFigures = game.Bowling_Figures.split('/')
				RunsConceded = RunsConceded + parseInt(GameFigures[1]);
				WicketsTaken = WicketsTaken + parseInt(GameFigures[0]);
				OversBowled = OversBowled + parseInt(game.Bowling_OversBowled)
				bowling_inn++;
				//console.log(game.Bowling_OversBowled, game.Bowling_Figures)
			}
		
		StoreGames.push(game);

		}
	})

		// create ave, sr nouts( for aveger) store in array and send back
		//Batting
		Avg =  Runs/(inn-NO);
		Avg =  Avg.toFixed(2);
		SR=    Runs/Balls*100;
		SR =  SR.toFixed(2);
		// Bowling
		
		EconomyRate = RunsConceded/OversBowled;
		BowlingstrikeRate = (OversBowled * 5) /WicketsTaken;
		Bowling_Average= RunsConceded/WicketsTaken;

		// ReturnThis.push({Team:team,Runs:Runs, team:Balls,Avg:Avg,SR:SR,INN:inn, Games:StoreGames})
		ReturnThis['Team'] = team;
		ReturnThis['Runs'] = Runs;
		ReturnThis['Balls'] = Balls;
		ReturnThis['Avg'] = Avg;
		ReturnThis['INN'] = inn;
		ReturnThis['SR'] = SR;
		ReturnThis['Games'] = StoreGames;
		ReturnThis['RunsConceded'] = RunsConceded;
		ReturnThis['WicketsTaken'] = WicketsTaken;
		ReturnThis['OversBowled'] = OversBowled;
		ReturnThis['EconomyRate'] = EconomyRate.toFixed(2);
		ReturnThis['BowlingstrikeRate'] = BowlingstrikeRate.toFixed(2);
		ReturnThis['Bowling_Average'] = Bowling_Average.toFixed(2);
		ReturnThis['bowling_inn'] = bowling_inn;
		
		//console.log(ReturnThis);
		return ReturnThis;
}


// This is used to calculate the players stats against a given team
export function calculate_team_stats(data, filter){
	let Opposition,PlayedFor, ReturnOppo=[], ReturnPlayedFor=[];
	
	// console.log(data);
	Opposition = collect_Team_Names(data, 'Opposition');
	PlayedFor = collect_Team_Names(data, 'Team');

	Opposition[0].map((team,i)=>{
		ReturnOppo[i]=calc_Stats(team,data,'Opposition');
	})
	PlayedFor[0].map((team,i)=>{
		ReturnPlayedFor[i]=calc_Stats(team,data,'Team');
	})

	 //	return ReturnThis;
	 //console.log(ReturnPlayedFor);
	
	 store.dispatch({ type:"SET_OPPOSITION_STATS", payload:ReturnOppo });
	 store.dispatch({ type:"SET_TEAM_PLAYED_FOR_STATS", payload:ReturnPlayedFor });
						
						
} 
