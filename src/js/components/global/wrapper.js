import React from "react";
import Fade from 'react-reveal/Fade';

export default class Wrapper extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return (
                <Fade bottom> 
                    <div class="darkWrapper">
                        {this.props.children}
                    </div>
                </Fade>
             ); 
      }
  }