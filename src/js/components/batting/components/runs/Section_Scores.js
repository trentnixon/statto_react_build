import React from "react";

// Get Components
import Chart_Bubble_Scores from "./Chart_Bubble_Runs";

export default class batting_runs extends React.Component {

    constructor() { super();  }
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div class="darkWrapper">
                       <Chart_Bubble_Scores {... this.props}/>


                       High scores
                        Chart of top 10 highest scores, oppo , year etc

                        SECTION
                        Run break down : 10,20,3 etc. Clicks through to table of data.

                </div>
             ); 
      }
  }