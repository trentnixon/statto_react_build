import React from "react";
import Section_Header from "../../../global/Section_Header";

export default class batting_career extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            //console.log( this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <Section_Header header="Batting Innings" />
                                Innings Count 
                                PC- Innings by Year
                                last @ bat (3)

                                Section
                                Average and SR
                                PC averages @ years
                                LC- average vs SR


                                Section
                                N/Os
                                Ducks
                                        link through to table of teams, year etc

                                Section
                                Bals Faced
                                Average Balls Face
                                LC - balls face against runs scored
                                BC - stacked balls vs runs

                </div>
             ); 
      }
  }