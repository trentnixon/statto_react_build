import React from "react";
import Single_Bar  from "../../global/recharts/barCharts/One_Column_Bar";

let PieArray=[];
export default class Pie_strikeRate_over_the_years extends React.Component {

    constructor() { super();  }

    createPie(data){

        PieArray=[]
        data.map((order,i)=>{
            PieArray.push({name:order.Order, Runs:parseInt(order.Runs)})
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
                <div class="Header_Line_Chart">
                     <Single_Bar 
                        data={PieArray} 
                        Theme="Dark"
                        datakey="Runs"
                    />
                </div>
             ); 
      }
  }