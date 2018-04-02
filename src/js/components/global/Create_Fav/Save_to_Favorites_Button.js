import React from "react";
import FontAwesome from 'react-fontawesome';
import FlatButton from 'material-ui/FlatButton';
import AddPlayer from "../icons/AddPlayer";
import RemovePlayer from "../icons/RemovePlayer";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {reactLocalStorage} from 'reactjs-localstorage';

let Store =[],Logged,SetFavs, icon,label,iconClass, Action;
export default class Icon_Login extends React.Component {
   
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

   indexCheck(playerid,checkStored){
        return checkStored.indexOf(playerid)
   }

   FirstStore(){
       return Boolean(reactLocalStorage.get('Statto_Store_Favorites'));
   }

    
   handleAdd = () => {
        if(this.FirstStore() == true){
            
            Store = reactLocalStorage.getObject('Statto_Favorites');
            Logged = this.indexCheck(this.props.player_id,Store);
            // If ID is not found 
            if(Logged == -1)
                {
                    Store.push(this.props.player_id)
                    reactLocalStorage.setObject('Statto_Favorites', Store);
                    this.buttonState(true)
                }
        }
      };

    handleRemove=()=>{
        Store = reactLocalStorage.getObject('Statto_Favorites');
        Logged = this.indexCheck(this.props.player_id,Store);
        Store.splice(Logged,1);
        reactLocalStorage.setObject('Statto_Favorites', Store);
        this.buttonState(false)
    }

      componentWillMount(){ 
        
        // Check to see if a Player has been stored.
        // Then display the correct action
        
        if(this.FirstStore() == true){
           // console.log("First Store True", this.FirstStore())
            Logged = this.indexCheck(this.props.player_id,reactLocalStorage.getObject('Statto_Favorites',true));
            if(Logged != -1){ this.buttonState(true)} else{ this.buttonState(false) }

        } else{ 

            //console.log("First Store False", this.FirstStore())
            reactLocalStorage.setObject('Statto_Favorites', []);
            reactLocalStorage.set('Statto_Store_Favorites', Boolean(1)) ;
            this.buttonState(false)
        }
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