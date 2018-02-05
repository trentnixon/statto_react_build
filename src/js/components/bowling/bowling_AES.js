import React from "react";
import Section_Header from "../global/Section_Header";

// Import Components
import Triple_Line from "./components/Chart_Line_avg_sr_ec";

export default class batting_runs extends React.Component {

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
            <div>
                <div class="darkWrapper">
                        <Section_Header header=" Average, Economy and Strike rate." />
                        <Triple_Line {...this.props} />
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Average" />
                        pie chat, average over years
                        line chart, career average against aveeage over time
                        Best average against team, more than 2 games
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Economy" />
                    pie chat, average over years
                        line chart, career average against aveeage over time
                        Best average against team, more than 2 games
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Strike rate" />
                    pie chat, average over years
                        line chart, career average against aveeage over time
                        Best average against team, more than 2 games
                </div>
            </div>
             ); 
      }
  }