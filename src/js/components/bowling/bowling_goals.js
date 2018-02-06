import React from "react";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Form_o_Meter from  "./components/Form-o-meter";

import FormGuidePods  from "./components/Pods_Formguide";

// actions 
import {breadcrumbs} from  "../../actions/ui";

export default class batting_runs extends React.Component {

    componentWillMount(){ 
        // set BC
        breadcrumbs('bowling > Form Guide','parent');
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
            <div>
                <Section_Header header={"Form Guide (last "+this.props.Player.last_ten_games.length+" Games)"} />
                    <Section_Subheader header={this.props.Player.form_guide.Bowling_Innings_Count + ' Bowling Innings counted'}/>
                    
                    <Form_o_Meter {... this.props}/>
                
                    <FormGuidePods {...this.props}/>


                <Section_Header header="Goals" />
                <div class="darkWrapper gradient">
                    <Section_Header header=" Wickets" />
                        Wickets goals
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Runs Conceded and Overs bowled" />
                        Wickets goals
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" A,E,S" />
                        Wickets goals
                </div>
            </div>
             ); 
      }
  }