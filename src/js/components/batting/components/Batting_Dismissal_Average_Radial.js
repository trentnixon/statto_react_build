import React from "react";
import Section_Header from "../../global/Section_Header";
import Radial_two_part from "../../global/recharts/radial/Radial_two_part";

let Radialdata=[];
export default class Radial_Two_Part extends React.Component {

    constructor() { super();  }
    CreateData(data){
        Radialdata=[];
        data.map((item,i)=>{
            Radialdata.push({term:item.term,Runs:item.run_avg, Balls:item.ball_avg})
        })
    }
    componentWillMount(){ 
        if(this.props.BATTING.Batting_Dismissal_Data != false)
            {
                this.CreateData(this.props.BATTING.Batting_Dismissal_Data);
            }
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(nextProps.BATTING.Batting_Dismissal_Data != false)
            {
                this.CreateData(nextProps.BATTING.Batting_Dismissal_Data);
            }
     }
     
    render() {
            return ( 
                <div>
                    <Section_Header header="Average per Dismissal"  />
                    <Radial_two_part 
                        data={Radialdata}
                        radar1name="Runs"
                        radar1key="Runs"
                        radar2name="Balls"
                        radar2key="Balls"
                        AxisKey="term"
                        legendLayout="vertical"
                        legendvertical="middle"
                        LegendAlign="left"
                     />
                </div>
        );  
      }
  }