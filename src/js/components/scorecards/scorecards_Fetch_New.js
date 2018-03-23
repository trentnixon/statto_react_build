import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
// Stage
import Section_Header from "../global/Section_Header";
import Wrapper from "../global/wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

import {Fetch_Game} from "../../actions/games";

export default class Fetch_Scorecards extends React.Component {

    constructor() { super();  }
    
    fetchGame(gameID, PlayerID){
        Fetch_Game(gameID,PlayerID)
    }
    componentWillMount(){ 
            this.fetchGame(this.props.match.params.gameID, this.props.match.params.playerid)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <Half_Circle>
                            <div class="row nomargin">
                                <div class="col-xs-12">
                                    <Section_Header header={'Downloading Scorecard '+ this.props.match.params.gameID} />
                                </div>
                            </div>
                    </Half_Circle>
                    <Content_Wrapper AddClass="download_Scorecard">
                        <Naked_Wrapper>
                        
                        <h2 class="tone1"> 
                            <i class='material-icons tone3 text-center'>file_download</i>
                            Downloading the scorecard for {this.props.match.params.gameID} </h2>
                            <MuiThemeProvider>
                                <LinearProgress mode="indeterminate" color='#73b393'/>
                            </MuiThemeProvider>

                            <p class="tone3">This may take a few seconds. <br /> Statto will update once the Game has been verified </p>
                        </Naked_Wrapper>
                    </Content_Wrapper>    
                </div>
             ); 
      }
  }