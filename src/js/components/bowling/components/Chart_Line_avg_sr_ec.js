import React from "react";
import Section_Header from "../../global/Section_Header";
import Triple_LineChart from "../../global/recharts/lineCharts/Line_Chart_3";


let LineChart_By_Year;
export default class batting_runs extends React.Component {

    constructor() { super();  }
    // Add to component as to specific
    SingleRunsForLine(data){
        let returnThis=[],  OversBowled=0, Bowling_Average=0,EconomyRate=0, BowlingstrikeRate=0;
        let GameFigures=0, RunsConceded=0,WicketsTaken=0;
       // console.log(data);

        data.slice().reverse().map((game,i)=>{
            if(game.Bowling_Figures){
                
                GameFigures = game.Bowling_Figures.split('/')
				RunsConceded = parseInt(RunsConceded) + parseInt(GameFigures[1]);
				WicketsTaken = parseInt(WicketsTaken) + parseInt(GameFigures[0]);
                OversBowled = parseInt(OversBowled) + parseInt(game.Bowling_OversBowled)

                Bowling_Average= RunsConceded/WicketsTaken;
                EconomyRate = RunsConceded/OversBowled;
                BowlingstrikeRate = (OversBowled * 5) /WicketsTaken;
                
                if (    isFinite(Bowling_Average.toFixed(2)) &&
                        isFinite(EconomyRate.toFixed(2)) &&
                        isFinite(BowlingstrikeRate.toFixed(2))
                    ) 
                    {
                        returnThis.push({
                            Year:game.Year, 
                            Average:parseFloat(Bowling_Average.toFixed(2)),
                            Economy:parseFloat(EconomyRate.toFixed(2)),
                            StrikeRate:parseFloat(BowlingstrikeRate.toFixed(2))
                    }) 
                }
            } 
        })
           // console.log(returnThis);
            return returnThis.reverse().splice(0,250);
    }

    componentWillMount(){ 
          //  console.log( this.props)
            LineChart_By_Year = this.SingleRunsForLine(this.props.Player.filtered_json);
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div class="Header_Line_Chart">
                    <Triple_LineChart 
                        Data={LineChart_By_Year} 
                        dataKey1="Average" 
                        dataKey2="Economy" 
                        dataKey3="StrikeRate" 
                        axisColor="#fff"
                        Theme={this.props.Theme}
                    />
                </div>
             ); 
      }
  }