import React from "react";
import Section_Header from "../../../global/Section_Header";
import Radial_two_part from "../../../global/recharts/radial/Radial_two_part";


export default class Radial_Two_Part extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <Section_Header header={this.props.title}  />
                    <Radial_two_part 
                        data={this.props.data}
                        radar1name="Runs"
                        radar1key="Runs"
                        radar2name="Balls"
                        radar2key="Balls"
                        AxisKey="year"
                        legendLayout="vertical"
                        legendvertical="middle"
                        LegendAlign="left"

                     />
                </div>
        );  
      }
  }