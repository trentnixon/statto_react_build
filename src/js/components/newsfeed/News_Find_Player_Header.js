import React from "react";

let Player_Name='';
export default class News_Player_Name extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){
        
      }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        this.props.UI.LMS_REGISTERED["0"].map((player,i)=>{
            if(player.LMSID == this.props.ID)
            {
                Player_Name = player.username;
            }
        })
            return ( 
                <div class="News_Player_Header">
                    <h3>{Player_Name}</h3>
                    <p class="tone3">{'Last Game : '+ this.props.Date}</p>
                </div>
             ); 
      }
  }