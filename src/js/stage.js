import React from "react";
import { connect } from "react-redux";

import Display_Player_UI from "./Display_Player_UI";
import Assign_Player from "./Assign_Player_UI";

let Display_This_UI='Updating UI';
@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER,
        GAMES: store.GAMES
    }
})
export default class MainStage extends React.Component {
     
    constructor() { super();  }
    
    componentWillMount(){
        console.log( )
     }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}

    render() {
        if(isNaN(this.props.match.params.playerid) == false)
        {
            if(this.props.Player.PLAYER_META.PLAYER_SET == false)
            {
                return ( <Assign_Player {... this.props}/>); 
            }
            else if(this.props.Player.PLAYER_META.PLAYER_SET == true){
                return ( <Display_Player_UI {... this.props}/> ); 
            }
        } else{
            return(<div class="hide"></div>)
        }
        
  }
}