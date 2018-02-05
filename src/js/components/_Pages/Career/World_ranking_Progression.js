import React from "react";
import Section_Header from "../../global/Section_Header";
import Simple_Line from "../../global/recharts/lineCharts/Simple_Line";
import Content_Pod from "../../global/content_pod";

let current, best=99999, worst=0;
export default class Batting_Career_World_Ranking_Progression extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props.Rankings)
            current = this.props.Rankings[0].ranking;
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
                <div class="darkWrapper">
                    <Section_Header header="World Ranking Progression"  />
                    <Simple_Line Data={this.props.Rankings} dataKey={this.props.dataKey}  />
                    
                </div>
                <div class="row"> 
                <Content_Pod 
                            title="Current"
                            value={current} 
                            sub="" 
                            width="col-xs-4"
                    />
                <Content_Pod 
                            title="Best"
                            value={best} 
                            sub="" 
                            width="col-xs-4"
                    />
                <Content_Pod 
                            title="Lowest"
                            value={worst} 
                            sub="" 
                            width="col-xs-4"
                    />
                </div>
            </div>
        ); 
      }
  }