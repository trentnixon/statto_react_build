import React from "react";
import { Parallax,Background  } from 'react-parallax';


export default class Half_Circle_Top extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
               <div id="Half-Circle-Container"> 
                
                    <Parallax 
                        strength={300} 
                    >
                        <div class="Half-Circle-Top">
                            {this.props.children}
                            
                        </div>
                        
                    </Parallax>
                
                </div>
             ); 
      }
  }