import React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
var _ = require('lodash');

/** Styles  */
const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
    slide: {
      padding: 10,
    },
    tabs:{
        color:'#e9e9e9'
    },
    inkbar:{
        backgroundColor:'#bebb5b'
    }
  };

// actions 
import {breadcrumbs} from  "../../actions/ui";


export default class batting_career extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          slideIndex: 0,
        };
      }
    
      handleChange = (value) => {
        this.setState({
          slideIndex: value,
        });
      };
    componentWillMount(){ 
       // set BC
       breadcrumbs('keeping > Career','parent');
      
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <div class="row">
                        <SwipeableViews
                            index={this.state.slideIndex}
                            onChangeIndex={this.handleChange}
                        >

                        <div>
                        Panel 1
                        </div>
                        
                        <div style={styles.slide}>
                        Panel 2
                        </div>

                        <div style={styles.slide}>
                        Panel 3
                        </div>

                        <div style={styles.slide}>
                           Panel 4
                        </div>

                        </SwipeableViews>
                         

                        <div class="Tabs"> 
                        <MuiThemeProvider>
                            <Tabs
                                onChange={this.handleChange}
                                value={this.state.slideIndex}
                                className="StattoTabs"
                                inkBarStyle={styles.inkbar}
                            >
                                    <Tab label="Overview" value={0} style={styles.tabs} className="StattoTab" />
                                    <Tab label="Teams" value={1} />
                                    <Tab label="Scorecard" value={2} />
                                    <Tab label="Stats" value={3} />
                            </Tabs>
                        </MuiThemeProvider>
                        </div>
                        
                        </div>
                    </div>
             ); 
      }
  }