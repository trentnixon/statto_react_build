import React from "react";
import { connect } from "react-redux";
var _ = require('lodash');

import Half_Circle from "../stage/components/Half_Circle_Top";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import News_Header_Key from "./News_Header_Key";
import News_Item from "./News_item";
import Loading_Circle from "../global/icons/Loading_Circle";

import {reactLocalStorage} from 'reactjs-localstorage';
import {NewsFeed} from "../../actions/news_feed";

let Store, Display=[], New_Feed_LI;

const News = new NewsFeed();

@connect((store) =>{
    return{
        NewsFeed: store.NewsFeed,
    }
})
export default class Display_NewsFeed extends React.Component {

    constructor() { super();  }

    FetchNews(){
        if(News.hash != reactLocalStorage.getObject('Statto_Favorites_hash'))
            {  
                News.Reset(); 
                News.Create();
        }
        else{
            News.Create();
            News.Feed();
        }
    }


    componentWillMount(){ this.FetchNews(); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
        if(News.hash != reactLocalStorage.getObject('Statto_Favorites_hash')){this.FetchNews();} }
    

    render() {
        let New_Feed_LI; 
       
        if(this.props.NewsFeed.News_Stored == true){
   
            Display = this.props.NewsFeed.News_From_API;
            console.log(Display);
            // data = _.orderBy(Display, [this.props.filter],[this.props.order]);
            Display =_.orderBy(Display, ['Last_Played'], ['desc']);
            console.log(Display);
            // iterate the mapping
            if(Display){ 
                New_Feed_LI =  Display.map((GetFeed,i)=>{
                    if(GetFeed.News_Items.length != 0){
                        return(
                            <News_Item 
                                Player_ID = {GetFeed.Player_Id}
                                Updated = {GetFeed.Last_Played}
                                Feed = {GetFeed.News_Items}
                                key={i}
                                {... this.props}
                            />
                        )
                    }
                })
            }
        }
        else{
            New_Feed_LI= <li class="text-center"> <Loading_Circle /> <p>Loading News Feed ... </p></li>
        }

     
    return ( 
        <div>
            <Half_Circle>
                <Section_Header header="News Feed"/>
                <News_Header_Key />
            </Half_Circle>
            
            <Content_Wrapper AddClass="News_Feed" >
                <div>
                    <ul class="list" >
                       {New_Feed_LI}
                    </ul>
                </div>
            </Content_Wrapper>
        </div>
        ); 
      }
  }