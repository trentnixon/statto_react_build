import React from 'react';

import Section_Header from "../Section_Header";
import {List, ListItem} from 'material-ui/List';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinkToScoreCard from "../../scorecards/components/Link_to_Scorecard";

const styles ={
    listItem:{
        color:'#383838',
        margin: '5px 5px 0',
        padding: '10px',
        backgroundColor:'white',
        zIndex:'0',
    },
    Secondary:{},
    nested:{
      padding:'0px 7px 0px',
      marginBottom:'10px',
    },
    NestedlistItem:{ 
       
    },
    NestedinnerDivStyle:{
      color:'#383838',
      fontSize:'.9em',
      marginLeft:0,
      padding:'5px 15px 0',
    },
    innerDivStyle:{
      color:'#383838',
      padding:'15px 5px 7px 15px',
    },
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
                        className="List-Of-Teams-Header"
                        primaryText={
                                  <div class="row ">
                                      <div class="col-xs-7 nopadding white"> Team </div>
                                      <div class="col-xs-2 nopadding white text-center"> Runs</div>
                                      <div class="col-xs-2 nopadding white text-center">BF</div>
                                      <div class="col-xs-1 nopadding white"> </div>
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
                        className="List-Of-Games"
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
                
                primaryText={
                    <div class="row">
                        <div class="col-xs-12 nopadding"> <h4>{TableRow.Team.length > 25 ? TableRow.Team.substring(0,25)+'...' : TableRow.Team}  <span><i class="material-icons">account_circle</i> {TableRow.INN} </span>  </h4></div>
                    </div> 
                }
                
                secondaryText={
                        <div class="row Secondary">
                            <div class="col-xs-3 nopadding tone2"> {TableRow.Runs} Runs  </div>
                            <div class="col-xs-3 nopadding  tone1"> AVG : {TableRow.Avg != 'Infinity' ? TableRow.Avg : '*'} </div>
                            <div class="col-xs-3 nopadding  tone2"> SR : {TableRow.SR}   </div>
                            <div class="col-xs-3 nopadding  tone1"> BF : {TableRow.Balls}  </div>
                        </div>
                }
                secondaryTextLines={2}
                initiallyOpen={false}
                primaryTogglesNestedList={true}
                nestedItems={Nested}
                style={styles.listItem}
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