import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');

import {Fetch_Player_Data} from "./login";

export function updater(){

    /**
     * Propoerties
     */
        this.FunctionStatus=false;
        this.StattoStatus = false;
        this.stattoVersion;
        this.runningVersion;
        this.last_update;
        this.CheckID;
        this.Current = new Date().getTime()/1000;

    /**
     * Methods
     */
     /**** Suport Functions  *****/
    this.echo = (msg) => {
       // console.log(msg);
    }
 
    this.TimeDiff =()=>{
        
        let difference =  parseInt(this.Current)-parseInt(this.last_update);
        difference = difference.toFixed(0);
    
        let daysDifference = Math.floor(difference/60/60/24);
        difference -= daysDifference*60*60*24

        if(daysDifference >= 5){ return true;  }
        else{ return false}
 
    }
    this.reset = ()=>{
            this.UI("SET_STATTO_UPDATE_IN_PROGRESS", false);
            this.UI("Snack_State", false);
            this.FunctionStatus = false;
    }

     /**** Axios  Functions *****/ 
    this.updatePlayer = ()=>{
           
        this.UI("SET_STATTO_UPDATE_IN_PROGRESS", true);
        this.UI("Snack_State", true);

        const request = axios.get("ajax/player/register/RegisterNewPlayerData.php?UserID="+this.CheckID);
        request.then(({data}) =>{ 
                this.echo("UPdate Complete"); 
                this.echo(data, data.gamesPlayed); 

                Fetch_Player_Data(this.CheckID)
                // Reset
                this.reset()
        });
        
    }
 
    /**** Main Functions *****/    

    this.checkVersion = () => {
        if(this.runningVersion != this.stattoVersion){
            if(this.FunctionStatus == false){
                this.updatePlayer();
                this.FunctionStatus = true;
            }
        }
        else{
            this.checkTime();
        }
    }

    this.checkTime = ()=>{
        this.echo("Update User based on Time");
        if(this.TimeDiff()){
            if(this.FunctionStatus == false){
                this.updatePlayer();
                this.FunctionStatus = true;
            }
        }
    }

    /**** Update Reducer *****/
    this.UI = function(TYPE, state){
        store.dispatch({ type:TYPE, payload:state });
    }
    
}