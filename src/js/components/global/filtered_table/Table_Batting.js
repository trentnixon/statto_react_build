import React from 'react';

import Section_Header from "../Section_Header";
import Table_Row from "./Table_Row_Batting";

import {List} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
var _ = require('lodash');

import {collect_Team_Names} from "../../../actions/career"

const styles ={
    list:{
        margin:'10px -20px',
        padding:'0px',
        color:'#383838',
    },
    hintStyle:{
      color:'#383838',
      fontWeight:100,
      fontSize:14,
    },
    underlineStyle:{
      borderColor :'#383838',
    },
    inputStyle:{
      color:'#383838',
    },
    underlineFocusStyle:{
      borderColor :'#383838',
    }
}


export default class ListExampleNested extends React.Component {

    state = {
      open: false,
      data:this.props.TableData
    };

    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    handleChange(event, value){
        console.log(this.props.TableData, value)
        if(value.length > 2){
          const filtered = _.filter(this.props.TableData, function(o) {
            console.log(o.Team)
            return o.Team.toLowerCase().indexOf(value) > -1;
          });
            if(filtered.length > 0){
              this.setState({
                data : filtered,
              });
            }

        } else{
          this.setState({
            data : this.props.TableData,
          });
        }
        
    }
  render() {

    return (
      <div>
         <MuiThemeProvider>
            <TextField
              hintText={this.props.Filter}
              onChange={this.handleChange.bind(this)}
              underlineFocusStyle={styles.underlineFocusStyle}
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              fullWidth={true}
            />
          </MuiThemeProvider>
       
        <MuiThemeProvider>
          <List  style={styles.list} >
            <Table_Row 
                data={this.state.data}
                NestedDisplay={this.props.NestedDisplay}
            />
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}