import React from "react";
import FontAwesome from 'react-fontawesome';

import Wrapper from "../../global/wrapper";
import Section_Header from "../../global/Section_Header";
import Simple_Line from "../../global/recharts/lineCharts/Simple_Line";
import Content_Pod from "../../global/Expandable_Panel/content_pod";

const Trending_icon={
    meh:{icon:<FontAwesome name='meh-o'  className='Emoticon WorldRanking tone2'/>},
    smile:{icon:<FontAwesome name='smile-o'  className='Emoticon WorldRanking tone3'/>},
    frown:{icon:<FontAwesome name='frown-o'  className='Emoticon WorldRanking tone4'/>},
}

let current, best=99999, worst=0, difference, CurrentIcon=Trending_icon.meh.icon;
export default class Batting_Career_World_Ranking_Progression extends React.Component {

    constructor() { super();  }
    difference (a, b) { return Math.abs(a - b); }

    componentWillMount(){ 
          
            current = this.props.Rankings["0"].ranking;

            this.props.Rankings.map((ranking,i)=>{
                if(ranking.ranking < best){best = ranking.ranking;}
                if(ranking.ranking > worst && ranking.ranking != 0){worst = ranking.ranking;}
            })

            difference = this.difference(current,best)
            if(difference == 0){CurrentIcon=Trending_icon.smile.icon}
            else if(difference  < 200){CurrentIcon=Trending_icon.smile.icon}
            else if(difference  < 500){CurrentIcon=Trending_icon.meh.icon}
            else if(difference  > 500){CurrentIcon=Trending_icon.frown.icon}
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
            <div>
                    <div class="row world_Ranking_Emoticons" > 
                        <div class="col-xs-4">
                        <h4>Current</h4>    
                            {CurrentIcon}
                            <h3>{current}</h3>
                        </div>
                        <div class="col-xs-4">
                            <h4>Best</h4>
                            {Trending_icon.smile.icon}
                            <h3>{best}</h3>
                        </div>
                        <div class="col-xs-4">
                            <h4>Lowest</h4> 
                            {Trending_icon.frown.icon}
                            <h3>{worst}</h3>
                        </div>
                    </div>
            </div>
        ); 
      }
  }