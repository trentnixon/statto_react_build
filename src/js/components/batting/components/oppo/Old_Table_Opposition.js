import React from 'react';

import Section_Header from "../../../global/Section_Header";
import {List} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
var _ = require('lodash');

import {collect_Team_Names} from "../../../../actions/career";


import Table_Row from "./Table_Row";

const styles ={
    list:{
        marginBottom:0,
        marginLeft:0,
        marginRight:0,
        marginTop:0,
        padding:'0 0 0 0',
        color:'#e9e9e9',
    },
    hintStyle:{
      color:'#e9e9e9',
      fontWeight:100,
      fontSize:14,
    },
    underlineStyle:{
      borderColor :'#e9e9e9',
    },
    inputStyle:{
      color:'#e9e9e9',
    },
    underlineFocusStyle:{
      borderColor :'#e9e9e9',
    }
}


export default class ListExampleNested extends React.Component {

    state = {
      open: false,
      data:this.props.Player.opposition_stats
    };
/*
    handleToggle = () => {
      
    };

    handleNestedListToggle = (item) => {
      this.setState({
        open: item.state.open,
      });
    };
*/
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    handleChange(event, value){
       // console.log(event, value, this.props.Player.opposition_stats)
        if(value.length > 2){
          const filtered = _.filter(this.props.Player.opposition_stats, function(o) {
            return o.Team.toLowerCase().indexOf(value) > -1;
          });
        // console.log(filtered.length);
          
            if(filtered.length > 0){
              this.setState({
                data : filtered,
              });
            }

        } else{
          this.setState({
            data : this.props.Player.opposition_stats,
          });
        }
        
    }
  render() {

    return (
      <div>
        <div class="lightWrapper"> 
          
          <MuiThemeProvider>
            <TextField
              hintText="Filter Teams"
              onChange={this.handleChange.bind(this)}
              underlineFocusStyle={styles.underlineFocusStyle}
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              fullWidth={true}
            />
          </MuiThemeProvider>
       
        </div>
      <div class="darkWrapper">  
       <Section_Header header="Opposition" />
        <MuiThemeProvider>
          <List  style={styles.list} >
            <Table_Row data={this.state.data}/>
          </List>
        </MuiThemeProvider>
      </div>
        
      </div>
    );
  }
}