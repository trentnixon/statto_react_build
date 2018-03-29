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
    
    componentWillMount(){ 
           Username = this.props.match.params.playerid
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
            // console.log(this.props.match.params.playerid , this.props.Player.PLAYER_META.UserName);

    if(this.props.Player.PLAYER_META.UserName){Username =this.props.Player.PLAYER_META.UserName }
   
    if(nextProps.UI.LMS_REGISTERED  && this.state.Searching == false )
        {     
         let merged = Object.assign(...nextProps.UI.LMS_REGISTERED);
         merged.map((player,i)=>{
                if(player.LMSID == nextProps.match.params.playerid)
                {

                    this.setState({ Searching:true,PlayerName:player.username  })
                    Register_Player_Name(player.username);
                    Fetch_Player_Data(player.LMSID);
                }
            })
     }  
    
    }
    
    render() {
            return ( 
                <Naked_Wrapper>
                    <div class="assign_player">
                        <div class="col-xs-6 text-right nopadding">
                            <img src={this.props.UI.Statto_Logo} />
                        </div>
                        <div class="col-xs-6 text-left nopadding">
                            <h1>Statto</h1>
                        </div>
                        <div class="col-xs-12 ">
                        <h3>Loading Player <br /> {Username}</h3>
                            <div class="btn-statto">
                                <a href="#/">
                                    <p>Find Another Player!</p>
                                    <i class="material-icons white">launch</i>
                                </a>
                            </div>
                        </div>
                   </div>
                </Naked_Wrapper>
             ); 
      }
  }