import React from "react";
import Section_Header from "../global/Section_Header";


export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
            <div>
                <Section_Header header="Goals" />
                <div class="darkWrapper">
                    <Section_Header header=" Wickets" />
                        Wickets goals
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Runs Conceded and Overs bowled" />
                        Wickets goals
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" A,E,S" />
                        Wickets goals
                </div>
            </div>
             ); 
      }
  }