// JavaScript Document
// Register New Players

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');


import {Set_State_To_Update, Fetch_Player_Data, Register_Player_Name} from "./login"


export function Fetch_New_Player(processID){
    
    console.log("Fetch New Player Name");

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