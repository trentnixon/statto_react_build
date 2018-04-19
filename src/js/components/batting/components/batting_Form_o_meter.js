import React from "react";
import Form_Status from "../../global/form_o_meter/Form_Status";
import Radial from "../../global/recharts/radial/Radial_two_part";

let Expected_Runs, Expected_Notouts, Expected_Balls, data=[];

export default class Form_o_Meter extends React.Component {

    constructor() { super();  }

    componentWillMount(){ 
        // Fetch Form Guide

        data=[];
        let Career = this.props.Player.career_form;
        let Current = this.props.Player.form_guide;
        
        Expected_Runs = Career.Batting_Average * Current.Batting_Innings_Count;
        Expected_Notouts = Career.Batting_NotOuts / Current.Batting_Innings_Count;
        Expected_Balls = (Career.Batting_TotalBallsFaced / Career.Batting_Innings_Count) * Current.Batting_Innings_Count;

        data.push(
            {name: 'Average',       uv: parseInt(Current.Batting_Average.toFixed(2)),       pv:parseInt(Career.Batting_Average.toFixed(2))},
            {name: 'Strike Rate',   uv: parseInt(Current.Batting_StrikeRate.toFixed(2)),    pv:parseInt(Career.Batting_StrikeRate.toFixed(2))},
            {name: 'Balls Faced',   uv:  parseInt(Current.Batting_TotalBallsFaced.toFixed(2)) ,    pv:parseInt(Expected_Balls.toFixed(2)) },
            {name: 'Runs',          uv: Current.Batting_Total_Runs,                         pv:parseInt(Expected_Runs.toFixed(0)) },
        ) 
 }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
                 
    render() {
        // console.log(data)
            return ( 
                <div> 
                         <Radial 
                            data={data}
                            radar2name="Actual"
                            radar2key="uv"
                            radar1name="Expected"
                            radar1key="pv"
                            AxisKey="name"
                            SelectTheme="Light"
                            />
                            <Form_Status 
                                {... this.props}
                                metric="batting"
                            />
               
                </div>
             ); 
      }
  }