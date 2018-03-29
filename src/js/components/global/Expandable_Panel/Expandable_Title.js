import React from "react";

export default class Expandable_Title extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <i class="material-icons tone2 cardIcon">hdr_weak</i>
                    <h4>{this.props.title}</h4>
                    <h4 class="value">{this.props.value}</h4>
                    <hr/>
                </div>
             ); 
      }
  }