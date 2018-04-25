import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import Naked_Wrapper from  "../../global/Naked_wrapper";

import AddToFav from "../../global/Create_Fav/Save_to_Favorites_Button";
import ViewProfile from "../../global/Create_Fav/view_profile";

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
     
    render() {
            return ( 
                <li class="row nopadding ">
                 <div class="col-xs-2 text-center"> <AddToFav player_id={this.props.player_id}/> </div>
                    <div class="col-xs-6 nopadding ">
                        {this.props.player_name}
                    </div>  
                    <div class="col-xs-4 nopadding text-right"><ViewProfile  player_id={this.props.player_id}/></div> 
                </li>
             ); 
      }
  } 