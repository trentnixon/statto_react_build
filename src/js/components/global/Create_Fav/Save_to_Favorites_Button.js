import React from "react";
import FontAwesome from 'react-fontawesome';
import FlatButton from 'material-ui/FlatButton';
import AddPlayer from "../icons/AddPlayer";
import RemovePlayer from "../icons/RemovePlayer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Followers } from "../../../actions/followers";
const AddFollower = new Followers();


//  let Store =[],Logged,SetFavs, icon,label,iconClass, Action;
export default class Icon_Set_Fav extends React.Component {
   
    constructor() { super(); }
     state = {
            icon:<AddPlayer />,
            label:'Add',
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
                    icon:<RemovePlayer />,
                    label:'Saved',
                    iconClass:'Remove_Player_From_Favs',
                    Action:this.handleRemove,
                });
            }
   }


   handleAdd = () => {
        AddFollower.add();
        this.buttonState(true)
    };

    handleRemove=()=>{
        AddFollower.remove();
        this.buttonState(false);
     }

    componentWillMount(){ 
       
        AddFollower.PlayerID = this.props.player_id;
       this.buttonState(AddFollower.ButtonState())
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }

    render() {
            return ( 
                <MuiThemeProvider>
                    <FlatButton
                        label={this.state.label}
                        className={this.state.iconClass}
                        labelPosition="before"
                        onClick={this.state.Action}
                        icon={this.state.icon}
                    />
                </MuiThemeProvider>
             ); 
      }
  } 