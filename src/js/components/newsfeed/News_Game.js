import React from "react";
import Identifier from "./News_Identifier";


export default class News_Milestone extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
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
                    <div class="col-xs-12 ">{this.props.item.team} vs {this.props.item.Opposition}</div>
                </li>
             ); 
      }
  }