import React from "react";
import { connect } from "react-redux";
import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";

import Sprial_Form_o_Meter from "../../global/recharts/Spiral/Form-o-meter";
import Form_Status from "../../global/form_o_meter/Form_Status";
import Radial from "../../global/recharts/radial/Radial_two_part";


import {form_status} from "../../../actions/form_status";
const fs = new form_status();

let perc_SR=0,perc_AVG=0,perc_EC=0,perc_runs=0,perc_wickets=0, data=[];
let Expected_Runs, Expected_Notouts, Expected_Balls;
@connect((store) =>{
    return{
        FORM_GUIDE: store.FORM_GUIDE,
    }
})
export default class Form_o_Meter extends React.Component {

    constructor() { super();  }
    
    fecth_Form(data){
         // Fetch Form Guide Data
         fs.Metric = [
            {name:'Batting_Average', value:0},
            {name:'Batting_Fifties', value:1},
            {name:'Batting_NotOuts',value:1},
            {name:'Batting_StrikeRate',value:0},
            {name:'Batting_TotalBallsFaced',value:1},
            {name:'Batting_Total_Runs', value:1}];
        fs.perc_data=[];
        fs.Store_Analysis=[];
        fs.Career = data.Player.career_form;
        fs.CarrerBy = data.Player.career_form.Batting_Innings_Count 
        fs.Current = data.Player.form_guide;
        fs.CurrentBy  =data.Player.form_guide.Batting_Innings_Count;
        fs.PlayerID = data.Player.PLAYER_META.WP_ID
        fs.calculate();
    }

    componentWillMount(){ 
        // Fetch Form Guide
        this.fecth_Form(this.props)
        
        data=[];
        let Career = this.props.Player.career_form;
        let Current = this.props.Player.form_guide;
        
        Expected_Runs = Career.Batting_Average * Current.Batting_Innings_Count;
        Expected_Notouts = Career.Batting_NotOuts / Current.Batting_Innings_Count;
        Expected_Balls = (Career.Batting_TotalBallsFaced / Career.Batting_Innings_Count) * Current.Batting_Innings_Count;
/**
 * Need checks to see if values are NaN
 */

           data.push(
            {name: 'Average',       uv: parseInt(Current.Batting_Average.toFixed(2)),       pv:parseInt(Career.Batting_Average.toFixed(2))},
            {name: 'Strike Rate',   uv: parseInt(Current.Batting_StrikeRate.toFixed(2)),    pv:parseInt(Career.Batting_StrikeRate.toFixed(2))},
            {name: 'Balls Faced',   uv:  parseInt(Current.Batting_TotalBallsFaced.toFixed(2)) ,    pv:parseInt(Expected_Balls.toFixed(2)) },
            {name: 'Runs',          uv: Current.Batting_Total_Runs,                         pv:parseInt(Expected_Runs.toFixed(0)) },
        ) 
 }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
         // Fetch Form Guide
         if(nextProps.Player.PLAYER_META.WP_ID != nextProps.FORM_GUIDE.Form_Analysis[2].playerID )
         {this.fecth_Form(nextProps);}
    }
                 
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