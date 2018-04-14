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
    this.hash;
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
        this.stored.splice(this.indexCheck(),1);
        this.store()
    }

    this.store = function(){
        reactLocalStorage.setObject('Statto_Favorites', this.stored);
         // Update Reducer
         store.dispatch({ type:"Local_Followers", payload:this.stored });
    }

    this.Createhash = function(){  
        this.possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++) this.hash += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
        reactLocalStorage.setObject('Statto_Favorites_hash', this.hash);
    }
    this.indexCheck = function(){
        return this.stored.indexOf(this.PlayerID)
    }
    this.FirstStore = function(){
        return Boolean(reactLocalStorage.get('Statto_Store_Favorites'));
    }
}