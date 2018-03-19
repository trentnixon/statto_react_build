import React from "react";
import Content_Pod from "../../global/Expandable_Panel/content_pod";

export default class Carrer_Content_Pods extends React.Component {

    constructor() { super();  }
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
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
                                        data={pods.data}
                                        filter={pods.filter}
                                        Link={pods.Link}
                                        List={pods.list}
                                        type={pods.type}
                                    />
                                )
                            })
                        }
                     </div>
             ); 
      }
  }