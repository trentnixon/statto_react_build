import React from "react";

import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Section_Header from "../Section_Header";
import Filter_Checkbox from "./Filter_Checkbox";

const styles = {
    
    checkbox: {

      
    },
    label: {
        color:'white',
    }
  };


let Years, LogYears=[];
export default class Display_History_Filter extends React.Component {

    constructor() { super();  }

    componentWillMount(){ 
      //  console.log(this.props.UI.filter.years)

        Years = this.props.UI.filter.years.map((Year,i)=>{
            return(
                        <div key={i}>
                            <Filter_Checkbox
                                label={Year.Year}
                                value={Year.Year}
                                defaultChecked={Year.Value}
                                path="Year"
                                filter={this.props.UI.filter.years}
                                filtered_Json={this.props.Player.filtered_json}
                            />
                        </div>
                    )
            })
     }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       } 
    
    render() {
            return ( 
                <div class="filter-group row">
                    <h2> <i class="material-icons black">perm_contact_calendar</i> Selected Years</h2>
                        {Years}
                </div>
             ); 
      }
  }