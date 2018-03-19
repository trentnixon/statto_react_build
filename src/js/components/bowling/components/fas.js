import React from "react";
import Section_Header from "../../global/Section_Header";

import Content_Pod from "../../global/Expandable_Panel/content_pod";

let two=0,three=0,four=0,five=0,six=0,seven=0;
export default class Bowling_fas extends React.Component {

    constructor() { super();  }
    
    findNum(data,num){
        let Value=0, Club;

        data.map((game,i)=>{
            if(game.wickets == num)
                {
                    Value++;
                }
        })
        return Value;
    }

    componentWillMount(){ 

        two =  this.findNum(this.props.Player.raw_json, 2)
        three =  this.findNum(this.props.Player.raw_json, 3)
        four =  this.findNum(this.props.Player.raw_json, 4)
        five =  this.findNum(this.props.Player.raw_json, 5)
        six =  this.findNum(this.props.Player.raw_json, 6)
        seven =  this.findNum(this.props.Player.raw_json, 7)
          
            
    }

    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Section_Header header="Achievements" />
                    <div class="row">
                        <Content_Pod title="2 for's" value={two}  width="col-xs-6"/>
                        <Content_Pod title="3 for's" value={three}  width="col-xs-6"/>
                        <Content_Pod title="4 for's" value={four}  width="col-xs-6"/>
                        <Content_Pod title="5 for's" value={five}  width="col-xs-6"/>
                        <Content_Pod title="6 for's" value={six}  width="col-xs-6"/>
                        <Content_Pod title="7 for's" value={seven}  width="col-xs-6"/>
                    </div>     
                </div>
             ); 
      }
  }