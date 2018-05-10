import React from "react";
import Full_Pie from "../../global/recharts/pieCharts/full_pie";

let PieArray=[];
export default class Pie_strikeRate_over_the_years extends React.Component {

    constructor() { super();  }

    createPie(data){

        //console.log(this.props.BATTING.Batting_Order_Data)
        
        PieArray=[]
        data.map((order,i)=>{
          //  console.log(order)
            PieArray.push({'name':order.Order, 'value':order.Runs})
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
                     <Full_Pie 
                        data={PieArray}
                        Theme="Dark"
                    />
                </div>
             ); 
      }
  }