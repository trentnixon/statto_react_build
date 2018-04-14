import React from "react";
import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";

import Sprial_Form_o_Meter from "../../global/recharts/Spiral/Form-o-meter";
import Form_Status from "../../global/form_o_meter/Form_Status";

let perc_SR=0,perc_AVG=0,perc_EC=0,perc_runs=0,perc_wickets=0, data=[];
export default class Form_o_Meter extends React.Component {

    constructor() { super();  }
    
    perc_check(perc){

        perc == 'Infinity' ? perc = 0:perc = perc;
    // console.log(perc);
        return perc;
    }

    componentWillMount(){ 
            // Clear Data[]
            data=[];

            let Career = this.props.Player.career_form;
            let Current = this.props.Player.form_guide;

            perc_runs = Career.Bowling_RunsConceded / Career.Bowling_Innings_Count
            perc_runs = perc_runs*Current.Bowling_Innings_Count;

            perc_wickets = Career.Bowling_Wickets / Career.Bowling_Innings_Count
            perc_wickets = perc_wickets*Current.Bowling_Innings_Count;
            
            perc_wickets =(Current.Bowling_Wickets/perc_wickets)*100;
            perc_runs = (perc_runs/Current.Bowling_RunsConceded)*100;
            perc_SR = (Career.Bowling_Strike_Rate/Current.Bowling_Strike_Rate)*100;
            perc_AVG = (Career.Bowling_Average/Current.Bowling_Average)*100;
            perc_EC = (Career.Bowling_Economy_Rate/Current.Bowling_Economy_Rate)*100;
            
           
            data.push(
                {name: 'Wickets',       uv: this.perc_check(perc_wickets.toFixed(0)), pv:perc_wickets.toFixed(0),  fill: '#5bbeba'},
                {name: 'Runs Conceded', uv: this.perc_check(perc_runs.toFixed(0)),    pv:perc_runs.toFixed(0),  fill: '#5b5ebe'},
                {name: 'Average',       uv: this.perc_check(perc_AVG.toFixed(0)),     pv:perc_AVG.toFixed(0),  fill: '#95c467'},
                {name: 'Economy',       uv: this.perc_check(perc_EC.toFixed(0)),      pv:perc_EC.toFixed(0),   fill: '#be5b5e'},
                {name: 'Strike Rate',   uv: this.perc_check(perc_SR.toFixed(0)),      pv:perc_SR.toFixed(0),   fill: '#bebb5b'},
                {name: '',   uv: 200,      pv:200,   fill: 'transparent'},
        )
   
 }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <Sprial_Form_o_Meter data={data} />
                    <Form_Status data={data} Name={this.props.Player.PLAYER_META.UserName} />  
                </div>
             ); 
      }
  }