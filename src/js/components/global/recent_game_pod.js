import React from "react";

import Link_To_Scorecard from "../scorecards/components/Link_to_Scorecard";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Display_Recent_Games_Pod extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            // console.log(this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
    }
    
    render() {
            return ( 
               
                <div class={"recent-game-item "+ this.props.width}>
                    <div>
                    <CSSTransitionGroup
                        transitionName="content_pod"
                        transitionAppear={true}
                        transitionEnter={false}
                        transitionLeave={false}
                        transitionEnterTimeout={700}
                        transitionLeaveTimeout={200}
                        transitionAppearTimeout={0}
                    >
                    
                    <div class="game-header">
                        <div class="col-xs-11 nopadding">
                            <h4>{this.props.Team} <small class="tone3">vs</small> {this.props.Opposition}</h4>
                            <h5>Date : {this.props.Date}</h5>
                        </div>
                        <div class="col-xs-1 nopadding ">
                            <Link_To_Scorecard ID={this.props.ID}/>
                        </div>
            
                        <div class="col-xs-2 info">{this.props.Runs} <br />Runs</div>
                        <div class="col-xs-4 info">{this.props.BallsFaced} <br /> Balls Faced </div>
                        <div class="col-xs-3 info">{this.props.BowlingFigures} <br /> Figures </div>
                        <div class="col-xs-3 info">{this.props.OversBowled} <br /> Overs</div>
                    </div>
                    
                    </CSSTransitionGroup>
                    </div>
                </div>
                
                
             ); 
      }
  }