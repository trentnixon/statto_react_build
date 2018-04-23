import React from "react";
import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";

import Form_Status from "../../global/form_o_meter/Form_Status";
import Radial from "../../global/recharts/radial/Radial_two_part";

let data=[];

export default class Form_o_Meter extends React.Component {

    constructor() { super();  }
    createData(reducer){
        let thisData=[];
        reducer.map((item,i)=>{
            if(item.Radial == 1){
                
                    thisData.push(
                        {name: item.Title,uv: item.Expected,  pv:item.Actual }
                    )
                
            }
        })
        return thisData;
    }
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
        data =  this.createData(nextProps.FORM_GUIDE.Form_Breakdown)
    }
    
    render() {
            return ( 
                <div>
                    <Radial 
                        data={data}
                        radar2name="Expected"
                        radar2key="uv"
                        radar1name="Actual"
                        radar1key="pv"
                        AxisKey="name"
                        SelectTheme="Light"
                        legendLayout="horizontal"
                        legendvertical="bottom"
                        LegendAlign="center"
                    />

                    <Form_Status 
                        {... this.props}
                        metric="bowling"
                    />

                </div>
             ); 
      }
  }