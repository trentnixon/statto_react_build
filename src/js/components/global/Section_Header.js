import React from "react";

export default class Section_header extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="section-header">
                    <h1>{this.props.header}</h1>
                </div>  
             ); 
      }
  }