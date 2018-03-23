import React from "react";
import FontAwesome from 'react-fontawesome';

import Wrapper from "../../global/wrapper";
import Section_Header from "../../global/Section_Header";
import Simple_Line from "../../global/recharts/lineCharts/Simple_Line";
import Content_Pod from "../../global/Expandable_Panel/content_pod";

let current, best=99999, worst=0;
export default class Batting_Career_World_Ranking_Progression extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }  
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
            <div>
                    <div class="row world_Ranking_Emoticons" > 
                        <div class="col-xs-4">
                        <h4>Batting</h4>
                        <FontAwesome 
                            name='meh-o'
                            className='Emoticon WorldRanking tone2'
                        />
                            
                            <h3>{this.props.Player.batting_world_ranking["0"].ranking}</h3>
                        </div>

                        <div class="col-xs-4">
                            <h4>Bowling</h4>
                            <FontAwesome name='smile-o'  className='Emoticon WorldRanking tone3'/>
                            <h3>{this.props.Player.bowling_world_ranking["0"].ranking}</h3>
                        </div>
                        <div class="col-xs-4">
                            <h4>Keeping</h4> 
                            <FontAwesome name='frown-o' className='Emoticon WorldRanking tone4'/>
                            <h3>{this.props.Player.batting_world_ranking["0"].ranking}</h3>
                        </div>
                    </div>
            </div>
        ); 
      }
  }