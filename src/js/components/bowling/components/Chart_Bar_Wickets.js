import React from "react";
import Section_Header from "../../global/Section_Header";

import {CollectYears} from  "../../../actions/career";

import Single_Bar from "../../global/recharts/barCharts/One_Column_Stacked_Bar";

let BarData=[], Years;
export default class batting_runs extends React.Component {

    constructor() { super();  }
    
    BarData(data){
// console.log(data)
        data.map((game,i)=>{
                //{name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
                if( isNaN(parseInt(game.wickets)) == false)
                {
                        BarData.push({name:game.Opposition, Wickets:parseInt(game.wickets),Runs:parseInt(game.for), Year:game.Year})
                }
        })

// console.log(BarData);
        return BarData.reverse();
    }
 
    
    componentWillMount(){ 
        // console.log( this.props)
           BarData=[];
            BarData = this.BarData(this.props.Player.filtered_json);
            Years =CollectYears(this.props.Player.filtered_json);
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <Section_Header header="Wickets and runs" />
                        <Single_Bar data={BarData} 
                            datakey1="Wickets" 
                            datakey2="Runs" 
                            Years={Years} 
                            name="name"
                            countType="Innings Count : "
                            filterTitle='Filter Wickets by Year'
                        />
                </div>
             ); 
      }
  }