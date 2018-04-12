import React from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Eye from 'material-ui/svg-icons/action/visibility-off';
import Close from 'material-ui/svg-icons/navigation/close';
import AddPlayer from "../icons/AddPlayer";

import Register_New from "./Register_New_Player_Button";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

        const actions = [
              <Register_New player_id={this.props.player_id} />
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
                                icon={<Eye color="#b37383" className="TeamSheet_Eye" />}
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

                            <h3 class="white text-center">Profile Unavailable</h3>
                            <p> Add {this.props.player_name} to Statto.</p>
                             
                            </Dialog>
                        </div>
                </MuiThemeProvider>
             ); 
      }
  }