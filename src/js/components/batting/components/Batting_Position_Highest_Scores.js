import React from "react";
import Full_Pie from "../../global/recharts/pieCharts/full_pie";

let TextStats;
export default class Pie_strikeRate_over_the_years extends React.Component {

    constructor() { super();  }

    createPie(data){ 

       //  console.log(this.props.BATTING.Batting_Order_Data)
        
        TextStats = data.map((pod,i)=>{
                return(
                    <div key={i} class="col-xs-6 text_Stat_Block">
                        <h2>{pod.HS}</h2>
                        <h3>{pod.Order}</h3>
                    </div>
                )
            })
    }
    componentWillMount(){
        if(this.props.BATTING.Batting_Data_Complete == true){
            this.createPie(this.props.BATTING.Batting_Order_Data);
        }
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(nextProps.BATTING.Batting_Data_Complete == true){
            this.createPie(nextProps.BATTING.Batting_Order_Data);
        }
    }
    
    render() {
      
            return ( 
                <div id="Form_Text_Stats">
                    <div class="row">
                    {TextStats}
                </div>
                </div>
             ); 
      }
  }