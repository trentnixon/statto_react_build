import React from "react";
import Content_Pod from "../../global/Expandable_Panel/content_pod";

let DisplayPods, TextStats;

export default class Display_Dashboard extends React.Component {
    constructor() { super();  }
    createPods(data){
        TextStats = data.map((pod,i)=>{
            return(
                <div key={i} class="col-xs-6 text_Stat_Block">
                    <h2>{pod.Actual}</h2>
                    <h3>{pod.Title}</h3>
                    <h4>Expected: {pod.Expected}</h4>
                </div>
            )
        })
    }
    componentWillMount(){ 
        //this.createPods(this.props.FORM_GUIDE.Form_Breakdown)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        this.createPods(nextProps.FORM_GUIDE.Form_Breakdown)
    }
    
    render() {
            return ( 
                <div id="Form_Text_Stats">
                    <div class="row">
                        {TextStats}
                    </div>
                </div>
        ); 
      }
  }