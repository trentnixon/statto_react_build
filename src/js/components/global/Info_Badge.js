import React from "react";

export default class InfoBadge extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="InfoBadge">
                       {this.props.Text}
                </div>
             ); 
      }
  }