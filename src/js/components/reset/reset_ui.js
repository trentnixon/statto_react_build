import React from "react";

import {reset_login} from "../../actions/login";

export default class Reset_UI extends React.Component {
    
      componentWillMount(){ 
       // reset_login();
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