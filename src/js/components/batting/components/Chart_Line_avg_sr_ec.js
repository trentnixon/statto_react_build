import React from "react";
import Section_Header from "../../global/Section_Header";
import Triple_LineChart from "../../global/recharts/lineCharts/Line_Chart_3";


let LineChart_By_Year;
export default class batting_runs extends React.Component {

    constructor() { super();  }
    // Add to component as to specific
    SingleRunsForLine(data){
        
        let returnThis=[], Runs=0, NO=0, BF=0;
        let Average, SR;
       
        data.slice().reverse().map((game,i)=>{
            if(game.Batting_BallsFaced_Int != 0){
            
				Runs = Runs + parseInt(game.Runs_Bare);
                if(game.notout == 'true'){ NO++;}
                BF = BF + game.Batting_BallsFaced_Int;

                Average= Runs/NO;
                SR = (Runs*100)/BF;
                
                if (    isFinite(Average.toFixed(2)) &&
                        isFinite(SR.toFixed(2))
                    ) 
                    {
                        returnThis.push({
                            Year:game.Year, 
                            Average:parseFloat(Average.toFixed(2)),
                            Balls:parseFloat(game.Batting_BallsFaced_Int),
                            StrikeRate:parseFloat(SR.toFixed(2))
                    }) 
                }
            } 
        })
          return returnThis.reverse().splice(0,250);
    }
 
    componentWillMount(){ 
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
                        dataKey2="Balls" 
                        dataKey3="StrikeRate" 
                        axisColor="#fff"
                        Theme={this.props.Theme}
                    />
                </div>
             ); 
      }
  }