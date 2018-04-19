import React from "react";
import { connect } from "react-redux";

import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
 
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";

import Info_Badge from "../global/Info_Badge";
import Form_o_Meter from  "./components/Form-o-meter";
import FormGuidePods  from "./components/Pods_Formguide";
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
export default class batting_runs extends React.Component {

    fecth_Form(data){
        // Fetch Form Guide Data
        fs.Metric = [
           {name:'Bowling_Average', value:0},
           {name:'Bowling_Economy_Rate', value:0},
           {name:'Bowling_RunsConceded',value:1},
           {name:'Bowling_Strike_Rate',value:0},
           {name:'Bowling_Wickets',value:1},
           {name:'Bowling_oversBowled', value:1}];

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
        breadcrumbs('bowling > Form Guide','parent');
        this.fecth_Form(this.props)  
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        if(nextProps.Player.PLAYER_META.WP_ID != nextProps.FORM_GUIDE.Form_Analysis[2].playerID )
        {this.fecth_Form(nextProps);}
    }
    
    render() {
        if(this.props.Player.form_guide.Bowling_Innings_Count != false){
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
                        <Bar_with_Lines 
                             {... this.props}
                        />
                        <FormGuidePods 
                            {...this.props}
                        />
                        
                    </Content_Wrapper>
                </div>
             );
        }else{
            return(
                <div>
                    <Half_Circle>
                        <Section_Header header={' 0 Bowling Innings counted'}/>
                    </Half_Circle>
                    <Content_Wrapper>
                        <p>0 Bowling innings counted for the past 5 games</p>
                    </Content_Wrapper>
                </div>
            )
        } 
      }
  }