import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import Naked_Wrapper from  "../../global/Naked_wrapper";

import AddToFav from "../../global/Create_Fav/Save_to_Favorites_Button";
import ViewProfile from "../../global/Create_Fav/view_profile";
let Stored,Logged;
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    FindName(REGISTERED, ID){   
        Logged =  _.findIndex(REGISTERED, function(o) { return o.LMSID == ID; });
        return REGISTERED[Logged];       
    }
    componentWillMount(){}
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        Stored = this.FindName(this.props.UI.LMS_REGISTERED["0"], this.props.player_id)
      //  console.log(this.props.UI.LMS_REGISTERED["0"], this.props.player_id)
            return ( 
                <li class="row nopadding ">
                 <div class="col-xs-2 text-center"> <AddToFav player_id={this.props.player_id}/> </div>
                    <div class="col-xs-6 nopadding ">
                        {Stored.username}
                    </div>  
                    <div class="col-xs-4 nopadding text-right"><ViewProfile  player_id={this.props.player_id}/></div> 
                   
                </li>
             ); 
      }
  } 