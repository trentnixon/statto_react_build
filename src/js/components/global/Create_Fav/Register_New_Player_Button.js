import React from "react";
import FontAwesome from 'react-fontawesome';
import FlatButton from 'material-ui/FlatButton';
import AddPlayer from "../icons/AddPlayer";
import SyncIcon from "../icons/sync";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {Register_New_Player} from "../../../actions/registration";

const Reg = new Register_New_Player();


let Store =[],Logged,SetFavs, icon,label,iconClass, Action;
export default class Icon_Login extends React.Component {
   
    constructor() { super(); }
     state = {
        icon:<AddPlayer />,
        label:'Register Player',
        iconClass:'AddPlayer_to_Favs',
        Action:this.handleAdd,
      };

   // FIX ALL OF THIS
   buttonState(btn){

    if(btn == false)
    {
        this.setState({
                icon:<AddPlayer />,
                label:'Add',
                iconClass:'AddPlayer_to_Favs',
                Action:this.handleAdd,
        });
    }
    else{
        this.setState({
            icon:<SyncIcon />,
            label:'Fetching',
            iconClass:'Remove_Player_From_Favs',
            Action:this.handleRemove,
        });
    }
   
}

   indexCheck(playerid,checkStored){
        return checkStored.indexOf(playerid)
   }

   FirstStore(){
       return Boolean(reactLocalStorage.get('Statto_Store_Favorites'));
   }

   handleAdd = () => { 
       
        this.buttonState(true)
        Reg.Fetch_Player();
    };

    handleRemove=()=>{
        this.buttonState(false)
    }

      componentWillMount(){ 
        this.buttonState(false)
    // console.log(this.props)
        Reg.FetchID = this.props.player_id
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }

    render() {
            return ( 
                <MuiThemeProvider>
                    <FlatButton
                        label={Reg.Registration_Message}
                        className={this.state.iconClass}
                        labelPosition="after"
                        onClick={this.state.Action}
                        icon={this.state.icon}
                    />
                </MuiThemeProvider>
             ); 
      }
  } 