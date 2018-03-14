import React from "react";
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
var _ = require('lodash');
/** Layout */
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Half_Circle from "../stage/components/Half_Circle_Top";

/** Components  */
import Result_Banner from "./components/ScoreCard_Result_Banner";
import Score_Summary from "./components/ScoreCard_Score_Summary";
import Scorecard_Meta_Details from "./components/ScoreCard_Meta_Details";
import Scorecard_Teamsheet from "./components/ScoreCard_TeamSheets";
import Display_The_Scorecard from "./components/ScoreCard_Display";
import Game_Stats from "./components/ScoreCard_Stats_Page";
// actions 
import {breadcrumbs} from  "../../actions/ui";
/** Styles  */
const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
    slide: {
      padding: '0 10px',
    },
    tabs:{
        color:'#e9e9e9'
    },
    inkbar:{
        backgroundColor:'#bebb5b'
    }
  };


export default class Display_Scorecard extends React.Component {

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

    componentWillMount(){ breadcrumbs('Scorecard','parent'); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }  
    
    render() {
        
                return ( 
                    <div>
                        <Half_Circle>
                            <Score_Summary SelectedGame={this.props.SelectedGame}/> 
                            <div class="Tabs"> 
                            <MuiThemeProvider>
                                <Tabs
                                    onChange={this.handleChange}
                                    value={this.state.slideIndex}
                                    className="StattoTabs"
                                    inkBarStyle={styles.inkbar}
                                >
                                        <Tab label="Summary" value={0} style={styles.tabs} className="StattoTab" />
                                        <Tab label="Teams" value={1} />
                                        <Tab label="Scorecard" value={2} />
                                        <Tab label="Stats" value={3} />
                                </Tabs>
                            </MuiThemeProvider>
                            </div>
                        </Half_Circle>
                        <Content_Wrapper>
                            <div class="row">
                                <SwipeableViews
                                    index={this.state.slideIndex}
                                    onChangeIndex={this.handleChange}
                                >

                                    <div>
                                        <Scorecard_Meta_Details  SelectedGame={this.props.SelectedGame} />
                                        <Result_Banner SelectedGame={this.props.SelectedGame}/>
                                    </div>
                            
                                    <div style={styles.slide}>
                                        <Scorecard_Teamsheet  SelectedGame={this.props.SelectedGame} />
                                    </div>

                                    <div style={styles.slide}>
                                        <Display_The_Scorecard SelectedGame={this.props.SelectedGame} />
                                    </div>

                                    <div style={styles.slide}>
                                        <Game_Stats SelectedGame={this.props.SelectedGame} />
                                    </div>

                                </SwipeableViews>
                         

                        
                        
                        </div>
                        </Content_Wrapper>
                    </div>
                 );
            }
  }