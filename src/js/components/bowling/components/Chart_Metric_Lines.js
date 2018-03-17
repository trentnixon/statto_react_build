import React from "react";
import Double_LineChart from "../../global/recharts/lineCharts/Line_Chart_2";


let data,key1,key2;
export default class batting_runs extends React.Component {

    constructor() { super();  }
    // Add to component as to specific

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        data = this.props.data;
        key1 = this.props.dataKey1;
        key2 = this.props.dataKey2;

            return ( 
                <div>
                    <Double_LineChart 
                        Data={data} 
                        dataKey1={key1} 
                        dataKey2={key2}
                    />
                </div>
             ); 
      }
  }