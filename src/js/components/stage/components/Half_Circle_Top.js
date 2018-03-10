import React from "react";
import { Parallax } from 'react-parallax';


export default class Half_Circle_Top extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
               <div id="Half-Circle-Container"> 
                
                    <Parallax strength={400} bgHeight="550px" >
                        <div class="Half-Circle-Top">
                            {this.props.children}
                        </div>
                    </Parallax>
                
                </div>
             ); 
      }
  }