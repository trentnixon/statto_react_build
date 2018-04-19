import React from "react";
import { connect } from "react-redux";

import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Info_Badge from "../global/Info_Badge";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";

import Form_o_Meter from "./components/batting_Form_o_meter";
import FormGuidePods  from "../global/form_o_meter/Formguide_Pods";
import Section_Goals from "./components/Section_Form_Goals";
import Bar_with_Lines from "./components/Form_Bar_with_Line";

// actions 
import {breadcrumbs} from  "../../actions/ui";
import {form_status} from "../../actions/form_status";

const fs = new form_status();

@connect((store) =>{
        return{
            FORM_GUIDE: store.FORM_GUIDE,
        }
    })
export default class Batting_FormGuide extends React.Component {

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
        // set BC
       breadcrumbs('Batting > Formguide','parent');
       this.fecth_Form(this.props);
    }
    
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(nextProps.Player.PLAYER_META.WP_ID != nextProps.FORM_GUIDE.Form_Analysis[2].playerID )
        {this.fecth_Form(nextProps);}
     }
    

    render() {
            if(this.props.Player.form_guide.Batting_Innings_Count != false){
            return ( 
                <div>
                        <Half_Circle >
                                <Form_o_Meter {... this.props}/>
                        </Half_Circle>
                        
                        <Content_Wrapper>
                                <Info_Badge Text="FORM GUIDE" />
                                <Section_Subheader Icon={<i class="material-icons">info_outline</i>} header="Form Guide is based on a % of your current form against your career stats" />
                                <Section_Header header={"Last "+this.props.Player.last_ten_games.length+" Games"} />
                                <Section_Subheader header={this.props.Player.form_guide.Batting_Innings_Count + ' Innings counted'}/>
                                <Bar_with_Lines 
                                        {... this.props}
                                />
                                <FormGuidePods {...this.props} /> 
                        </Content_Wrapper>
                </div>
             ); 
        }else{
            return(
                <div>
                        <Half_Circle >
                                <Section_Subheader header={' 0 Innings counted'}/>
                        </Half_Circle>
                        <Content_Wrapper>
                            <p>No Batting innings were counted for the past 5 games</p>
                        </Content_Wrapper>
                </div>
            )
        } 
      }
  }