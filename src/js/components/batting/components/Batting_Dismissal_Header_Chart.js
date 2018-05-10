import React from "react";
import Full_Pie from "../../global/recharts/pieCharts/full_pie";

let PieArray=[];
export default class Pie_strikeRate_over_the_years extends React.Component {

    constructor() { super();  }

    createPie(data){
        PieArray=[]
        data.map((order,i)=>{
            PieArray.push({'name':order.term, 'value':order.count})
        })
    }
    componentWillMount(){
        if(this.props.BATTING.Batting_Data_Complete == true){
            this.createPie(this.props.BATTING.Batting_Dismissal_Data);
        }
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(nextProps.BATTING.Batting_Data_Complete == true){
            this.createPie(nextProps.BATTING.Batting_Dismissal_Data);
        }
    }
    
    render() {
      
            return ( 
                <div class="Header_Line_Chart">
                     <Full_Pie 
                        data={PieArray}
                        Theme="Dark"
                    />
                </div>
             ); 
      }
  }