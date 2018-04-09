import React from "react";
import Identifier from "./News_Identifier";

export default class News_Header_Key extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){      }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="row header_key">
                    <div class="col-xs-4">
                        <Identifier ID="M" color="#dbaa8b"/>
                        <p>Career Milestones</p>
                    </div>
                    <div class="col-xs-4">
                        <Identifier ID="F" color="#b37383"/>
                        <p>Form Achievments</p>
                    </div>
                    <div class="col-xs-4">
                        <Identifier ID="G" color="#88acd8"/>
                        <p>Game Results (notable)</p>
                    </div>  
                </div>
             ); 
      }
  }