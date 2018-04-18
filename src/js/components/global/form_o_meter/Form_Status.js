import React from "react";

let analysis,point;
export default class Form_Status extends React.Component {

    constructor() { super();  }
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        if(this.props.FORM_GUIDE.Form_Analysis != false){
            analysis = this.props.FORM_GUIDE.Form_Analysis[1].analysis;
            point = this.props.FORM_GUIDE.Form_Analysis[0].point;
        }
            return ( 
                <div id="form_status">
                        <h2>Analysis : Recent performances indicate that {this.props.Player.PLAYER_META.UserName} is at <span class="black"> {point}% </span> of there career stats</h2>
                        <h2>Review : {this.props.Player.PLAYER_META.UserName} is in {analysis}</h2>
                </div>
             ); 
      }
  }