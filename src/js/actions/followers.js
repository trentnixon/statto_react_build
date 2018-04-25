// JavaScript Document
// Local Host and Followers Action
//Store in local host move to reducer and update 

import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');
import {reactLocalStorage} from 'reactjs-localstorage';


export function Followers(){
    
    /** Properties */
    this.stored = reactLocalStorage.getObject('Statto_Favorites');
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
       
        if(this.FirstStore() == true){
            if(this.indexCheck() == -1)
                { 
                    // Add to Array
                    this.stored.push(this.PlayerID)
                    
                    // Store to Local
                    this.store()
                }
        }
    }


    this.remove = function(){

        this.Createhash();
        // console.log(this.stored, this.indexCheck())
       
        let Remove = this.stored.slice()
        Remove.splice(this.indexCheck(),1);
        this.stored = Remove;
       
        this.store()
    }

    this.fetch = ()=>{
        store.dispatch({ type:"Local_Followers", payload:reactLocalStorage.getObject('Statto_Favorites') });
    }
    this.store = function(){
        // Check for first visit and create ARRAY if it is
        if(this.FirstStore() == false){ this.stored=[]; }
        
        // Update Localhost
        reactLocalStorage.setObject('Statto_Favorites', this.stored);
        reactLocalStorage.setObject('Statto_Store_Favorites', true);
         // Update Reducer
         store.dispatch({ type:"Local_Followers", payload:this.stored });
    }

    this.Createhash = function(){  
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        this.hash='';
        for (var i = 0; i < 10; i++) this.hash += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
        reactLocalStorage.setObject('Statto_Favorites_hash', this.hash);
    }
    this.indexCheck = function(){
        // Fetch latest version to make sure;
        this.stored = reactLocalStorage.getObject('Statto_Favorites');
        return this.stored.indexOf(this.PlayerID)
    }
    this.FirstStore = function(){
        return Boolean(reactLocalStorage.get('Statto_Store_Favorites'));
    }
}