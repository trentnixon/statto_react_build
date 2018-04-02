import React from "react";
import Favorite_Modal from "../../global/Create_Fav/favorite_modal";
var _ = require('lodash');

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
        livePlayer(Player,location){
              let Logged, ReturnThis;
              let REGISTERED = this.props.UI.LMS_REGISTERED[0];
              
            //  console.log(Player)

                Logged =  _.findIndex(REGISTERED, function(o) { return o.LMSID == Player.Player_ID; });
               
               if(Logged == -1){
                        ReturnThis = Player.Player_Name;
               }
               else if(Logged != -1){
                        ReturnThis = <Favorite_Modal location={location} player_name={Player.Player_Name} player_id={Player.Player_ID}/>;
               }
               return ReturnThis;
                //console.log(Logged, REGISTERED[Logged]);
        }

    componentWillMount(){ 

        console.log(this.props.SelectedGame["1st_Innings"]);
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        
        let firstInnings = _.values(this.props.SelectedGame["1st_Innings"]);
        let SecondInnings = _.values(this.props.SelectedGame["2nd_Innings"]);

            return ( 
                <div id="scorecard_TeamSheets">
                    <div class=" col-xs-6 TeamA">
                        <h3>{this.props.SelectedGame.Batted_First}</h3>
                        <ul>
                        {
                                firstInnings.map((player,i)=>{
                                        
                                        //console.log(player)
                                        //        
                                        return(
                                                <li key={i} >
                                                        {this.livePlayer(player,'after') } 
                                                </li>
                                        )
                                })
                        } 
                        </ul>
                    </div>

                    <div class=" col-xs-6 TeamB">
                    <h3>{this.props.SelectedGame.Batting_Second}</h3>
                    <ul>
                        {    
                                SecondInnings.map((player,i)=>{
                                         
                                        return(
                                                <li key={i} >
                                                        {this.livePlayer(player,'before')}
                                                </li>
                                        )
                                })
                        } 
                        </ul>
                    </div>
                   
                </div>
             ); 
      }
  }