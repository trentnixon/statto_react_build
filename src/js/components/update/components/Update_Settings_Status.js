import React from "react";
import { connect } from "react-redux";

import {Fetch_New_Player_Data} from "../../../actions/registration"
import {Set_State_To_Update} from "../../../actions/login"

import Update_The_Snackbar from "./Update_The_Snackbar";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

    componentWillMount(){ 
        lastUpdate = this.timeDifference( new Date().getTime()/1000, parseInt(this.props.Player.PLAYER_META.Last_update),this.props.UI.updateStatto ) 
     }

    shouldComponentUpdate(newProps, newState) { return true; }
    
    componentWillUpdate(nextProps, nextState){
        lastUpdate = this.timeDifference( new Date().getTime()/1000, parseInt(nextProps.Player.PLAYER_META.Last_update),nextProps.UI.updateStatto ) 
    }

    forceUpdate(){  
        Set_State_To_Update(true);
        Fetch_New_Player_Data(this.props.Player.PLAYER_META.WP_ID)
    }
   render(){

    return(
        <div class="UpdateStatus">
            <p> Last LMS Update  : {lastUpdate} on {this.props.Player.PLAYER_META.update_history} </p>
             
            <MuiThemeProvider>
                <RaisedButton 
                    label="Force Update" 
                    className="forceUpdate" 
                    fullWidth={true} 
                    onClick={this.forceUpdate.bind(this)}
                    backgroundColor="#be5b5e"
                    labelColor="#e9e9e9"
                />
            </MuiThemeProvider>
            
            <Update_The_Snackbar Status={UpdateText}  {... this.props} />
        </div>
        )
	}			
}