import React from "react";

export default class Expandable_SubTitle extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <p class="sub">{this.props.Sub}</p>
                </div>
             ); 
      }
  }