import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from "react-redux";

import {RegisteredPlayers,Fetch_Player_Data,Register_Player_Name} from './actions/login';
import {Fetch_Statto_Meta} from './actions/ui';
// import {StorePlayerProfile, Register_Player_Name, Register_Player_WP_ID, Reigster_Statto_Player_ID, } from "../../../actions/login";


RegisteredPlayers();
Fetch_Statto_Meta(); 

export default class Assign_Player_UI extends React.Component {

    constructor() { super();  
        this.state = {
			rostered:false, 
			Searching:false,
			PlayerName:false
		};
    }
    
    componentWillMount(){ 
           // console.log(this.props.match.params.playerid, this.props.UI.LMS_REGISTERED)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
   
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
        <div>
            Assign Player. Design this Component
        </div>
             ); 
      }
  }