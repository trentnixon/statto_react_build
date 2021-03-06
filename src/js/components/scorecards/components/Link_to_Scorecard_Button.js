import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
var _ = require('lodash');

let ShowLink='<div></div>', findKey, text;
@connect((store) =>{
    return{
        GAMES: store.GAMES,
        PLAYER: store.PLAYER
    }
})
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        
        //console.log(this.props.PLAYER.PLAYER_META.WP_ID);

        if(this.props.GAMES.Game_Data_Stored == true)
            { findKey = _.findKey(this.props.GAMES.Game_Data, { 'GameID': this.props.ID}); }

            text=<p>Scorecard</p>
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           if(nextProps.GAMES.Game_Data_Stored == true)
            { findKey = _.findKey(nextProps.GAMES.Game_Data, { 'GameID': nextProps.ID});  }
       }
    
    render() {
        if(!isNaN(findKey)){
            return ( 
                <div class="btn-statto">
                <Link to={"/"+this.props.PLAYER.PLAYER_META.WP_ID+"/scorecard/"+this.props.ID}> 
                {text} <i class="material-icons white">launch</i>  
                    
                </Link>
                </div>
              ); 
        }else{
            return ( 
                <div class="btn-statto">
                <Link  to={"/"+this.props.PLAYER.PLAYER_META.WP_ID+"/scorecard/"+this.props.ID}> 
                {text} <i class="material-icons tone4">file_download</i>  
                   
                </Link>
                </div>
             ); 
        }  
    }
}