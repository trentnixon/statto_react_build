import React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
var _ = require('lodash');


// Import Components
// import Teams from "./components/teams/bowling_teams";
//import Oppo from "./components/oppo/bowling_oppo";
//import Wickets from "./components/Slide_1_Wickets/Slide_Wickets";

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
        color:'#e9e9e9',
        fontSize:13, 
        lineHeight:'1.5em',
    },
    inkbar:{
        backgroundColor:'#e9e9e9'
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
       breadcrumbs('bowling > Career','parent');
      
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div id="Page_Career">
                    <div class="row">
                        <SwipeableViews
                            index={this.state.slideIndex}
                            onChangeIndex={this.handleChange}
                        >

                        <div  style={styles.slide}>
                            Panel 1
                        </div>
                        
                        <div style={styles.slide}>
                            Panel 2
                        </div>

                        <div style={styles.slide}>
                        </div>

                        <div style={styles.slide}>
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
                                    <Tab label="Wickets" value={0} style={styles.tabs} className="StattoTab" />
                                    <Tab label="Inn" value={1} style={styles.tabs} className="StattoTab"/>
                                    <Tab label="Teams" value={2} style={styles.tabs} className="StattoTab"/>
                                    <Tab label="Oppo" value={3} style={styles.tabs} className="StattoTab"/>
                            </Tabs>
                        </MuiThemeProvider>
                        </div>
                        
                        </div>
                    </div>
             ); 
      }
  }