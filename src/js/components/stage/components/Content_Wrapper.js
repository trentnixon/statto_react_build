import React from "react";

export default class Content_Wrapper extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div id="content" class="content">
                       {this.props.children}
                </div>
             ); 
      }
  }