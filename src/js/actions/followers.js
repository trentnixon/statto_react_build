// JavaScript Document
// Local Host and Followers Action
//Store in local host move to reducer and update 

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');
import {reactLocalStorage} from 'reactjs-localstorage';


export function Followers(){
    
    /** Properties */
    this.Favorites = reactLocalStorage.getObject('Statto_Favorites');
    this.PlayerID;
    this.hash = reactLocalStorage.getObject('Statto_Favorites_hash');
    this.possible;
    /** Methods */

    this.ButtonState = function(){
        if(this.indexCheck() != -1){
            return true;
        }
        else{
            return false;
        }
    }
    this.add = function(){

        this.Createhash();
     
        if(this.indexCheck() == -1)
            { 
                if(this.PlayerID != false){
                    // Add to Array
                    this.Favorites.push(this.PlayerID)
                    // Store to Local
                    this.store()
                } 
        }
        else if(this.FirstStore() == false){ this.Favorites=[]; }
    }
 
    this.remove = function(){

        this.Createhash(); 
    
        let Remove = this.Favorites.slice()
        Remove.splice(this.indexCheck(),1);
        this.Favorites = Remove;
       
        this.store()
    }

    this.fetch = ()=>{
        store.dispatch({ type:"Local_Followers", payload:reactLocalStorage.getObject('Statto_Favorites') });
    }
    this.store = function(){

        // Update Localhost
        reactLocalStorage.setObject('Statto_Favorites', this.Favorites);
        reactLocalStorage.setObject('Statto_Store_Favorites', true);
         // Update Reducer
         store.dispatch({ type:"Local_Followers", payload:this.Favorites });
    }

    this.Createhash = function(){  
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.hash='';
        for (var i = 0; i < 10; i++) this.hash += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
        reactLocalStorage.setObject('Statto_Favorites_hash', this.hash);
    } 
    this.indexCheck = function(){
        // Fetch latest version to make sure;
        this.Favorites = reactLocalStorage.getObject('Statto_Favorites');
        if(Array.isArray(this.Favorites)){
            return this.Favorites.indexOf(this.PlayerID)
        } else{return -1;}
        
    }
    this.FirstStore = function(){
        let IsFirst = Boolean(reactLocalStorage.get('Statto_Store_Favorites'));
        console.log(IsFirst)
        if(IsFirst == false){ 
                this.Favorites=[]; 
                this.store();
        }
    }
    this.ClearData = ()=>{
        let stored=['Statto_Favorites','Statto_Favorites_hash','Statto_Store_Favorites','Store_ID','Store_Player']
        stored.map((key,i)=>{
            localStorage.removeItem(key);
        })
    }
}