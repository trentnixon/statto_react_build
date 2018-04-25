import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';


import Half_Circle from "../stage/components/Half_Circle_Top";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

import Following_Item from "./components/Following_Item";
import No_Followers from "./components/No_Followers";

let Stored, Names=[],Logged, FollowingList=[];
export default class Display_Following extends React.Component {

    constructor() { super();  }
    
    FindName(REGISTERED, ID){    
     
       Names=[],Logged ;
       ID.map((Thisid,i)=>{
            Logged =  _.findIndex(REGISTERED, function(o) { return o.LMSID == Thisid; });
            Names.push(REGISTERED[Logged])
        })
        Names = _.orderBy(Names, ['username'],['asc']);
        return Names;       
    }

    FirstStore(){
        return Boolean(reactLocalStorage.get('Statto_Store_Favorites'));
    }
    GetStored(){  return reactLocalStorage.getObject('Statto_Favorites');
    }
    componentWillMount(){  
            Stored = this.GetStored(); 
            FollowingList = this.FindName(this.props.UI.LMS_REGISTERED["0"], Stored)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
            Stored = this.GetStored();
            FollowingList = this.FindName(this.props.UI.LMS_REGISTERED["0"], Stored)
    }
    
    render() {
        if(FollowingList.length > 0)
        {
           
            return ( 
                <div>
                     <Half_Circle>
                        <Section_Header header="Following"/>
                    </Half_Circle>
                    
                    <Content_Wrapper>
                        <ul class="list" id="following_list">
                        {
                            FollowingList.map((player,i)=>{
                                return(
                                    <div key={i}>
                                        <Following_Item player_id={player.LMSID} player_name={player.username} />
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