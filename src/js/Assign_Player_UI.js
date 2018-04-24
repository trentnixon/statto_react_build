import React from "react";
import ReactDOM from "react-dom";
import Naked_Wrapper from "./components/global/Naked_wrapper";

//import { HashRouter as Router, Route, Link} from 'react-router-dom';
//import { Provider } from "react-redux";

import {RegisteredPlayers,Fetch_Player_Data,Register_Player_Name,Fetch_Statto_Meta} from './actions/login';

// import {StorePlayerProfile, Register_Player_Name, Register_Player_WP_ID, Reigster_Statto_Player_ID, } from "../../../actions/login";

RegisteredPlayers();
Fetch_Statto_Meta(); 

let Username='Fetching';
export default class Assign_Player_UI extends React.Component {

    constructor() { super();  
        this.state = {
			rostered:false, 
			Searching:false,
			PlayerName:false
		};
    }
    
    FindNewPlayer(data){
        if(data.UI.LMS_REGISTERED  && this.state.Searching == false )
        {     
         let merged = Object.assign(...data.UI.LMS_REGISTERED);
         merged.map((player,i)=>{
                if(player.LMSID == data.match.params.playerid)
                {
                    this.setState({ Searching:true,PlayerName:player.username  })
                    Register_Player_Name(player.username);
                    Fetch_Player_Data(player.LMSID);
                }
            })
     }
    }

    componentWillMount(){  
        this.FindNewPlayer(this.props)
        Username = this.props.match.params.playerid
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        
        if(nextProps.Player.PLAYER_META.UserName){Username =nextProps.Player.PLAYER_META.UserName }
        this.FindNewPlayer(nextProps)
    }
    
    render() {
            return ( 
                <Naked_Wrapper>
                    <div class="assign_player">
                        <div class="col-xs-12 text-center nopadding">
                            <img src={this.props.UI.Statto_Logo_Full_White} />
                        </div>
                        <div class="col-xs-12 ">
                            <h4>Loading Player <br /> {Username}</h4>
                            <div class="btn-statto">
                                <a href="#/">
                                    <p>Find Another Player!</p>
                                    <i class="material-icons white">launch</i>
                                </a>
                            </div>
                        </div>
                        <div class="col-xs-12 ">
                            Save Statto to your Home Screen.
                        </div>
                   </div>
                </Naked_Wrapper>
             ); 
      }
  }