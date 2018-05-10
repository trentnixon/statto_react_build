import React from "react";
import Section_Header from "../../global/Section_Header";
// import {CollectYears} from  "../../../actions/career";
import Single_Bar from "../../global/recharts/barCharts/One_Column_Bar_With_Filter_Dismissal_Version";


let BarData=[], type=[];
const Structure= ['0','< 10 Balls','< 20 Balls','< 30 Balls','< 40 Balls','< 50 Balls','> 50 Balls'];

export default class batting_runs extends React.Component {

    constructor() { super();  }
    
    Dismissal(data){
        type=[];
        data.map((game,i)=>{  type.push(game.term) })
    }

    
    componentWillMount(){ 

           if(this.props.BATTING.Batting_Dismissal_Data != false){
                BarData = this.props.BATTING.Batting_Dismissal_Data;
                this.Dismissal(BarData);
           }
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(nextProps.BATTING.Batting_Dismissal_Data != false){
                BarData = nextProps.BATTING.Batting_Dismissal_Data;
                this.Dismissal(BarData);
     }
    }
    
    render() {
            return ( 
                <div>
                        <Section_Header header="Dismissals by Balls" />
                        <Single_Bar 
                            data={BarData}
                            type={type}
                            array="ballsArray"
                            Structure={Structure}
                            filterTitle='Filter by Dismissal'
                        /> 
                </div>
             ); 
      }
  }