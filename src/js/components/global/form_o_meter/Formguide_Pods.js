import React from "react";
import Content_Pod from "../../global/content_pod";

let DisplayPods;

export default class Display_Dashboard extends React.Component {

    constructor() { super();  }


    componentWillMount(){ 

            DisplayPods = this.props.PodData.map((pod,i)=>{
                return( <Content_Pod 
                            key={i}
                            title={pod.title}
                            value={pod.value}
                            sub={pod.sub} 
                            width={pod.width}
                        />
                )
            })
        }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <div class="row">
                    {DisplayPods}
                </div>
            </div>
        ); 
      }
  }