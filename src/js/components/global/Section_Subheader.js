import React from "react";

export default class Section_header extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="section-subheader">
                    <h3>{this.props.header}</h3>
                </div>  
             ); 
      }
  }