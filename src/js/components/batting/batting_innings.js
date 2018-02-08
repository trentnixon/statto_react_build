import React from "react";
import Section_Header from "../global/Section_Header";

export default class Display_Player_Settings_Home extends React.Component {

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
                        <Section_Header header="Innings, Average, Strike Rate" />

                        <ul class="list">
                        
                        <li>Pie Chart, Innings over years</li>
                        <li> most innings against : tam name</li>
                        <li>Most innings for</li>
                        <li>stacked bar, runs and balls faced</li>
                        
                        <li>BF, over years, pie chart</li>
                        <li>best bf for and against</li>
                        
                        <li>Average, over years, pie chart</li>
                        <li>best ave for and against</li>

                        <li>SR, over years, pie chart</li>
                        <li>best sr for and against</li>

                        
                        <li></li>
                        </ul>

                </div>
             ); 
      }
  }