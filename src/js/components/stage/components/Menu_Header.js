import React from "react";

export default class Menu_Header extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <h1 class="Menu_Header">{this.props.text}</h1>
             ); 
      }
  }