import React, {Component} from 'react';
import store from "../../store/store";

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const styles = {
  customWidth: {
    width: 150,
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class SelectFieldExampleSimple extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => {
    let RunArray=this.props.Run;
    this.setState({value});

    // console.log("Value Selected  = ", value, this.props.Run)
    RunArray[this.props.position] = parseFloat((value/100).toFixed(2));
    console.log(RunArray)
    store.dispatch({ type:'TEAM_NETWORK_RUN', payload:RunArray })
  }

  componentWillMount(){ }

  render() {

    let chars = _.orderBy(this.props.Roster, ['games'],['desc']);

    return (
      <div class="col-xs-6">
        <MuiThemeProvider>
            <SelectField
            floatingLabelText={"Player "+ (this.props.position+1)}
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth={true}
            > 
            {
                chars.map((player,i)=>{
                        return(<MenuItem key={i} value={player.played} primaryText={player.name} />)
                })
            }
            </SelectField>
        </MuiThemeProvider>
      </div>
    );
  }
}