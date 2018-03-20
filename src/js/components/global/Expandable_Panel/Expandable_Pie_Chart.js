import React from "react";
import Full_Pie from "../recharts/pieCharts/full_pie";

let Display_Pie,data=[];
export default class Expandable_Pie extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        Display_Pie='',data=[];
        if(this.props.data){
            this.props.data.map((year,i)=>{
                if (isFinite(year[this.props.filter])) {
                    data.push({'name':year.Year, 'value':parseFloat(year[this.props.filter])})
                }
            })
        }

        if(data.length > 0){Display_Pie = <div class="col-xs-12 Expandable_Chart"><Full_Pie data={data} Theme="Light" /></div>}
       
    }
    
    render() {
            return ( 
                <div> {Display_Pie} </div>
             ); 
      }
  }