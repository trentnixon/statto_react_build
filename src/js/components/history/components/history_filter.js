import React from "react";
import { connect } from "react-redux";

import Section_Header from "../../global/Section_Header";
let Years=[];
export default class Display_History_Filter extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        console.log(this.props.UI.filter.history, this.props.Player.raw_json)

        this.props.Player.raw_json.map((game,i)=>{
            
            if(Years.indexOf(game.Year) == '-1')
                {
                    Years.push(game.Year)
                }
            
            
        })
        console.log(Years);
     }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       } 
    
    render() {
            return ( 
                <div>
                    <Section_Header header="History Filter" />
                    by Year
                    By Team
                    By Opposition
                </div>
             ); 
      }
  }