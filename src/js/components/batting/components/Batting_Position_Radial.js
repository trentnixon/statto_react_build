import React from "react";
import Radial from "../../global/recharts/radial/Radial_two_part";

let ThisArray=[];
export default class Pie_strikeRate_over_the_years extends React.Component {

    constructor() { super();  }

    createPie(data){

        //console.log(this.props.BATTING.Batting_Order_Data)
        
        ThisArray=[]
        data.map((order,i)=>{
            //console.log(order)
            ThisArray.push(
                    {
                        'Position':order.position,
                        'Runs':order.Runs, 
                        'Balls':order.Balls_Faced
                }
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
                <div class="Header_Line_Chart">
                     <Radial 
                                data={ThisArray}
                                radar1name="Runs"
                                radar1key="Runs"
                                radar2name="Balls"
                                radar2key="Balls"
                                AxisKey="Position"
                                legendLayout="vertical"
                                legendvertical="middle"
                                LegendAlign="left"
                    />
                </div>
             ); 
      }
  }