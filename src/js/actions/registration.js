// JavaScript Document
// Register New Players

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');

import {Login} from "./login";
const LG = new Login();


/**
 * In app registration
 * This should be implimented into the login as well at some point
 * 
 * The registration should start the cache process
 * store in Statto
 * return a result to the UI
 * 
 * it should not, log in that user as the active user!
 * 
 * 
 * AMendments
 * Hook into the "Statto Update Status Reducer in the UI Reducer"
 * 
 */

export function Register_New_Player(){
    /**
     * properties
     */
    this.FetchID;
    this.PlayerName=false;
	this.WordpressID = false;
    this.FetchArray=[];
    this.Registration_Message = 'Add Player';
    this.process_Login = false;
	

     /**
      * Methods
      */
     this.consolelog = function(message){
        // console.log(message)
     }
     this.Message = function(message){
        this.Registration_Message = message;
     }
     this.Register_Message = (msg) => {
        this.UI('New_Registration_MSG',msg)
    }
    this.UI = function(TYPE, state){
        store.dispatch({ type:TYPE, payload:state });
    }

    
    this.reset = function(){
        this.Message("Registration Completed");
        this.consolelog("Registration Completed");
        
        this.Message("Add Player");
        this.consolelog("Reset Function"); 
        this.UI("SET_STATTO_UPDATE_IN_PROGRESS", false);
        this.UI("Snack_State", false);
        this.UI('New_Registration', false);
        
        this.FetchID;
     }

     this.push = function(data){
        this.FetchArray.push(data);
     }

     this.Login_New_Reg = ()=>{

        LG.PlayerID=this.FetchID;
		LG.PlayerName=this.PlayerName;
        LG.Start_Player();
        
        this.Register_Message("Registration Complete");
        this.UI("Snack_State", false);
        //this.reset();
     }
     this.Fetch_Player = function(){

        this.consolelog("Fetching Data");
        this.Message("Fetching Player");
        this.Register_Message("Fetching Player")
        this.UI("Snack_State", true);

            const request = axios.get("ajax/player/register/RegisterNewPlayer.php?UserID="+this.FetchID);
            request.then(({data}) =>{ 
                
                this.consolelog(data)
                this.push(data)
 
                if(data.PlayerName == false){
                    this.consolelog("Data False");
                    this.UI("Snack_State", false);
                    jQuery("#FindPlayer").prop("disabled", false);
                    this.Register_Message("No Player Exists with this LMS ID")
                }
                
                if(data.user_id.error_data != null){
                    this.consolelog("User already exists");
                    this.Register_Message("This Player is already Registered with Statto")
                    jQuery("#FindPlayer").prop("disabled", false);
                    this.UI("Snack_State", false);
                }
                else{
                    this.Message("Player Found");
                    this.consolelog("Player" +this.FetchID +" Found"); 
                     
                    this.PlayerName = data.PlayerName;
                    this.WordpressID = data.user_id;
                    // Store Data
                    this.UI("New_Player_LMS_ID", this.FetchID); 
                    this.UI('New_Player_Name', this.PlayerName);
                    this.UI('New_Player_WP_ID',this.WordpressID);
                    this.UI('New_Registration', true);

                    // Fetch Player Data
                    this.Player_Data(data.LMS) 

                }		 
            });
    }
    
    this.Player_Data = function(LMSID){
      
       
        this.Message("Fetching Career");

        this.UI("SET_STATTO_UPDATE_IN_PROGRESS", true);
        this.UI("Snack_State", true);

        const request = axios.get("ajax/player/register/RegisterNewPlayerData.php?UserID="+LMSID);
        request.then(({data}) =>{ 
                
                this.Message("Career Found");
            
                this.UI('New_Registration_Games_Played',data.gamesPlayed)
                this.Fetch_New_Reg_Players();

                return true;
        });
    }
    this.Fetch_New_Reg_Players = function(){
        
        const request = axios.get("/statto/ajax/player/login/Login-Users.php");
		request.then(({data}) =>{ 
            this.UI('FETCH_WP_USER_DATA',data)
            
            // If from form, log new player
            if(this.process_Login == true) {this.Login_New_Reg()}
            // if in app reg, reset function
            else{ this.reset(); }
            
		});
    }
}



/*** END NEW OOP  */






















/**
 *  OLD Functions /
 * DO NOT DELETE these until i know 100% they are not being used
 * 
 
export function Fetch_New_Player(processID){
    

    const request = axios.get("ajax/player/register/RegisterNewPlayer.php?UserID="+processID);
    request.then(({data}) =>{ 
            
        //console.log(data)
            
            if(data.PlayerName == false){
                Register_Message("No Player Exists with this LMS ID")
                jQuery("#FindPlayer").prop("disabled", false);
            }
            
            if(data.user_id.error_data != null){
                //console.log("User already exists")
                Register_Message("This Player is already Registered with Statto")
                jQuery("#FindPlayer").prop("disabled", false);
                return false 
            }
            else{                
               //console.log(data,processID);	
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

    //console.log("Fetch Player Data from LMS")
    const request = axios.get("ajax/player/register/RegisterNewPlayerData.php?UserID="+New_Player_LMS_ID);
    request.then(({data}) =>{ 
           
            //console.log("Data Back from LMS ", data, data.gamesPlayed)
            New_Registration_Games_Played(data.gamesPlayed)
            Fetch_Player_Data(New_Player_LMS_ID);
            
            if(data.gamesPlayed > 0)
                { return true;  } 
            else if(data.gamesPlayed == 0)
                { return false; }   
    });

}


/*
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
    //console.log(ID);
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

 
*/
export function Register_Message(msg){
    store.dispatch({ type:"New_Registration_MSG", payload:msg })
 }