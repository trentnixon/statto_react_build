import React from "react";
import Section_Header from "../global/Section_Header";

export default class Searching_Scorecards extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div  class="darkWrapper fetch_new_scorecard">
                        <i class='material-icons tone3 pull-left'>filter_list</i>
                        <Section_Header header="Searching for Scorecard" />
                        <p>Statto is looking up this game</p>
                </div>
             ); 
      }
  }