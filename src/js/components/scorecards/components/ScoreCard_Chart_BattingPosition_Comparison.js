import React from "react";
import Section_Header from "../../global/Section_Header";
import Bars from "../../global/recharts/barCharts/Two_Column_Bar";
var _ = require('lodash');

let Data=[], RR1, RR2;
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    Construct_Data(Data, First, Second, Title){
        let R1=0, R2=0;
        First.map((player,i)=>{
            if(player.batting_position == Title)
                {
                   // console.log(player.batting_position, player.Runs, Title)
                    R1 = player.Runs;
                }
        })

        Second.map((player,i)=>{
            if(player.batting_position == Title)
                {
                    //console.log(player.batting_position, player.Runs, Title)
                    R2 = player.Runs;
                }
        })

        Data.push({name:Title, First:parseFloat(R1), Second:parseFloat(R2)});
        return Data
    }

    componentWillMount(){ 
           Data=[];
             
             let firstInnings = _.values(this.props.SelectedGame["1st_Innings"]);
             let SecondInnings = _.values(this.props.SelectedGame["2nd_Innings"]);
             //{name: 'one', uv: 4000, pv: 2400, amt: 2400},
            let i=1;
             while (i < 9) {
                Data =  this.Construct_Data(Data,firstInnings,SecondInnings,i);
                i++;
            }

    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div id="scorecard_Pie_Chart">
                        <Section_Header header="Batting Position Comparisons" />
                        
                        <Bars data={Data} />

                        <div class="row nomargin">
                        <div class="col-xs-6 text-center tone1">
                                {this.props.SelectedGame.Batted_First}
                        </div>

                        <div class="col-xs-6 text-center tone2">
                                {this.props.SelectedGame.Batting_Second}
                        </div>
                        </div>
                </div>
             ); 
      }
  }