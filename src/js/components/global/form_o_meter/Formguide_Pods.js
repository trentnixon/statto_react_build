import React from "react";
import Content_Pod from "../../global/Expandable_Panel/content_pod";

let DisplayPods, TextStats;

export default class Display_Dashboard extends React.Component {

    constructor() { super();  }

    createPods(data){

        TextStats = data.map((pod,i)=>{
            
            return(
                <div key={i} class="col-xs-6 text_Stat_Block">
                    <h2>{pod.Current}</h2>
                    <h3>{pod.Title}</h3>
                    <h4>Expected: {pod.Career}</h4>
                </div>
            )
        })
    }

    componentWillMount(){ 
        //this.createPods(this.props.FORM_GUIDE.Form_Breakdown)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        // console.log();
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