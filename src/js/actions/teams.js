import store from "../store/store";
import axios from 'axios';
let _ = require('lodash');

export function TeamData(){

    // Properties
    this.TeamID=false;
    this.Team_Raw=false;
    this.Team_Games_Raw=[];
    this.Gamestr=[];
    this.Store_Team_Roster=[];
    this.Store_NetworkData=[]

    // Methods

    /** Supliment Methods */

    this.ScrapId = (data,result,TeamGameCount)=>{
        
        // Add more Data points to this function
        let findKey;
        Object.values(data).map((item,i)=>{
                
            let playerResults=[0,0];

             findKey = _.findKey(this.Store_Team_Roster, { 'id': item.Player_ID});
             if(findKey == undefined){
                    if(result == true){playerResults[0]=1}else{playerResults[1]=1}
                    this.Store_Team_Roster.push(
                        {
                            id:item.Player_ID,
                            name:item.Player_Name,
                            games:1,
                            played:(1/TeamGameCount)*100,
                            runs:parseFloat(item.Runs),
                            balls:parseFloat(item.Balls_Faced),
                            overs:parseFloat(item.Overs_Bowled),
                            for:parseFloat(item.runs_conceded),
                            wickets:parseFloat(item.Wickets),
                            result:playerResults,
                        }
                    ) 
                }
            else{
                let Player = this.Store_Team_Roster[findKey];
                if(result == true){
                        Player.result[0]=Player.result[0] + 1;
                    }
                else{Player.result[1]=Player.result[1] + 1}

                Player.games = Player.games+1;
                Player.played = (Player.games/TeamGameCount)*100;
                Player.runs = Player.runs+parseFloat(item.Runs);
                Player.balls = Player.balls+parseFloat(item.Balls_Faced);
                Player.overs = Player.overs+parseFloat(item.Overs_Bowled);
                Player.for = Player.for+parseFloat(item.runs_conceded);
                Player.wickets = Player.wickets+parseFloat(item.Wickets);
            }
        })
    }


    this.NetworkData = ()=>{
        // Store_NetworkData
       
       
        let Innings, Game=[], win,lost,prec,findKey;
       
      //  console.log(this.Store_Team_Roster);

        this.Team_Games_Raw.map((game,i)=>{
            Game=[];  
            if(this.TeamID == game.Winner_ID)
            {win=1, lost=0}  else{win=0, lost=1}

            Innings = game[this.FindInnings(game.Batted_First_ID,this.TeamID)];
           

            Object.values(Innings).map((item,i)=>{
                // console.log(item); 
                findKey = _.findKey(this.Store_Team_Roster, { 'id': item.Player_ID});
                    Game.push(parseFloat((this.Store_Team_Roster[findKey].played/100).toFixed(2)));
                })
           
            if(Game.length == 8){
                this.Store_NetworkData.push({
                    input:Game,
                    output:{
                        win:win,
                        lost:lost
                    }
                })
            }
        })

       // console.log(this.Store_NetworkData)
        this.Store('TEAM_NETWORK_TRAINING',this.Store_NetworkData)
    }

    this.FindInnings = (GameID, TeamID)=>{
        if(GameID == TeamID){ 
            return "1st_Innings";
        }else{
            return "2nd_Innings"; 
        }
    }


    /** Main Methods */
    this.CollectTeamData = ()=>{
		// We need the WP Post ID from the Player before we can begin	
		const request = axios.get("/statto/wp-json/wp/v2/statto_team/?slug="+this.TeamID);
		request.then(({data}) =>{ 

            this.Team_Raw = JSON.parse(data["0"].acf.raw_data,true);
            Object.values(this.Team_Raw).map((item)=>{
                this.Gamestr.push(item.GameID);
            })
               
            this.Fetch_Team_Scorecards();
            // Store this data in the reducer
           this.Store('Team_Raw',this.Team_Raw)

		});	
	}

    this.Fetch_Team_Scorecards = ()=>{
        const request = axios.get("/statto/wp-json/wp/v2/statto_game/?slug="+this.Gamestr);
            request.then(({data}) =>{ 
                    // console.log(data);
                    data.map((game,i)=>{
                        this.Team_Games_Raw.push(JSON.parse(game.acf.game_raw_data))
                    })
                    
                    this.Team_Roster();
                    this.Store('TEAM_GAMES',this.Team_Games_Raw)
                    this.Store('TEAM_STORED',true)
                })
    }

    this.Team_Roster = ()=>{
      
        let Innings, result;

        this.Team_Games_Raw.map((game,i)=>{
                
            if(this.TeamID == game.Winner_ID){result=true;} else{result=false;}

            Innings = game[this.FindInnings(game.Batted_First_ID,this.TeamID)];

            this.ScrapId(Innings,result, this.Team_Games_Raw.length);
    
        })

        this.Store('TEAM_ROSTER',this.Store_Team_Roster);
        this.NetworkData();
    }

    this.Store = (type,payload) => {
        store.dispatch({ type:type, payload:payload })
    }
}