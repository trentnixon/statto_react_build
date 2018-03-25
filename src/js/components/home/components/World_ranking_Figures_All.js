import React from "react";

import { Link } from 'react-router-dom'
import Naked_Wrapper from "../../global/Naked_wrapper";


const Trending_icon={
    up:{icon:<i class="material-icons WorldRanking tone3">trending_up</i>},
    down:{icon:<i class="material-icons WorldRanking tone4">trending_down</i>},
    flat:{icon:<i class="material-icons WorldRanking tone2">trending_flat</i>},
}

let batting,bowling,keeping,
    batting_display = Trending_icon.flat.icon,
    bowling_display = Trending_icon.flat.icon,
    keeping_display = Trending_icon.flat.icon;

export default class World_Ranking_Progression extends React.Component {

    constructor() { super();  }
    
    findIcon(now,prev,Trending_icon){
        if(now>prev){
            return Trending_icon.down.icon
        } 
        else if(now<prev){return Trending_icon.up.icon}
        else{return Trending_icon.flat.icon}
    }

    componentWillMount(){ 
        batting = this.props.Player.batting_world_ranking
        bowling = this.props.Player.bowling_world_ranking
        keeping = this.props.Player.keeping_world_ranking
        
        if(batting.length > 1){batting_display = this.findIcon(batting["0"].ranking,batting["1"].ranking,Trending_icon)}
        if(bowling.length > 1){bowling_display = this.findIcon(bowling["0"].ranking,bowling["1"].ranking,Trending_icon)}
        if(keeping.length > 1){keeping_display = this.findIcon(keeping["0"].ranking,keeping["1"].ranking,Trending_icon)}

        
    }  
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
            <Naked_Wrapper>
                    <div class="row world_Ranking_Emoticons" > 
                        <div class="col-xs-4">
                        <h4>Batting</h4>
                        <Link to={"/"+this.props.Player.PLAYER_META.WP_ID+"/batting/"}>
                            {batting_display}
                        </Link>
                        <h3>{this.props.Player.batting_world_ranking["0"].ranking}</h3>
                        </div>

                        <div class="col-xs-4">
                            <h4>Bowling</h4>
                            <Link to={"/"+this.props.Player.PLAYER_META.WP_ID+"/bowling/"}>
                                {bowling_display}
                            </Link>
                            <h3>{this.props.Player.bowling_world_ranking["0"].ranking}</h3>
                        </div>
                        <div class="col-xs-4">
                            <h4>Keeping</h4> 
                            <Link to={"/"+this.props.Player.PLAYER_META.WP_ID+"/keeping/"}>
                                {keeping_display}
                            </Link>
                            <h3>{this.props.Player.keeping_world_ranking["0"].ranking}</h3>
                        </div>
                    </div>
            </Naked_Wrapper>
        ); 
      }
  }