import React from "react";

export default class Reset_UI extends React.Component {
    
      componentWillMount(){ 
      
       // this.props.history.push('/'+Store_Player_ID);
       console.log("Reset UI")
        console.log(this.props, this.props.match.params.playerid,this.props.history.location.pathname);
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    render() {
            return ( 
                <div>Reset</div>
            ); 
      }
  } 