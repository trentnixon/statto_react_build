import React from "react";
import Section_Header from "../../global/Section_Header";
import PieChart from "../../global/recharts/pieCharts/Straight_Line_Chart";

let Data=[], RR1, RR2;
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
           Data=[];
           //  console.log( this.props)
            RR1 = this.props.SelectedGame.First_Score / this.props.SelectedGame.First_Overs;
            RR2 = this.props.SelectedGame.Second_Score / this.props.SelectedGame.Second_Overs;
            RR1 = parseFloat(RR1.toFixed(2));
            RR2 = parseFloat(RR2.toFixed(2));
            Data.push({name: this.props.SelectedGame.Batted_First, value: RR1 });
            Data.push({name: this.props.SelectedGame.Batting_Second, value: RR2});
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div id="scorecard_Pie_Chart" class="darkWrapper">
                        <Section_Header header="Run Rate Comparisons" />
                        
                        <PieChart data={Data} />
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