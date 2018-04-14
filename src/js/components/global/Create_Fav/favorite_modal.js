import React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Eye from 'material-ui/svg-icons/image/remove-red-eye';
import Following from 'material-ui/svg-icons/social/sentiment-very-satisfied';
import Close from 'material-ui/svg-icons/navigation/close';
import AddPlayer from "../icons/AddPlayer";

import Go_To_Profile from "./view_profile";
import Add_To_Favs from "./Save_to_Favorites_Button";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let Icon;
class Modal_Title extends React.Component{
  render(){
    return(
      <h1 class="modal_Title tone1"><AddPlayer /> {this.props.name}</h1>
    )
  }
}


export default class Favoriate_Modal extends React.Component {

    constructor() { super();  }
    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };
      
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {

      if(this.props.followed == true){Icon = <Following color="#88acd8" className="TeamSheet_Eye" />;}
      else if(this.props.followed == false)  {Icon = <Eye color="#73b393" className="TeamSheet_Eye" />;} 
      
      const actions = [
              <Go_To_Profile {... this.props}/>,
              <Add_To_Favs player_id={this.props.player_id} />
          ];

            return ( 
                <MuiThemeProvider>
                       <div>
                            
                            <FlatButton
                                label={this.props.player_name}
                                primary={true}
                                onClick={this.handleOpen}
                                labelPosition={this.props.location}
                                className="TeamSheet_Modal_btn"
                                icon={Icon}
                                />


                            <Dialog
                                title={<Modal_Title name={this.props.player_name}/> }
                                actions={actions}
                                modal={false}
                                open={this.state.open}
                                onRequestClose={this.handleClose}
                                actionsContainerClassName="Modal_Actions"
                                bodyClassName="Modal_body"
                                contentClassName="Modal_Content"
                                overlayClassName="Modal_Overlay"
                                titleClassName="Modal_Title"
                            >
                            
                              <p>Add {this.props.player_name} to your favorites list and Newsfeed?</p>
                             
                            </Dialog>
                        </div>
                </MuiThemeProvider>
             ); 
      }
  }