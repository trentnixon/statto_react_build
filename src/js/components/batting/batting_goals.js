import React from "react";

import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";

import Section_Header from "../global/Section_Header";
import Section_Goals from "./components/Section_Form_Goals";

let PodData=[], CareerRuns;
export default class Batting_Goals extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    

    render() {
          
            return ( 
                <div>
                        <Half_Circle >
                                <Section_Header header="Goals" />    
                        </Half_Circle>
                        
                        <Content_Wrapper AddClass="Goals">
                                <Section_Goals {...this.props} />
                        </Content_Wrapper>
                </div>
             );
      }
  }