import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Amend_Team,force_filter_update} from "../../../actions/filters"

const select={
    zIndex:999,
}
/**
 * With the `maxHeight` property set, the Select Field will be scrollable
 * if the number of items causes the height to exceed this limit.
 */
let items=false;
export default class DropDownMenuLongMenuExample extends Component {
  
    state = {
        value: this.props.storedValue,
      };

  handleChange = (event, index, value) => {
   
console.log(value, this.props.type)
    Amend_Team(value, this.props.type);
   
    force_filter_update(true)
   
    this.setState({value});
  };

  componentWillMount(){ 
    items = this.props.list;
    //console.log(this.props.list, this.props.type)
 }

  render() {
    return (
        <MuiThemeProvider >
            <SelectField
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                maxHeight={200}
                listStyle={select}
            >
                {
                        this.props.list.map((label,i)=>{
                            return(
                                <MenuItem value={i} key={i} primaryText={label} />
                            )
                        })
                }
            </SelectField>
      </MuiThemeProvider >
    );
  }
}