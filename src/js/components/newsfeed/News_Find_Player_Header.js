import React from "react";
import LinkToPlayer from "../global/icons/Link_to_Player";
import { Link } from 'react-router-dom'

//import {reset_login} from "../../actions/login";
import {Login} from "../../actions/login";
const LG = new Login();

let Player_Name='';
export default class News_Player_Name extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){
        
      }
    handleClose = () => {
        LG.Reset_Player_UI();
    };
    
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
                    <h3>
                    <Link 
                        to={"/"+this.props.ID}
                        onClick={this.handleClose}
                    > 
                        <LinkToPlayer /> {Player_Name}
                        </Link>
                    </h3>
                    <p class="tone3">{'Last Game : '+ this.props.Date}</p>
                </div>
             ); 
      }
  }