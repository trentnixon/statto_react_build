import React from "react";
import Section_Header from "../../global/Section_Header";

let FormPerc=0,perc_Base=0,FormMsg, PlayerName;
export default class Bowling_Form_Status extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 

        FormPerc=0;
        this.props.data.map((perc,i)=>{ FormPerc = parseFloat(FormPerc) + parseFloat(perc.pv); })
        perc_Base = this.props.data.length*100;
        FormPerc = (FormPerc/perc_Base)*100;
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
    
    if(FormPerc > 120){  FormMsg= "Exceptional Form"}
    if(FormPerc > 130){  FormMsg= "the Form of there life. Current performing over expectation"}
    if(FormPerc > 100 && FormPerc < 129 ){ FormMsg= "Great Form. First Pick Next Week";}
    if(FormPerc < 100 && FormPerc >= 95){ FormMsg= "Good knick";}
    if(FormPerc < 95 && FormPerc >= 90){  FormMsg= "Solid Form"; }
    if(FormPerc < 90 && FormPerc >= 85){  FormMsg= "Good Form"; }
    if(FormPerc < 85 && FormPerc >= 75){  FormMsg= "Average Form"; }
    if(FormPerc < 75 && FormPerc >= 60){  FormMsg= "a Rough Patch"; }
    if(FormPerc < 60 ){  FormMsg= "Poor Form"; }

            return ( 
                <div id="form_status">
        
                        <h2>Review : {this.props.Name} is in {FormMsg}</h2>
                        <p>Current performances indicate that {this.props.Name} is at <span class="tone2"> {FormPerc.toFixed(2)} % </span> of there career stats</p>
                </div>
             ); 
      }
  }