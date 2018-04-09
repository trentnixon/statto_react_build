import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');
import {reactLocalStorage} from 'reactjs-localstorage';

export function NewsFeed(){
  /******************* */
  // Set Properties
  this.IDS = reactLocalStorage.getObject('Statto_Favorites');
  this.hash = reactLocalStorage.getObject('Statto_Favorites_hash'); 
  this.feedURL='/statto/wp-json/wp/v2/news_feed/?slug=';
  this.CreateURL='/statto/ajax/newsfeed/news_feed.php?ids=';

  /******************* */
  // Set Methods
  this.Local = function(){
    this.IDS = reactLocalStorage.getObject('Statto_Favorites');
    this.hash = reactLocalStorage.getObject('Statto_Favorites_hash'); 
  }
  this.Feed = function(){
        const request = axios.get(this.feedURL+this.IDS);
        request.then(({data}) =>{  
          if(data){
            let Store_News=[];
              data.map((news,i)=>{
                if(news.acf.feed != undefined){  Store_News.push(JSON.parse(news.acf.feed))}
              })
              
              store.dispatch({ type:"News_From_API", payload:Store_News });
              this.Store();
          }      
      });
    }

  this.Create = function(){
    const request = axios.get(this.CreateURL+this.IDS);
    request.then(({data}) =>{ 
          if(data){  this.Reset(); }
    });	

  }
  
  this.Store =  function(){  
    store.dispatch({ type:"Store_News", payload:true }); }
  
  this.Reset = function(){
    store.dispatch({ type:"Store_News", payload:false });
    this.Local();
    this.Feed();
  }
}