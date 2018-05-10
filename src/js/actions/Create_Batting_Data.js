import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');


export function batting_data(){

    /**Properties */
    this.GameData = false;
    this.PlayerID = false;
    this.inningsOnly=[];
    /** Methods   */
    
    
    /* ************************************************ */
    // Subsidery Methods
    /* ************************************************ */
    this.SingleArray = (data) => {

    }

    this.InningsOnly = ()=>{
        this.inningsOnly=[];
        console.log(this.inningsOnly);
        this.GameData.map((game,i)=>{
               // console.log(game);
               let findKey
               findKey = _.findKey(game["1st_Innings"], { 'Player_ID': this.PlayerID});
               
               if(findKey != undefined){
              
                this.inningsOnly.push(game["1st_Innings"])

               }else{
                findKey = _.findKey(game["2nd_Innings"], { 'Player_ID': this.PlayerID});
                this.inningsOnly.push(game["2nd_Innings"])
               }
        })
    }
 
    this.Dismissal_Breakdown_Array = (value)=>{
        
        let ReturnThis=[];
            let BreakPoints=[
                {min:0,max:0},
                {min:1,max:9},
                {min:10,max:19},
                {min:20,max:29},
                {min:30,max:39},
                {min:40,max:49},
                {min:50,max:300},
            ]
            BreakPoints.map((p,i)=>{
                if(value >= p.min && value <= p.max){
                    ReturnThis = i;
                }
            })
            return ReturnThis;
    }


    /* ************************************************ */
    // Dismissals
    /* ************************************************ */
    this.BattingDismissal = ()=>{
 
        /** Set up Variables */
        let Dismissals=[],count=0,runs=0,balls=0,t=0,run_avg=0,ball_avg=0;
        
        let runArray=[
            { name:'0',value:0 },
            { name:'< 10',value:0 },
            { name:'< 20',value:0 },
            { name:'< 30',value:0 },
            { name:'< 40',value:0 },
            { name:'< 50',value:0 },
            { name:'> 50',value:0 },
        ]

        // Map Over Innings Array
        this.inningsOnly.map((game,i)=>{
            let StoredRunArray=[],StoredBallsArray=[];
            let findKey = _.findKey(game, { 'Player_ID': this.PlayerID});
           
            // If a ball has been Faced then pull the data
            if(parseFloat(game[findKey].Balls_Faced) > 0){

                let DismissalKey = _.findKey(Dismissals, { 'term': game[findKey].How_Out});
        
                // Create Array item if it dosnt Exist
                if( DismissalKey == undefined){
                    Dismissals[t] = {
                        term:game[findKey].How_Out,
                        count:0,
                        runs:0,
                        balls:0,
                        ball_avg:0,
                        run_avg:0,
                        runArray:[0,0,0,0,0,0,0],
                        ballsArray:[0,0,0,0,0,0,0],
                    }
                        DismissalKey=t;
                        t++;
                }

                count =  parseFloat(Dismissals[DismissalKey].count);
                count++;

                runs = parseFloat(Dismissals[DismissalKey].runs) + parseFloat(game[findKey].Runs);
                balls =  parseFloat(Dismissals[DismissalKey].balls) + parseFloat(game[findKey].Balls_Faced);
                run_avg = parseFloat((runs/count).toFixed(2));
                ball_avg = parseFloat((balls/count).toFixed(2));
                StoredRunArray = Dismissals[DismissalKey].runArray;
                StoredBallsArray = Dismissals[DismissalKey].ballsArray;
                
                // Create Arrays
               
                let ThisInt = this.Dismissal_Breakdown_Array(game[findKey].Runs);
                let BallInt = this.Dismissal_Breakdown_Array(game[findKey].Balls_Faced);
                StoredRunArray[ThisInt] = StoredRunArray[ThisInt] + 1;
                StoredBallsArray[BallInt]= StoredBallsArray[BallInt]+ 1;
                
                // Update Array
                Dismissals[DismissalKey] = {
                    term:game[findKey].How_Out,
                    count:count,
                    runs:runs,
                    balls:balls,
                    run_avg:run_avg,
                    ball_avg:ball_avg,
                    runArray:StoredRunArray,
                    ballsArray:StoredBallsArray
                } 
            } 
        })

        // Send to reducer          
        this.Store("BATTING_DISMISSALS",Dismissals)
    }


    /* ************************************************ */
    // Batting Order
    /* ************************************************ */
    this.BattingOrderObject = ()=>{
        
        let PieArray=[], Runs,Count, Average, Balls_Faced, StrikeRate,HS=[];

        this.inningsOnly.map((game,i)=>{
        
            let findKey = _.findKey(game, { 'Player_ID': this.PlayerID});
        
            //  High Score Text
            if(game[findKey].batting_position != 0 && game[findKey].batting_position < 9){
           
                if(!PieArray[game[findKey].batting_position]){
                    PieArray[game[findKey].batting_position]= 
                        {
                            position : game[findKey].batting_position,
                            Runs :0,
                            inningsCount:0,
                            Average:0,
                            Balls_Faced:0,
                            HS:0
                    }
            }
           
            Runs =  parseFloat(PieArray[game[findKey].batting_position].Runs) + parseFloat(game[findKey].Runs);
            Count =  parseFloat(PieArray[game[findKey].batting_position].inningsCount);
            Balls_Faced =  parseFloat(PieArray[game[findKey].batting_position].Balls_Faced) + parseFloat(game[findKey].Balls_Faced);
            Average = parseFloat((Runs/Count).toFixed(2));
            StrikeRate = parseFloat( ((Runs*100)/Balls_Faced).toFixed(2));
           
            if( 
                parseFloat(game[findKey].Runs) > HS[game[findKey].batting_position] ||
                HS[game[findKey].batting_position] === undefined){
                HS[game[findKey].batting_position] = parseFloat(game[findKey].Runs);
            }
            Count++;
    
            
            PieArray[game[findKey].batting_position] =  
            {
                position : game[findKey].batting_position,
                Order : 'Position '+game[findKey].batting_position,
                Runs :Runs,
                inningsCount : Count,
                Average:Average,
                Balls_Faced:Balls_Faced,
                StrikeRate:StrikeRate,
                HS:HS[game[findKey].batting_position]
            }
        }
     })

        // Send to reducer          
        this.Store("BATTING_ORDER_DATA",PieArray)
    }

  
    /* ************************************************ */
    // Start Here
    /* ************************************************ */
    this.start = ()=>{
         
       //  console.log(this.GameData);
        
            this.Store("BATTING_INPROGRESS", true);

        // Clean Game data to only include Players Game
        // Create a new Aray to pass around
            this.InningsOnly();

        // Create Batting Positions
            this.BattingOrderObject();

        // Create Battibng Dismissals
            this.BattingDismissal();

        // Add the rest of the batting data in here!


        // Complete Process
            this.Complete();
    }



    /* ************************************************ */
    // Complete the Process
    /* ************************************************ */
    this.Complete = ()=>{
        this.Store('BATTING_COMPLETE', true)
        this.Store('BATTING_INPROGRESS', false)
    }
    this.Store =  function(type,payload){ 
        store.dispatch({ type:type, payload:payload }); 
    }
}