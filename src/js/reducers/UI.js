import React from "react";

const InitialState ={
	
	SearchBar:false,
	updateStatto:false,
	UPDATE_IN_PROGRESS:false,
	Statto_Logo:false,
	STORE_STATTO_FORCE_UPDATE_VERSION:0,
	LMS_REGISTERED:false,
	Dismissals:['Bowled','Caught','LBW','Not out','Stumped','Run out', 'NA','Other'],
	items:{
		SiteName:"STATTO",
		SubHeader:"Reviewing your LMS Career!",
	},
	filter:{
			process:false,
			years:'*',
			teams:'*',
			selectedTeam:false,
			opposition:'*',
			selectedOpposition:false,
			runs:'*',
			wickets:'*'
	},
	breadcrumbs:{
		parent:'Dashboard',
		child:false
	},
	Themes:{
		Dark:{
			colors:['#88acd8',  '#73b393','#dbaa8b', '#b37383','#5bbeba', '#bebb5b','#67c2c4','#c47e67', '#be5b5e', '#5b5ebe','#c46795','#95c467'],
			axis:'#383838',
			label:{
				color:'#383838',
			},
			Tooltip:{
				wrapper:{ 
					backgroundColor:'rgba(44, 44, 44, .5)',
					borderColor:'transparent',
					borderRadius:'5px',
				},
				label:{
					color:'#fff',
				},
				Style:{color:'#fff',}
			},
			Legend:{color:'#383838',}
		},
		Light:{
			colors:['#996b4e', '#dbaa8b', '#73b393', '#b37383','#5bbeba', '#bebb5b','#67c2c4','#c47e67', '#be5b5e', '#5b5ebe','#c46795','#95c467'],
			axis:'#fff',
			label:'#383838',
			Tooltip:{
				wrapper:{ 
					backgroundColor:'rgba(44, 44, 44, .5)',
					borderColor:'transparent',
					borderRadius:'5px',
				},
				label:{
					color:'#fff',
				},
				Style:{color:'#fff',}
			},
			Legend:{color:'#ffffff',}
		}
	}

}

const User_reducer = (state=InitialState, action) =>{
		switch(action.type){
			
			// Fetch Initial Meta Data
			case "STORE_STATTO_LOGO":{
					return {...state, Statto_Logo:action.payload}
					break
				}
			case "STORE_STATTO_FORCE_UPDATE_VERSION":{
				return {...state, STORE_STATTO_FORCE_UPDATE_VERSION:action.payload}
				break
			}
			
			// Fetch Regsitered Player List for Login
			case "FETCH_WP_USER_DATA":{
					//console.log(action.payload);
					return {...state,LMS_REGISTERED:action.payload}
					break
				}	

				
			// Fetch Selected Player from WP
			
			// Go through these.. How many Are needed?
			case "SET_STATTO_UPDATE":{
				return {...state, updateStatto:action.payload}
				break
			}
			case "SET_STATTO_UPDATE_IN_PROGRESS":{
				return {...state, UPDATE_IN_PROGRESS:action.payload}
				break
			} 
			

			


			// Store Filter Arrays
			case "PROCESS_FILTER":{
				return{...state, filter:{...state.filter, process:action.payload}}
				break				
			}
			case "STORE_FILTER_YEARS":{
				return{...state, filter:{...state.filter, years:action.payload}}
				break
			}
			case "STORE_FILTER_TEAMS":{
				return{...state, filter:{...state.filter, teams:action.payload}}
				break
			}
			case "STORE_SELECTED_TEAM":{
				return{...state, filter:{...state.filter, selectedTeam:action.payload}}
				break
			}
			case "STORE_FILTER_OPPOSITION":{
				return{...state, filter:{...state.filter, opposition:action.payload}}
				break
			}
			case "STORE_SELECTED_OPPOSITION":{
				return{...state, filter:{...state.filter, selectedOpposition:action.payload}}
				break
			}

			// UI BREADCRUMBS
			case "STORE_UI_BREADCRUMBS_PARENT":{
				return{...state, breadcrumbs:{...state.breadcrumbs, parent:action.payload}}
				break
			}
			case "STORE_UI_BREADCRUMBS_CHILD":{
				return{...state, breadcrumbs:{...state.breadcrumbs, child:action.payload}}
				break
			}
			/*
			case "FETCH_DATA_FULFILLED":{
					return {...state, LIVE:true}
					break
				}
			
			case "SET_UI_PLAYER_FETCHED":{
					return {...state, PLAYER:action.payload}
					break
				}
			
			
				
			case "SET_UI_NUM_GAMES_FOUND_FETCHED":{
					console.log(action.payload)
					return {...state, Register:{...state.Register,FoundGames:action.payload}}
					break
				}
			case "SET_UI_GAME_ADDED_FETCHED":{
					console.log('action.payload ',action.payload)
					return {...state, Register:{...state.Register,GamesAdded:action.payload}}
					break
				}
			case "SET_REGISTERED_PLAYER_FETCHED":{
					return {...state, Register:{...state.Register,REGISTERED:action.payload}}
					break
				}				
			case "UI_PLAYER_TRUE_FETCHED":{
					return {...state, items:{...state.items, Player:action.payload}}
					break
				}
			case "UI_FACTS_TRUE_FETCHED":{
					return {...state, items:{...state.items, Facts:action.payload}}
					break
				}
			case "UI_BATTING_TRUE_FETCHED":{
					return {...state, items:{...state.items, Batting:action.payload}}
					break
				}
			case "UI_FORMGUIDE_TRUE_FETCHED":{
					return {...state, items:{...state.items, Formguide:action.payload}}
					break
				}
			case "UI_ACHIEVEMENTS_TRUE_FETCHED":{
					return {...state, items:{...state.items, ACHIEVEMENTS:action.payload}}
					break
				}
			case "SET_UI_UPDATEPROFILE":{
					return {...state, items:{...state.items, UpdateProfile:action.payload}}
					break
				}
			case "SET_UI_UPDATEPROFILE_PROGRESS":{
					return {...state, items:{...state.items, UpdateProfileProgress:action.payload}}
					break
				}
			case "SET_SEARCH_BAR":{
					return {...state, SearchBar:action.payload}
					break
				}
				
				*/
			}
		return state;
	}
	
export default User_reducer;	