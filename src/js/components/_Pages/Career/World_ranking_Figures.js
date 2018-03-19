import React from "react";
import Wrapper from "../../global/wrapper";
import Section_Header from "../../global/Section_Header";
import Simple_Line from "../../global/recharts/lineCharts/Simple_Line";
import Content_Pod from "../../global/Expandable_Panel/content_pod";

let current, best=99999, worst=0;
export default class Batting_Career_World_Ranking_Progression extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log(this.props.Rankings["0"].ranking);

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
                <Section_Header header="World Rankings" />
                
                <Wrapper>
                    <div class="row"> 
                        <div class="col-xs-4">
                            <h4>Current</h4>
                            {current}
                        </div>
                        <div class="col-xs-4">
                            <h4>Best</h4>
                            {best}
                        </div>
                        <div class="col-xs-4">
                            <h4>Lowest</h4>
                            {worst}
                        </div>
                    </div>
                </Wrapper>
            </div>
        ); 
      }
  }