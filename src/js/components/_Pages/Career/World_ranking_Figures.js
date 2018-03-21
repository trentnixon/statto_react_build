import React from "react";
import FontAwesome from 'react-fontawesome';

import Wrapper from "../../global/wrapper";
import Section_Header from "../../global/Section_Header";
import Simple_Line from "../../global/recharts/lineCharts/Simple_Line";
import Content_Pod from "../../global/Expandable_Panel/content_pod";

let current, best=99999, worst=0;
export default class Batting_Career_World_Ranking_Progression extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
          //  console.log(this.props.Rankings["0"].ranking);

            current = this.props.Rankings["0"].ranking;
            this.props.Rankings.map((ranking,i)=>{
                if(ranking.ranking < best){best = ranking.ranking;}
                if(ranking.ranking > worst){worst = ranking.ranking;}
            })
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
            <div>
                    <div class="row world_Ranking_Emoticons" > 
                        <div class="col-xs-4">
                        <h4>Current</h4>
                        <FontAwesome 
                            name='meh-o'
                            className='Emoticon WorldRanking tone2'
                        />
                            
                            <h3>{current}</h3>
                        </div>
                        <div class="col-xs-4">
                            <h4>Best</h4>
                            <FontAwesome name='smile-o'  className='Emoticon WorldRanking tone3'/>
                            <h3>{best}</h3>
                        </div>
                        <div class="col-xs-4">
                            <h4>Lowest</h4> 
                            <FontAwesome name='frown-o' className='Emoticon WorldRanking tone4'/>
                            <h3>{worst}</h3>
                        </div>
                    </div>
            </div>
        ); 
      }
  }