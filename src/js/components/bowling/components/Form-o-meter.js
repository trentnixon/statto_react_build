import React from "react";
import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";

import Form_Status from "../../global/form_o_meter/Form_Status";
import Radial from "../../global/recharts/radial/Radial_two_part";

let ER, BW, data=[];

export default class Form_o_Meter extends React.Component {

    constructor() { super();  }

    componentWillMount(){ 
        
            let Career = this.props.Player.career_form;
            let Current = this.props.Player.form_guide;
            data=[];
          //  console.log(Career)
        
            ER = Career.Bowling_Economy_Rate*Current.Bowling_Innings_Count
            BW = (Career.Bowling_Wickets / Career.Bowling_Innings_Count)*Current.Bowling_Innings_Count
            
            data.push(

                {name: 'Wickets',       uv: parseInt(Current.Bowling_Wickets.toFixed(2)),       pv:parseInt(BW)},
                {name: 'Average',       uv: parseInt(Current.Bowling_Average.toFixed(2)),       pv:parseInt(Career.Bowling_Average.toFixed(2))},
                // {name: 'Runs Conceded', uv: parseInt(Current.Bowling_RunsConceded.toFixed(2)),       pv:parseInt(ER.toFixed(2))},
                {name: 'Economy',       uv: parseInt(Current.Bowling_Economy_Rate.toFixed(2)),       pv:parseInt(Career.Bowling_Economy_Rate.toFixed(2))},
                {name: 'Strike Rate',   uv: parseInt(Current.Bowling_Average.toFixed(2)),       pv:parseInt(Career.Bowling_Average.toFixed(2))},
            )
   
 }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
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
                        metric="bowling"
                    />

                </div>
             ); 
      }
  }