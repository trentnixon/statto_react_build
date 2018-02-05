import React from "react";
import { connect } from "react-redux";

import Filter_select from "./Filter_Select";

export default class Display_History_Filter extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
                <div class="filter-group row">
                    <h2>
                        <i class="material-icons black">people_outline</i>
                     Select an Opposition</h2>
                    <Filter_select 
                        list={this.props.UI.filter.opposition}
                        storedValue={this.props.UI.filter.selectedTeam}
                        type="STORE_SELECTED_OPPOSITION"
                    />
                </div>
             ); 
      }
  }