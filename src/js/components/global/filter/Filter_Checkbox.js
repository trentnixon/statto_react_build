import React from "react";

import Checkbox from 'material-ui/Checkbox';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {Amend_Filter} from "../../../actions/filters";
const styles = {
    
    checkbox: { },
    label: {
        color:'#2c2c2c',
    },
    icon:{
        color:'#bebb5b',
    }
  };


let Years, LogYears=[];
export default class Filter_Checkbox extends React.Component {

    constructor() { super();  }

    updateCheck(e,b) {
        if(b == true){ 
            Amend_Filter(this.props.path, this.props.filter, this.props.value, true, this.props.filtered_Json)
        } else if(b == false){
            Amend_Filter(this.props.path, this.props.filter, this.props.value, false, this.props.filtered_Json)
        }
    }

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ } 
    
    render() {
            return ( 
                <div class="col-xs-4">
                        <MuiThemeProvider >
                            <Checkbox
                                checkedIcon={<Visibility color="#bebb5b" />}
                                uncheckedIcon={<VisibilityOff />}
                                label={this.props.label}
                                labelStyle={styles.label}
                                style={styles.checkbox}
                                defaultChecked={this.props.defaultChecked}
                                onCheck={this.updateCheck.bind(this)}
                            />
                        </MuiThemeProvider >
                        </div>
             ); 
      }
  }