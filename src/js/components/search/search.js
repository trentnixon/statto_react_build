import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';


import Half_Circle from "../stage/components/Half_Circle_Top";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

import Player_Form from "../login/components/LoginForm";
import Following_Item from "./components/Following_Item";
import No_Followers from "./components/No_Followers";

import {reset_login} from "../../actions/login";

let Stored;
export default class In_App_Search extends React.Component {

    
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
        
        if(this.props.Player.PLAYER_META.WP_ID != nextProps.Player.PLAYER_META.WP_ID)
        { 
            reset_login();
            this.props.history.push("/"+nextProps.Player.PLAYER_META.WP_ID);
        }
    }
    
    render() {
        return( 
            <div>
                <Half_Circle>
                    <Section_Header header="Search"/>
                </Half_Circle>
                
                <Content_Wrapper>
                    <Player_Form {... this.props}/> 
                </Content_Wrapper>

            </div>
        )   
      }
  } 