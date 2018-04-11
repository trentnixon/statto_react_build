import React from "react";
var _ = require('lodash');

import Section_Header from "../../global/Section_Header";
import Scorecard_chart_line from "./ScoreCard_Chart_Percentage_Line";

export default class Display_Game_Stats extends React.Component {

    constructor() { super();  }
    
    CreateStats(innings, Overs, Score){
       
        let CreateInnings=[]; 
        let TOR=0, TOB=0;
        let MOB=0,MOR=0, MOP=0, MOBP=0;
        let LOR=0, LOB=0, LOP=0, LOBP=0;
        let Balls=0;

        innings.map((player,i)=>{

            if(player.batting_position <= 3 && player.batting_position != 0){
                     TOR = parseInt(TOR) + parseInt(player.Runs);
                     TOB = parseInt(TOB) + parseInt(player.Balls_Faced); 
            }
            else if(player.batting_position >= 4 && player.batting_position <= 6){
                    MOR = parseInt(MOR) + parseInt(player.Runs);
                    MOB = parseInt(MOB) + parseInt(player.Balls_Faced);
            }
            else if(player.batting_position >= 7 && player.batting_position <= 8){
                    LOR = parseInt(LOR) + parseInt(player.Runs);
                    LOB = parseInt(LOB) + parseInt(player.Balls_Faced);
            }
            
            // Balls bowled including extras
            Balls = parseFloat(Balls) + parseFloat(player.Balls_Faced);

            // Top Order
            CreateInnings['TopOrderRuns'] = TOR; 
            CreateInnings['TopOrderBalls'] = TOB; 
            CreateInnings['TopOrderRunsPercentage']  = TOR/Score * 100;
            CreateInnings['TopOrderBallsPercentage'] = TOB/Balls * 100;

            // Middle Order
            CreateInnings['MiddleOrderRuns'] = MOR; 
            CreateInnings['MiddleOrderBalls'] = MOB;
            CreateInnings['MiddleOrderRunsPercentage']  = MOR/Score * 100;
            CreateInnings['MiddleOrderBallsPercentage'] = MOB/Balls * 100;

            // Lower Order
            CreateInnings['LowerOrderRuns'] = LOR; 
            CreateInnings['LowerOrderBalls'] = LOB; 
            CreateInnings['LowerOrderRunsPercentage']  = LOR/Score *100;
            CreateInnings['LowerOrderBallsPercentage'] = LOB/Balls * 100;  
              
                return CreateInnings;
        })
        return CreateInnings;   
    }

    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            let FirstInningsStats, SecondInningsStats;
            let firstInnings = _.values(this.props.SelectedGame["1st_Innings"]);
            let SecondInnings = _.values(this.props.SelectedGame["2nd_Innings"]);

            FirstInningsStats = this.CreateStats(firstInnings, this.props.SelectedGame.First_Overs, this.props.SelectedGame.First_Score);
            SecondInningsStats = this.CreateStats(SecondInnings, this.props.SelectedGame.Second_Overs, this.props.SelectedGame.Second_Score); 
            
            return ( 
                <div class="scorecard_Charts ballstorunsfaced" >
                    
                    <Section_Header header="Runs to Balls Faced by Order" />

                    <div class="row nomargin header">
                        <div class="col-xs-12 nopadding">{this.props.SelectedGame.Batted_First}</div>
                        <div class="col-xs-4 col-xs-offset-4 text-center">Balls Faced </div>
                        <div class="col-xs-4  text-center"> Runs</div>
                    </div>
                    <Scorecard_chart_line 
                        title="Top Order"
                        Runs={FirstInningsStats['TopOrderRuns']}
                        RunsPercentage={FirstInningsStats['TopOrderRunsPercentage']}
                        Balls={FirstInningsStats['TopOrderBalls']}
                        BallsPercentage={FirstInningsStats['TopOrderBallsPercentage']}
                    />

                    <Scorecard_chart_line 
                        title="Middle Order"
                        Runs={FirstInningsStats['MiddleOrderRuns']}
                        RunsPercentage={FirstInningsStats['MiddleOrderRunsPercentage']}
                        Balls={FirstInningsStats['MiddleOrderBalls']}
                        BallsPercentage={FirstInningsStats['MiddleOrderBallsPercentage']}
                    />

                    <Scorecard_chart_line 
                        title="Lower Order"
                        Runs={FirstInningsStats['LowerOrderRuns']}
                        RunsPercentage={FirstInningsStats['LowerOrderRunsPercentage']}
                        Balls={FirstInningsStats['LowerOrderBalls']}
                        BallsPercentage={FirstInningsStats['LowerOrderBallsPercentage']}
                    />

                    <div class="row nomargin header">
                        <div class="col-xs-12 nopadding">{this.props.SelectedGame.Batting_Second}</div>
                        <div class="col-xs-4 col-xs-offset-4 text-center">Balls Faced </div>
                        <div class="col-xs-4  text-center"> Runs</div>
                    </div>

                    <Scorecard_chart_line 
                        title="Top Order"
                        Runs={SecondInningsStats['TopOrderRuns']}
                        RunsPercentage={SecondInningsStats['TopOrderRunsPercentage']}
                        Balls={SecondInningsStats['TopOrderBalls']}
                        BallsPercentage={SecondInningsStats['TopOrderBallsPercentage']}
                    />

                    <Scorecard_chart_line 
                        title="Middle Order"
                        Runs={SecondInningsStats['MiddleOrderRuns']}
                        RunsPercentage={SecondInningsStats['MiddleOrderRunsPercentage']}
                        Balls={SecondInningsStats['MiddleOrderBalls']}
                        BallsPercentage={SecondInningsStats['MiddleOrderBallsPercentage']}
                    />

                    <Scorecard_chart_line 
                        title="Lower Order"
                        Runs={SecondInningsStats['LowerOrderRuns']}
                        RunsPercentage={SecondInningsStats['LowerOrderRunsPercentage']}
                        Balls={SecondInningsStats['LowerOrderBalls']}
                        BallsPercentage={SecondInningsStats['LowerOrderBallsPercentage']}
                    />
                </div>
             ); 
      }
  }