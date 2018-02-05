import React from "react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

let batting=[],bowling=[],keeping=[]; 
export default class Display_Dashboard extends React.Component {

    constructor() { super();  }
    
     createWR(data){
      let WRArray=[];
      let HigestRanking=999999;
      let StartingRankingLastYear=999999;
      let LastPlayingYear=0;
      WRArray['color']='tone3';
      data.map((rank,i)=>{
                 //   console.log(rank.ranking)
                 // Find Current   
                 if(i == 0){
                        WRArray['current']=parseInt(rank.ranking);
                        LastPlayingYear=parseInt(rank.Year);
                    }
               
                // Find Previous Rank    
                    if(i == 1){
                        WRArray['previous']=parseInt(rank.ranking);
                    }    
                // Find higest in last playing year    
                    if(parseInt(rank.Year) == LastPlayingYear){
                        StartingRankingLastYear = parseInt(rank.ranking);
                        WRArray['StartingRankingLastYear']=StartingRankingLastYear;
                    }
                // Find Career High
                     if(parseInt(rank.ranking) < HigestRanking){
                         
                        HigestRanking = parseInt(rank.ranking)
                        WRArray['highest']=HigestRanking;
                        console.log(rank.ranking, HigestRanking)
                    }
            })

            if(WRArray['current'] < WRArray['previous']){WRArray['color']='tone2';}

            console.log(WRArray);
            return WRArray;
    }

    componentWillMount(){
        
       const WR_Path = this.props.Player;
        //console.log(WR_Path.batting_world_ranking)
        console.log(WR_Path.bowling_world_ranking)
        //console.log(WR_Path.keeping_world_ranking)

        batting = this.createWR(WR_Path.batting_world_ranking)
        bowling = this.createWR(WR_Path.bowling_world_ranking)
        keeping = this.createWR(WR_Path.keeping_world_ranking)

        console.log(batting);


    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
          //  console.log(nextProps.Player.PLAYER_META.GAME_COUNT) 
       }
    
    render() {
            return ( 
                <div class="row">
                    <div class={"world_ranking_table "+ this.props.width}>
                       
                            <CSSTransitionGroup
                                transitionName="content_pod"
                                transitionAppear={true}
                                transitionEnter={false}
                                transitionLeave={false}
                                transitionEnterTimeout={700}
                                transitionLeaveTimeout={200}
                                transitionAppearTimeout={0}
                            >
                            
                            <div class="row world_ranking_row world_ranking_header">
                                <div class="col-xs-2"></div>
                                <div class="col-xs-2">2018</div>
                                <div class="col-xs-2">Last</div>
                                <div class="col-xs-3">Current</div>
                                <div class="col-xs-3">Highest</div>
                            </div>
            
                            <div class="row world_ranking_row">
                                <div class="col-xs-2 Table_label">BT</div>
                                <div class="col-xs-2">{batting.StartingRankingLastYear}</div>
                                <div class="col-xs-2">{batting.previous}</div>
                                <div class={"col-xs-3 " + batting.color} >{batting.current}</div>
                                <div class="col-xs-3">{batting.highest}</div>
                            </div>
                            <div class="row world_ranking_row">
                                <div class="col-xs-2 Table_label">BW</div>
                                <div class="col-xs-2">{bowling.StartingRankingLastYear}</div>
                                <div class="col-xs-2">{bowling.previous}</div>
                                <div class={"col-xs-3 " + bowling.color} >{bowling.current}</div>
                                <div class="col-xs-3">{bowling.highest}</div>
                            </div>
                            <div class="row world_ranking_row">    
                                <div class="col-xs-2 Table_label">KP</div>
                                <div class="col-xs-2">{keeping.StartingRankingLastYear}</div>
                                <div class="col-xs-2">{keeping.previous}</div>
                                <div class={"col-xs-3 " + keeping.color} >{keeping.current}</div>
                                <div class="col-xs-3">{keeping.highest}</div>
                            </div>

                            </CSSTransitionGroup>
                            </div> 
                </div>
             ); 
      }
  }