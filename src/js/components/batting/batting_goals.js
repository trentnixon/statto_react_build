import React from "react";
import Section_Header from "../global/Section_Header";

export default class Batting_Goals extends React.Component {

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
                <div>
                        <Section_Header header="Goals" />
                        <ul class="list">
                                <li>See Bowling for layout </li>
                        </ul>
                </div>
             ); 
      }
  }