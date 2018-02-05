import React from "react";
import Section_Header from "../../../global/Section_Header";

import {CollectYears} from  "../../../../actions/career";

import Single_Bar from "../../../global/recharts/barCharts/One_Column_Bar";

let BarData=[], Years;
export default class batting_runs extends React.Component {

    constructor() { super();  }
    
    BarData(data){
       // console.log(data)
        data.map((game,i)=>{
                //{name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
                if( isNaN(parseInt(game.Batting_BallsFaced)) == false)
                {
                        BarData.push({name:game.Opposition, Runs:parseInt(game.Batting_Runscored), Year:game.Year})
                }
        })

        console.log(BarData);
        return BarData.reverse();
    }

    
    componentWillMount(){ 
           //  console.log( this.props)
            BarData = this.BarData(this.props.Player.filtered_json);
            Years =CollectYears(this.props.Player.filtered_json);
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <Section_Header header="Runs at a view" />
                        <Single_Bar data={BarData} datakey="Runs" Years={Years} countType="Innings Count : "/>
                </div>
             ); 
      }
  }