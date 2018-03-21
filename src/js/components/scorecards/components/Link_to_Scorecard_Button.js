import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import LinktoPage from 'material-ui/svg-icons/action/exit-to-app';

var _ = require('lodash');

let ShowLink='<div></div>', findKey;
@connect((store) =>{
    return{
        GAMES: store.GAMES,
        PLAYER: store.PLAYER
    }
})
export default class Expandable_Link extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        
        //console.log(this.props.PLAYER.PLAYER_META.WP_ID);

        if(this.props.GAMES.Game_Data_Stored == true)
            { findKey = _.findKey(this.props.GAMES.Game_Data, { 'GameID': this.props.ID}); }
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           if(nextProps.GAMES.Game_Data_Stored == true)
            { findKey = _.findKey(nextProps.GAMES.Game_Data, { 'GameID': nextProps.ID});  }
       }
    
    render() {



        if(!isNaN(findKey)){
            return ( 
                    <div class="col-xs-12 nopadding Expandable_Click_through">
                    <Link  to={"/"+this.props.PLAYER.PLAYER_META.WP_ID+"/scorecard/"+this.props.ID}> 
                       <FontIcon color="white" className="material-icons">
                                    launch
                                </FontIcon>
                        View Scorecard
                    </Link>
                </div>
              ); 
        }else{
             return (
                <div class="col-xs-12 nopadding Expandable_Click_through">
                <Link  to={"/"+this.props.PLAYER.PLAYER_META.WP_ID+"/scorecard/"+this.props.ID}> 
                    
                            <FontIcon color="white" className="material-icons">
                                file_download
                            </FontIcon>
                    View Scorecard
                </Link>
            </div>
            );
        }   
      }
  }