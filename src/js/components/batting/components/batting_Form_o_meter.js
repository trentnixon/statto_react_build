import React from "react";
import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";

import Sprial_Form_o_Meter from "../../global/recharts/Spiral/Form-o-meter";
import Form_Status from "../../global/form_o_meter/Form_Status";

let perc_SR=0,perc_AVG=0,perc_EC=0,perc_runs=0,perc_wickets=0, data=[];
export default class Form_o_Meter extends React.Component {

    constructor() { super();  }
    
    perc_check(perc){
      /*  if(perc > 100){
            return 100
        }
        else{
            
        }*/ 
        return perc;
    }

    componentWillMount(){ 
            // Clear Data[]
            data=[];

            let Career = this.props.Player.career_form;
            let Current = this.props.Player.form_guide;

            perc_runs = Career.Batting_Total_Runs / Career.Batting_Innings_Count;
            perc_runs = perc_runs * Current.Batting_Innings_Count;

            perc_runs = (perc_runs/Current.Batting_Total_Runs)*100;
          
            perc_SR = (Career.Batting_StrikeRate/Current.Batting_StrikeRate)*100;
            perc_AVG = (Career.Batting_Average/Current.Batting_Average)*100;
           
           
            data.push(
                {name: 'Runs',       uv: this.perc_check(perc_runs.toFixed(0)), pv:perc_runs.toFixed(0),  fill: '#dbaa8b'},
                {name: 'Average', uv: this.perc_check(perc_AVG.toFixed(0)),    pv:perc_AVG.toFixed(0),  fill: '#73b393'},
                {name: 'Strike Rate',   uv: this.perc_check(perc_SR.toFixed(0)),      pv:perc_SR.toFixed(0),   fill: '#b37383'},
                {name: '',   uv: 200,      pv:200,   fill: 'transparent'},
        )
   
 }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    //      
                       
    render() {
            return ( 
                <div> 
                            <Sprial_Form_o_Meter data={data} />
                            <Form_Status data={data} Name={this.props.Player.PLAYER_META.UserName} />
                </div>
             ); 
      }
  }