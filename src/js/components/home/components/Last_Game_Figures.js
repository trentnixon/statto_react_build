import React from "react";
import Section_Header from "../../global/Section_Header";
import Section_Sub_Header from "../../global/Section_Subheader";
import Link_to_scorecard from "../../scorecards/components/Link_to_Scorecard";

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props.Player.last_ten_games["0"])
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="row LastGameFigures">
                        <Section_Header header={'Last Game : '+this.props.Player.last_ten_games["0"].Opposition} />
                        <Section_Sub_Header header={'Played '+ this.props.Player.last_ten_games["0"].timestamp+' days ago'} />
                    <div class="col-xs-6 nopadding">
                        <h2>Runs : {this.props.Player.last_ten_games["0"].Batting_Runscored}</h2>
                        <h4>{this.props.Player.last_ten_games["0"].Batting_BallsFaced} Balls </h4>
                    </div>
                    <div class="col-xs-6 nopadding">
                        <h2>Figures : {this.props.Player.last_ten_games["0"].Bowling_Figures}</h2>
                        <h4>{this.props.Player.last_ten_games["0"].Bowling_OversBowled} Overs </h4>
                    </div>
                    <div class="col-xs-12 nopadding Expandable_Click_through">
                         <Link_to_scorecard ID={this.props.Player.last_ten_games["0"].GameID}/>
                    </div>
                </div>
             ); 
      }
  }