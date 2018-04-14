import React from "react";
import { connect } from "react-redux";

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import { updater } from "../../../actions/updater";
const update  = new updater();


let Value=0, Icon, lastUpdate, UpdateText='Statto is updating ';

@connect((store) =>{
    return{
      UI: store.UI,
      Player: store.PLAYER
    }
  })
export default class UPdate_Status extends React.Component {

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
        if(nextProps.Player.PLAYER_META.PLAYER_SET == true){
            update.stattoVersion = nextProps.UI.STORE_STATTO_FORCE_UPDATE_VERSION;
            update.runningVersion = nextProps.Player.PLAYER_META.STORE_PLAYER_FORCE_UPDATE_VERSION;
            update.last_update = nextProps.Player.PLAYER_META.Last_update;
            update.CheckID = nextProps.Player.PLAYER_META.WP_ID;
        }
    }

    forceUpdate(){  
        console.log("Clicked")
        update.updatePlayer();
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
            
        </div>
        )
	}			
}