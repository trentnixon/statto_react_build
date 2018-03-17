import React from "react";
import Content_Pod from "../../global/content_pod";

export default class Carrer_Content_Pods extends React.Component {

    constructor() { super();  }
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                     <div class="row">
                        {
                            this.props.data.map((pods,i)=>{
                                return(
                                    
                                    <Content_Pod 
                                    key={i} 
                                        title={pods.title}
                                        value={pods.value}
                                        sub={pods.sub} 
                                        width={pods.width}
                                        
                                    />
                                )
                            })
                        }
                     </div>
                </div>
             ); 
      }
  }