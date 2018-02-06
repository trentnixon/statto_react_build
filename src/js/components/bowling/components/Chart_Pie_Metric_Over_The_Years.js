import React from "react";
import Full_Pie from "../../global/recharts/pieCharts/full_pie";

let data=[];
export default class Pie_strikeRate_over_the_years extends React.Component {

    constructor() { super();  }

    componentWillMount(){}
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        data=[]
        this.props.data.map((year,i)=>{
            if (isFinite(year[this.props.filter])) {
             data.push({'name':year.Year, 'value':parseFloat(year[this.props.filter])})
            }
        })
        console.log(data);
            return ( 
                <div>
                     <Full_Pie data={data}/>
                </div>
             ); 
      }
  }