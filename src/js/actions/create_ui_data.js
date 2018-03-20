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
	
		if(typeof  games[filter] === 'undefined'){ teamArray.push('Team Missing');}
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


export function AES(data,career_form){
	//console.log("Collect Years");
	let LogYears=[],returnThis=[], returnArray=[];
	let notout_arr=[], Ducks_arr=[], arr_teen=[], arr_20=[], arr_30=[], arr_40=[], arr_50=[], arr_100=[];
   
    data.map((game,i)=>{
        if(LogYears.indexOf(game.Year) == '-1')
            {
                LogYears.push(game.Year)
            }
	})
	
	//console.log(LogYears);
	LogYears = LogYears.reverse();

	// reverse years array to start at first game
	let length=LogYears.length,i=0;
	let LineAve=[],LineEco=[],LineSR=[];
    let progressive_Average=0,progressive_Economy=0,progressive_StrikeRate=0,progressive_runs=0, progressive_wickets=0, progressive_overs=0;
    let Batting_runs_and_balls=[];
    

while(i < length){
    let bowling_inn=0,GameFigures=0, WicketsTaken=0,RunsConceded=0, Bowling_Average=0, EconomyRate=0,BowlingstrikeRate=0, OversBowled=0;
	let batting_inn=0, BallsFaced=0,Batting_Runs=0, Batting_Average=0, notOuts=0,Batting_StrikeRate=0;
	let Batting_Ducks=0,Batting_teen=0,Batting_20=0,Batting_30=0,Batting_40=0,Batting_50=0,Batting_100=0;
	   
	data.map((game,t)=>{
			
			// console.log(LogYears[i]);
			
			if(game.Year == LogYears[i])
                {
				// Bowling over the Years
                if(parseInt(game.Bowling_OversBowled) > 0){
                      //   
                            WicketsTaken = parseInt(WicketsTaken) + parseInt(game.wickets);
                            progressive_wickets = parseInt(progressive_wickets) + parseInt(game.wickets);
                           
                            RunsConceded = RunsConceded + parseInt(game.for);
                            progressive_runs = progressive_runs + parseInt(game.for);
                            
                            OversBowled = OversBowled + parseInt(game.Bowling_OversBowled)
                            progressive_overs = progressive_overs + parseInt(game.Bowling_OversBowled)

                            bowling_inn++;
                            
                            progressive_Average = parseInt(progressive_runs)/parseInt(progressive_wickets);  
                            progressive_Economy = progressive_runs/progressive_overs;
                            progressive_StrikeRate = (progressive_overs * 5) /progressive_wickets;
                            
                            if (isFinite(progressive_Average)) {
                                LineAve.push({'Year':LogYears[i],'Average': parseFloat(progressive_Average.toFixed(2)),'Career':career_form.Bowling_Average})
                              }
                          
                            if (isFinite(progressive_Economy)) {
                                LineEco.push({'Year':LogYears[i],'Economy': parseFloat(progressive_Economy.toFixed(2)),'Career':career_form.Bowling_Economy_Rate})
                              }
                            if (isFinite(progressive_StrikeRate)) {
                                LineSR.push({'Year':LogYears[i],'Strikerate': parseFloat(progressive_StrikeRate.toFixed(2)),'Career':career_form.Bowling_Strike_Rate})
                              } 
						
                        } 
				// Batting over the year
				
				
				if(game.DNB == 'false'){
					   // console.log(game);
						batting_inn++;

						Batting_runs_and_balls.push({'Year':LogYears[i], Runs:game.Runs_Bare, Balls:game.Batting_BallsFaced_Int})
						BallsFaced = BallsFaced + game.Batting_BallsFaced_Int;
						Batting_Runs = Batting_Runs + game.Runs_Bare;
						
						if(game.notout == 'true'){ 
								notOuts++;
								notout_arr.push(game)
							}
						if(game.Runs_Bare == 0 && game.notout == 'false'){
								Batting_Ducks++;
								Ducks_arr.push(game)
							}
						if(game.Runs_Bare>9 && game.Runs_Bare<20){
							Batting_teen++;
							arr_teen.push(game)
						}
						if(game.Runs_Bare>19 && game.Runs_Bare<30){
								Batting_20++;
								arr_20.push(game);
							}
						if(game.Runs_Bare>29 && game.Runs_Bare<40){Batting_30++; arr_30.push(game);}
						if(game.Runs_Bare>39 && game.Runs_Bare<50){Batting_40++; arr_40.push(game);}
						if(game.Runs_Bare>49 && game.Runs_Bare<99){Batting_50++; arr_50.push(game);}
						if(game.Runs_Bare>99){Batting_100++; arr_100.push(game);}
					}
				}
            })

			let Yearinn=0;
			// Batting
			Yearinn = batting_inn-notOuts;
			Batting_Average = Batting_Runs/Yearinn;
			Batting_StrikeRate = Batting_Runs/BallsFaced*100;
			// Bowling
            EconomyRate = RunsConceded/OversBowled;
		    BowlingstrikeRate = (OversBowled * 5) /WicketsTaken;
            Bowling_Average= RunsConceded/WicketsTaken;
		
            returnThis.push({
                'Wickets':WicketsTaken, 
                'Year':LogYears[i],
                'EconomyRate':EconomyRate.toFixed(2),
                'BowlingstrikeRate':BowlingstrikeRate.toFixed(2),
				'Bowling_Average':Bowling_Average.toFixed(2),
				'Batting_Innings':batting_inn,
				'Batting_Balls_Faced':BallsFaced,
				'Batting_Notout':notOuts,
				'Batting_Ducks':Batting_Ducks,
				'Batting_teen':Batting_teen,
				'Batting_20':Batting_20,
				'Batting_30':Batting_30,
				'Batting_40':Batting_40,
				'Batting_50':Batting_50,
				'Batting_100':Batting_100,
				'Batting_Runs':Batting_Runs,
				'Batting_Average':Batting_Average.toFixed(2),
				'Batting_StrikeRate':Batting_StrikeRate.toFixed(2)

            })
            i++
       } 
	  
/**
		* List Arrangements
	   * Would liek to do this differently
	   * 
		0= notouts
		1= ducks

	*/
	   
	   returnArray=[
			returnThis,
			LineAve,
			LineEco,
			LineSR,
			Batting_runs_and_balls,
			[notout_arr,Ducks_arr,arr_teen,arr_20,arr_30,arr_40,arr_50,arr_100]
	   ]

	   console.log(returnArray);
	   store.dispatch({ type:"PLAYER_OVER_THE_YEARS", payload:returnArray });
}