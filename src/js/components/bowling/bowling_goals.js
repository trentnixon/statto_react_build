import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";

import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";

import Section_Goals from "./components/Section_Form_Goals";
 

// actions 
import {breadcrumbs} from  "../../actions/ui";

export default class batting_runs extends React.Component {

    componentWillMount(){ 
        // set BC
        breadcrumbs('Bowling > Goals','parent');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Half_Circle>
                        <Section_Header header="Goals"/>
                    </Half_Circle>
                    <Content_Wrapper  AddClass="Goals">
                        <Section_Goals {... this.props} />
                    </Content_Wrapper>
                </div>
             );
         
      }
  }