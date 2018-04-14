import React from "react";
import Section_Header from "../../../global/Section_Header";

import Simple_Line_Chart from "../../../global/recharts/lineCharts/Simple_Line";


let LineChart_By_Year;
export default class batting_runs extends React.Component {

    constructor() { super();  }
    // Add to component as to specific
    SingleRunsForLine(data){
        let returnThis=[],  Runs=0;
        
        //console.log(data);

        data.slice().reverse().map((game,i)=>{
           
            if(isNaN(parseInt(game.Batting_Runscored)) == false)
                { 
                    Runs = parseInt(Runs) + parseInt(game.Batting_Runscored); 
                    returnThis.push({Year:game.Year, Runs:Runs})  
            }
        })
            return returnThis.reverse();
    }

    componentWillMount(){ 
        // console.log( this.props)
            LineChart_By_Year = this.SingleRunsForLine(this.props.Player.filtered_json);
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div class="Header_Line_Chart">
                    <Simple_Line_Chart 
                        Data={LineChart_By_Year} 
                        dataKey="Runs" 
                        Theme="Light" />
                </div>
             ); 
      }
  }