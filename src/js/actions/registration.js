// JavaScript Document
// Register New Players

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');


import {Set_State_To_Update, Fetch_Player_Data, Register_Player_Name} from "./login"

/**
 * In app registration
 * This should be implimented into the login as well at some point
 * 
 * The registration should start the cache process
 * store in Statto
 * return a result to the UI
 * 
 * it should not, log in that user as the active user!
 */

export function Register_New_Player(){
    /**
     * properties
     */
    this.FetchID;
    this.FetchArray=[];
    this.Registration_Message = 'Add Player';

     /**
      * Methods
      */
     this.consolelog = function(message){
         console.log(message)
     }
     this.Message = function(message){
        this.Registration_Message = message;
     }
     this.reset = function(){
        this.Message("Add Player");
        this.consolelog("Reset Function"); 
        this.FetchID;
     }
     this.push = function(data){
        this.FetchArray.push(data);
        console.log(this.FetchArray);
     }
     this.Fetch_Player = function(){

        this.consolelog("Fetching Data");
        this.Message("Fetching Player");

            const request = axios.get("ajax/player/register/RegisterNewPlayer.php?UserID="+this.FetchID);
            request.then(({data}) =>{ 
                
                this.consolelog(data)
                this.push(data)

                if(data.PlayerName == false){
                    this.consolelog("Data False");
                }
                
                if(data.user_id.error_data != null){
                    this.consolelog("User already exists");
                }
                else{
                    this.Message("Player Found");
                    this.consolelog("Player" +this.FetchID +" Found"); 
                    // Fetch Player Data
                    this.Player_Data(data.LMS)    
                }		 
            });
    }
    this.Player_Data = function(LMSID){
      
        this.consolelog("Fetch Player Data from LMS " + LMSID); 
        this.Message("Fetching Career");
        const request = axios.get("ajax/player/register/RegisterNewPlayerData.php?UserID="+LMSID);
        request.then(({data}) =>{ 
                
                this.consolelog(data, data.gamesPlayed); 
               
                this.consolelog("Process Complete, Fire Snackbar"); 
                this.Message("Career Found");
                this.Fetch_New_Reg_Players()
                // Update UI.LMS_REGISTERED[0] with new player
        });
    }
    this.Fetch_New_Reg_Players = function(){
        
        const request = axios.get("/statto/ajax/player/login/Login-Users.php");
		request.then(({data}) =>{ 
            // console.log(data);
            this.Message("Registration Completed");
            this.consolelog("Registration Completed"); 
            store.dispatch({ type:"FETCH_WP_USER_DATA", payload:data });
            this.reset();
            
		});
    }
    this.UI = function(TYPE, state){
        store.dispatch({ type:TYPE, payload:state });
    }
}










/**
 *  OLD Functions /
 * DO NOT DELETE these until i know 100% they are not being used
 * 
 */
export function Fetch_New_Player(processID){
    

    const request = axios.get("ajax/player/register/RegisterNewPlayer.php?UserID="+processID);
    request.then(({data}) =>{ 
            
        console.log(data)
            
            if(data.PlayerName == false){
                Register_Message("No Player Exists with this LMS ID")
                jQuery("#FindPlayer").prop("disabled", false);
            }
            
            if(data.user_id.error_data != null){
                console.log("User already exists")
                Register_Message("This Player is already Registered with Statto")
                jQuery("#FindPlayer").prop("disabled", false);
                return false 
            }
            else{                
               console.log(data,processID);	
                   New_Player_LMS_ID(processID); 
                   Register_New_Player_Name(data.PlayerName);
                   New_Player_WP_ID(data.user_id);
                   New_Registration(true);
                // For Login
                   Register_Player_Name(data.PlayerName);
                return true;
            }				 
    });
}

export function Fetch_New_Player_Data(New_Player_LMS_ID){

    console.log("Fetch Player Data from LMS")
    const request = axios.get("ajax/player/register/RegisterNewPlayerData.php?UserID="+New_Player_LMS_ID);
    request.then(({data}) =>{ 
           
            console.log("Data Back from LMS ", data, data.gamesPlayed)
            New_Registration_Games_Played(data.gamesPlayed)
            Fetch_Player_Data(New_Player_LMS_ID);
            
            if(data.gamesPlayed > 0)
                { return true;  } 
            else if(data.gamesPlayed == 0)
                { return false; }   
    });

}

export function Register_New_Player_Name(Name){
   // const request = axios.get("/statto/ajax/player/login/Login-Users.php");
   //  request.then(({data}) =>{ });
   store.dispatch({ type:"New_Player_Name", payload:Name })
}

export function New_Player_WP_ID(ID){
    // const request = axios.get("/statto/ajax/player/login/Login-Users.php");
    //  request.then(({data}) =>{ });
    store.dispatch({ type:"New_Player_WP_ID", payload:ID })
 }

 export function New_Player_LMS_ID(ID){
    // const request = axios.get("/statto/ajax/player/login/Login-Users.php");
    //  request.then(({data}) =>{ });
    console.log(ID);
    store.dispatch({ type:"New_Player_LMS_ID", payload:ID })
 }

 export function New_Registration(value){
    // const request = axios.get("/statto/ajax/player/login/Login-Users.php");
    //  request.then(({data}) =>{ });
    store.dispatch({ type:"New_Registration", payload:value })
 }
 export function New_Registration_Games_Played(games){
    // const request = axios.get("/statto/ajax/player/login/Login-Users.php");
    //  request.then(({data}) =>{ });
    store.dispatch({ type:"New_Registration_Games_Played", payload:games })
 }

 export function Register_Message(msg){
    store.dispatch({ type:"New_Registration_MSG", payload:msg })
 }