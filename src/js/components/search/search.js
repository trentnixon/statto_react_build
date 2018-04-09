import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';


import Half_Circle from "../stage/components/Half_Circle_Top";
import Section_Header from "../global/Section_Header";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

import Player_Form from "../login/components/LoginForm";
import Logo from "../login/components/_Logo";

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
                    <Naked_Wrapper >
                        <Player_Form {... this.props}/> 
                    </Naked_Wrapper>
                </Content_Wrapper>
            </div>
        )   
      }
  } 