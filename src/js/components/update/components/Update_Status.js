import React from "react";
import { connect } from "react-redux";

import Update_The_Snackbar from "./Update_The_Snackbar";

import { updater } from "../../../actions/updater";
const update  = new updater();

// let Value=0, Icon, lastUpdate, UpdateText='Statto is updating ';
@connect((store) =>{
    return{
      UI: store.UI,
      Player: store.PLAYER 
    }
  })
export default class UPdate_Status extends React.Component {

    componentWillMount(){}
    shouldComponentUpdate(newProps, newState) { return true; }
    componentWillUpdate(nextProps, nextState){

      //  console.log(nextProps.UI.UPDATE_IN_PROGRESS)
        if(nextProps.Player.PLAYER_META.PLAYER_SET == true && nextProps.UI.UPDATE_IN_PROGRESS == false){
        
            update.stattoVersion = nextProps.UI.STORE_STATTO_FORCE_UPDATE_VERSION;
            update.runningVersion = nextProps.Player.PLAYER_META.STORE_PLAYER_FORCE_UPDATE_VERSION;
            update.last_update = nextProps.Player.PLAYER_META.Last_update;
            update.CheckID = nextProps.Player.PLAYER_META.WP_ID;

            update.checkVersion();
        }
    }

   render(){

        return(
                <div></div>
            )	
        }	
}