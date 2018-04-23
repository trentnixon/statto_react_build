import React from "react";
import Bar_With_Line from "../../global/recharts/barCharts/Bar_with_line";

let analysis,point;
export default class Form_Bar_With_Line extends React.Component {

    constructor() { super();  }
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {

      //  console.log(this.props.FORM_GUIDE.Form_Breakdown);

            return ( 
                <Bar_With_Line 
                    data={this.props.FORM_GUIDE.Form_Breakdown}
                    bar="Expected"
                    line="Actual"
                    name="Item"
                />
             ); 
      }
  }