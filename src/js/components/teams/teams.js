import React from "react";


export default class Display_Player_Teams_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            //console.log(this.props.match.params.playerid, this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div>
                        Team Stats
                </div>
             ); 
      }
  }