import React from "react";

import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";
import Form_o_Meter from  "./Form-o-meter";
import FormGuidePods  from "./Pods_Formguide";

export default class Section_Form_Guide extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        
        if(this.props.Player.form_guide.Bowling_Innings_Count > 1){
            return ( 
                <div>
                    <Section_Header header={"Form Guide (last "+this.props.Player.last_ten_games.length+" Games)"} />
                    <Section_Subheader header={this.props.Player.form_guide.Bowling_Innings_Count + ' Bowling Innings counted'}/>
                    <Form_o_Meter {... this.props}/>
                    <FormGuidePods {...this.props}/>
                </div>
             );
        }else{
            return(
                <div>
                    <Section_Header header={"Form Guide (last "+this.props.Player.last_ten_games.length+" Games)"} />
                    <Section_Subheader header={' 0 Bowling Innings counted'}/>
                </div>
            )
        } 
      }
  }