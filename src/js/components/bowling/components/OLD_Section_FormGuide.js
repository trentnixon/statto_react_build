import React from "react";

import Half_Circle from "../../stage/components/Half_Circle_Top";
import Content_Wrapper from "../../stage/components/Content_Wrapper";
import Info_Badge from "../../global/Info_Badge";

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
                    <Half_Circle>
                        <Form_o_Meter {... this.props}/>
                    </Half_Circle>
                    <Content_Wrapper>
                        <Info_Badge Text="FORM GUIDE" />
                        <Section_Subheader Icon={<i class="material-icons">info_outline</i>} header="Form Guide is based on a % of your current form against your career stats" />
                        
                        <Section_Header header={"Last "+this.props.Player.last_ten_games.length+" Games"} />
                        <Section_Subheader header={this.props.Player.form_guide.Bowling_Innings_Count + ' Bowling Innings counted'}/>
                        <FormGuidePods {...this.props}/>
                    </Content_Wrapper>
                </div>
             );
        }else{
            return(
                <div>
                    <Half_Circle>
                        <Section_Header header={' 0 Bowling Innings counted'}/>
                    </Half_Circle>
                </div>
            )
        } 
      }
  }