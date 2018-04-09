import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';


import Half_Circle from "../stage/components/Half_Circle_Top";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

import Following_Item from "./components/Following_Item";
import No_Followers from "./components/No_Followers";

let Stored;
export default class Display_Following extends React.Component {

    constructor() { super();  }
    
    FirstStore(){
        return Boolean(reactLocalStorage.get('Statto_Store_Favorites'));
    }
    GetStored(){
        return reactLocalStorage.getObject('Statto_Favorites');
    }
    componentWillMount(){ 
            
            Stored = this.GetStored();
            console.log(Stored)
        }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
            Stored = this.GetStored();
    }
    
    render() {
        if(Stored.length > 0)
        {
            return ( 
                <div>
                     <Half_Circle>
                        <Section_Header header="Following"/>
                    </Half_Circle>
                    
                    <Content_Wrapper>
                        <ul class="list" id="following_list">
                        {
                            Stored.map((player,i)=>{
                                return(
                                    <div key={i}>
                                        <Following_Item player_id={player} {... this.props}/>
                                    </div>
                                )
                            })
                        }
                        </ul>
                    </Content_Wrapper>
                </div>
             );
        }
        else{
            return( <No_Followers />)
        }   
      }
  } 