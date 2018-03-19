import React from "react";

import Simple_Line from "../../global/recharts/lineCharts/Simple_Line";

export default class Batting_Career_World_Ranking_Progression extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
                <div class="Header_Line_Chart">
                 <Simple_Line 
                        Data={this.props.Rankings} 
                        dataKey={this.props.dataKey}  
                        Theme='Light'
                    />
                </div>
        ); 
      }
  }