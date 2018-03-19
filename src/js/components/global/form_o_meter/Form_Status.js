import React from "react";
import Section_Header from "../../global/Section_Header";

let FormPerc=0,perc_Base=0,FormMsg, PlayerName;
export default class Form_Status extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 

        FormPerc=0;
        perc_Base=0
        
        console.log(this.props.data);

        this.props.data.map((perc,i)=>{ 
            if(perc.name.length>0){
                FormPerc = parseFloat(FormPerc) + parseFloat(perc.uv); 

                console.log(perc.name+ ' FormPerc '+ FormPerc)
                perc_Base ++;
            }
        })
        
        perc_Base = perc_Base*100;
        FormPerc = (FormPerc/perc_Base)*100;
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
    
    if(FormPerc > 130){  FormMsg= "Exceptional Form"}
    if(FormPerc > 129){  FormMsg= "the Form of there life. Current performing over expectation"}
    if(FormPerc > 110 && FormPerc < 129 ){ FormMsg= "Great Form. First Pick Next Week";}
    if(FormPerc > 100 && FormPerc < 109 ){ FormMsg= "Average Form.";}
    if(FormPerc < 100 && FormPerc >= 95){ FormMsg= "Good knick";}
    if(FormPerc < 95 && FormPerc >= 90){  FormMsg= "Solid Form"; }
    if(FormPerc < 90 && FormPerc >= 85){  FormMsg= "Good Form"; }
    if(FormPerc < 85 && FormPerc >= 75){  FormMsg= "Average Form"; }
    if(FormPerc < 75 && FormPerc >= 60){  FormMsg= "a Rough Patch"; }
    if(FormPerc < 60 ){  FormMsg= "Poor Form"; }

            return ( 
                <div id="form_status">
                        <h2>Analysis : Recent performances indicate that {this.props.Name} is at <span class="black"> {FormPerc.toFixed(2)} % </span> of there career stats</h2>
                        <h2>Review : {this.props.Name} is in {FormMsg}</h2>
                </div>
             ); 
      }
  }