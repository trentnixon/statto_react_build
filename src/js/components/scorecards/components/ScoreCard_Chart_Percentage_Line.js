import React from "react";

export default class scorecard_chart_line extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }

    render() {

            return ( 
                <div class="scorecard_chart_line">
                    <div class="row nomargin">
                        <div class="col-xs-4 nopadding">{this.props.title}</div>
                        
                        <div class="col-xs-2 text-right">{this.props.Balls}</div>
                        <div class="col-xs-2 perc">({this.props.BallsPercentage.toFixed(1)}%)</div>

                        <div class="col-xs-2 text-right">{this.props.Runs}</div>
                        <div class="col-xs-2 perc">({this.props.RunsPercentage.toFixed(1)}%)</div>    
                    </div>
                </div>
             ); 
      }
  }