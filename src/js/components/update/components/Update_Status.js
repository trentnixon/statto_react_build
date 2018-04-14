import React from "react";
import { connect } from "react-redux";

import {Fetch_New_Player_Data} from "../../../actions/registration"
import {Set_State_To_Update} from "../../../actions/login"

import Update_The_Snackbar from "./Update_The_Snackbar";

let Value=0, Icon, lastUpdate, UpdateText='Statto is updating ';

@connect((store) =>{
    return{
      UI: store.UI,
      Player: store.PLAYER
    }
  })
export default class UPdate_Status extends React.Component {

   UpdatePlayer(UpdatePlayer)
    {
        console.log('Statto Update State, Inside UpdatePlayer', UpdatePlayer)
        if(UpdatePlayer == false)  { Set_State_To_Update(true);  }
   } 
    
   timeDifference(date1,date2,UpdatePlayer) {
    

        let difference = date1.toFixed(0) - date2.toFixed(0);
        difference = difference.toFixed(0);
        
        let daysDifference = Math.floor(difference/60/60/24);
        difference -= daysDifference*60*60*24

        let hoursDifference = Math.floor(difference/60/60);
        difference -= hoursDifference*60*60

        let minutesDifference = Math.floor(difference/60);
        difference -= minutesDifference*60

        let secondsDifference = Math.floor(difference);

        if(daysDifference > 0){ 
            if(daysDifference >= 5){
                this.UpdatePlayer(UpdatePlayer)
            }
            return daysDifference + ' Days Ago'; 
        } 
        
        else if(hoursDifference > 0) { return hoursDifference  + ' Hours Ago';}
        
        else{return minutesDifference  + ' Minutes Ago'; }

    }

    componentWillMount(){  }

    shouldComponentUpdate(newProps, newState) { return true; }
    
    componentWillUpdate(nextProps, nextState){

        // console.log(nextProps.UI.updateStatto, nextProps.Player.PLAYER_META.PLAYER_SET,nextProps.UI.STORE_STATTO_FORCE_UPDATE_VERSION , nextProps.Player.PLAYER_META.STORE_PLAYER_FORCE_UPDATE_VERSION)
    if(nextProps.UI.updateStatto == false)
        {
            if(nextProps.Player.PLAYER_META.PLAYER_SET == true)
                {
                          //  console.log("which to run? ")
                            // Check Force Update Int
                        if(nextProps.UI.STORE_STATTO_FORCE_UPDATE_VERSION > nextProps.Player.PLAYER_META.STORE_PLAYER_FORCE_UPDATE_VERSION)
                        {
                           // console.log("Force UPDATE")
                         //   this.UpdatePlayer(false);  
                         //   UpdateText='Statto is updating to the latest version';
                        }
                      
                        else{
                            //console.log("Check Time difference")
                          //  lastUpdate = this.timeDifference( new Date().getTime()/1000, parseInt(nextProps.Player.PLAYER_META.Last_update),nextProps.UI.updateStatto ) 
                            // Store lastUpdate in reducer for UI
                          //  UpdateText='Statto is updating this profile';
                        }
                }
        }
    }

   render(){

        if(this.props.Player.PLAYER_META.PLAYER_SET == true){
            return(
		    	<div class="UpdateStatus">
                    <Update_The_Snackbar Status={UpdateText}  {... this.props} />
                </div>
		)
    }
    else{
            return(
                <div></div>
            )
        }
	}			
}