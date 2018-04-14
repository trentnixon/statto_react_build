import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        // console.log( this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                       This is a Default
                </div>
             ); 
      }
  }