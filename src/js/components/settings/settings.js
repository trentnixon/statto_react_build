import React from "react";
import { connect } from "react-redux";
import Section_Header from "../global/Section_Header";

import Store_Player_As_Default from "../login/components/Login_Store_Player_As_Default";
import  Update_Status from "../update/components/Update_Settings_Status";

@connect((store) =>{
        return{
            UI: store.UI,
            Player: store.PLAYER
        }
    })
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div>
                        <Section_Header header="About" />
                       <ul class="list">
                                <li>
                                        <p>Profile Name : {this.props.Player.PLAYER_META.UserName}</p>
                                </li>
                                <li>
                                        <p>Games Found : {this.props.Player.raw_json.length}</p>
                                </li>
                                <li>
                                        <p>Statto Version : 2.{this.props.UI.STORE_STATTO_FORCE_UPDATE_VERSION}</p>
                                </li>
                                <li>
                                        <p>Running Version : 2.{this.props.Player.PLAYER_META.STORE_PLAYER_FORCE_UPDATE_VERSION}</p>
                                </li>
                                
                        </ul>
                        <Section_Header header="Settings" />
                                <ul class="list">
                                        <li> <Store_Player_As_Default {... this.props}/></li>
                                </ul>
                        <Section_Header header="Updates" />
                        <ul class="list">
                                <li> <Update_Status {...this.props}/> </li>
                                <li> <p>Profile update # : {this.props.Player.PLAYER_META.update_interation}</p> </li>
                        </ul>
                
                        
                </div>
             ); 
      }
  }