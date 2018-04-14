import React from "react";
import { connect } from "react-redux";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Half_Circle from "../stage/components/Half_Circle_Top";
 
import Section_Header from "../global/Section_Header";

import Store_Player_As_Default from "../login/components/Login_Store_Player_As_Default";
import  Update_Status from "../update/components/Update_Settings_Status";
import Settings_Icons from "./components/icons";

// actions 
import {breadcrumbs} from  "../../actions/ui";

@connect((store) =>{
        return{
            UI: store.UI, 
            Player: store.PLAYER
        }
    })
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ breadcrumbs('Settings','parent'); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
        <div>
                <Half_Circle>
                        <Section_Header header="Settings" />
                </Half_Circle>
        <Content_Wrapper>
                <Section_Header header="About" />
                <ul class="list">
                        <li>
                                        <p>Profile Name : {this.props.Player.PLAYER_META.UserName}</p>
                                </li>
                                <li>
                                        <p>Games Found : {this.props.Player.raw_json.length}</p>
                                </li>
                                <li>
                                        <p>Statto Version : {this.props.UI.STORE_STATTO_FORCE_UPDATE_VERSION}</p>
                                </li>
                                <li>
                                        <p>Running Version : {this.props.Player.PLAYER_META.STORE_PLAYER_FORCE_UPDATE_VERSION}</p>
                                </li>
                                
                        </ul>
                        <Section_Header header="Store Player" />
                                <ul class="list">
                                        <li> <Store_Player_As_Default {... this.props}/></li>
                                </ul>
                        <Section_Header header="Updates" />
                        <ul class="list">
                                <li> <Update_Status {...this.props}/> </li>
                                <li> <p>Profile update # : {this.props.Player.PLAYER_META.update_interation}</p> </li>
                        </ul>

                        <Section_Header header="Icons" />
                        <Settings_Icons />

                </Content_Wrapper>
        </div>
             ); 
      }
  }