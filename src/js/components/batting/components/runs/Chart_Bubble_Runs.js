import React from "react";
import Section_Header from "../../../global/Section_Header";

import BubbleChart from "../../../global/recharts/bubbleChart/bubbleChart";


export default class batting_runs extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <Section_Header header="Scores" />
                        
                </div>
             ); 
      }
  }