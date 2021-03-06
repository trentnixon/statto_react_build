import React from "react";
import Section_Header from "../../global/Section_Header";

// Get Actions
import { piechartYears } from "../../../actions/career";
import Full_Pie from "../../global/recharts/pieCharts/full_pie";


let Piechart_Wickets_By_Year;
export default class batting_runs extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        Piechart_Wickets_By_Year = piechartYears(this.props.Player.filtered_json, 'Year', 'wickets');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Section_Header header="Wickets over the Years" />
                    <Full_Pie Theme="Dark" data={Piechart_Wickets_By_Year}/>
                </div>
             ); 
      }
  }