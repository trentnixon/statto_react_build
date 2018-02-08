import React from 'react';

import Section_Header from "../Section_Header";
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinkToScoreCard from "../../scorecards/components/Link_to_Scorecard";

const styles ={
    listItem:{
        color:'#e9e9e9',
        padding:'0 0 0 0',
        marginBottom:0,
    },
    Secondary:{
      display:'block', 
      color:'white',
      fontSize: '11px',
      lineHeight: '20px',
      height: 'auto',
      margin: '2px -10px',
    },
    nested:{
      padding:'15px 4px 7px',
      backgroundColor: 'rgba(44, 44, 44, .9)',
      marginBottom:'20px',
      borderBottom:'.5px solid #e9e9e9'
    },
    NestedlistItem:{

    },
    NestedinnerDivStyle:{
      color:'#e9e9e9',
      fontSize:'13px',
      marginLeft:0,
      padding:'5px 15px'
    },
    innerDivStyle:{
      color:'#e9e9e9',
      padding:'15px 5px 7px 15px',
      borderBottom:'.5px solid #e9e9e9'
    },
    badge:{
      margin: '0px 0 0 3px',
      backgroundColor: '#5b5ebe',
      padding: '3px 0px',
      borderRadius: '10px',
      fontSize: '9px',
      fontWeight: '100',
      position: 'absolute', 
      width: '15px',
      height: '15px',
      lineHeight: '1em',
      textAlign: 'center',
      marginTop: '-8px',
      marginLeft: '-2px',
    }
}

let Nested=[];
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
{ 
this.props.data.map((TableRow,i)=>{
        
        if(TableRow.INN > 0)
          {        
            Nested=[<ListItem
                        key={0}
                        style={styles.NestedlistItem}
                        innerDivStyle={styles.NestedinnerDivStyle}
                        primaryText={
                                  <div class="row">
                                      <div class="col-xs-7 nopadding tone2"> Team </div>
                                      <div class="col-xs-2 nopadding tone2 text-center"> Runs</div>
                                      <div class="col-xs-2 nopadding tone2 text-center">BF</div>
                                      <div class="col-xs-1 nopadding tone2"> </div>
                                  </div>
                        }
                        style={styles.listItem}
            />];

// Create Nested List
    TableRow.Games.map((game,i)=>{
        
        Nested.push(<ListItem
                        key={game.GameID+i}
                        style={styles.NestedlistItem}
                        innerDivStyle={styles.NestedinnerDivStyle}
                        primaryText={
                                        <div class="row">
                                              <div class="col-xs-7 nopadding "> {game[this.props.NestedDisplay]} </div>
                                              <div class="col-xs-2 nopadding text-center"> {game.Batting_Runscored}</div>
                                              <div class="col-xs-2 nopadding text-center"> {game.Batting_BallsFaced}</div>
                                              <div class="col-xs-1 nopadding text-center"> <LinkToScoreCard ID={game.GameID} /> </div>
                                          </div>
                        }
                        style={styles.listItem}
                    />)  
    })

    
    return(<div key={i}>
            <ListItem
                style={styles.listItem}
                primaryText={
                    <div class="row">
                        <div class="col-xs-12 nopadding"> {TableRow.Team} <span style={styles.badge} >{TableRow.INN}</span> </div>
                    </div>
                }
                
                secondaryText={
                        <div class="row" style={styles.Secondary}>
                            <div class="col-xs-3 nopadding tone1"> Runs {TableRow.Runs} </div>
                            <div class="col-xs-3 nopadding tone1"> AVG {TableRow.Avg} </div>
                            <div class="col-xs-3 nopadding tone1"> SR {TableRow.SR}  </div>
                            <div class="col-xs-3 nopadding tone1"> BF {TableRow.Balls} </div>
                        </div>
                }
                secondaryTextLines={2}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={Nested}
                nestedListStyle={styles.nested}
                innerDivStyle={styles.innerDivStyle}
                className="ListItem"
            />
        </div>)
        } // End IF
    }) // Close .map
}
            </div>
        ); 
    }
}