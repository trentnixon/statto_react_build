import React from "react";
import Identifier from "./News_Identifier";
import LinkToScorecard from "../scorecards/components/Link_to_Scorecard";

export default class News_Milestone extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        console.log(this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        let batting='',bowling='',keeping='',stumping='';
        if(this.props.item.Runs_Bare){
            batting=<div class="col-xs-6 nopadding">{this.props.item.Runs_Bare} off {this.props.item.Batting_BallsFaced} Balls</div>;
        }
        if(this.props.item.wickets){
            bowling=<div class="col-xs-6 nopadding">{this.props.item.wickets} for {this.props.item.for} off {this.props.item.overs}</div>;
        }
        if(this.props.item.keeper_Caught){
            keeping=<div class="col-xs-6 nopadding">{this.props.item.keeper_Caught} Catches</div>;
        }
        if(this.props.item.keeper_Stumping){
            stumping=<div class="col-xs-6 nopadding">{this.props.item.keeper_Stumping} Stumpings</div>;
        }


            return ( 
                <li>
                    <div class="col-xs-1 nopadding">
                        <Identifier 
                            ID={this.props.item.type}
                            color="#88acd8"
                        />
                    </div>
                    <div class="col-xs-11 nopadding details">
                        {batting}
                        {bowling}
                        {keeping}
                        {stumping}
                        
                    </div>
                    <div class="col-xs-10 nopadding">{this.props.item.team} vs {this.props.item.Opposition}</div>
                    <div class="col-xs-2"><LinkToScorecard ID={this.props.item.Game_ID} /></div>
                </li>
             ); 
      }
  }