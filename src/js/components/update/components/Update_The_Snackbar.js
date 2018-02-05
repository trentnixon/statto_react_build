import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let PlayerName='';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
 
  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };


  fireSnackBar(PROPS,STATE){
      
      /* If Statto Update == true then show the snackbar */
       PlayerName = PROPS.Player.PLAYER_META.UserName;
       if(PROPS.UI.updateStatto == true && STATE.open == false)
            { this.setState({ open: true }); }
        /* If Statto Update is False but the snack bar is Open, then close it! */
        else if(PROPS.UI.updateStatto == false && STATE.open == true)
            {  this.setState({ open: false }); }
  }
  
  componentWillMount(){ this.fireSnackBar(this.props,this.state) }
  
  shouldComponentUpdate(newProps, newState) { return true; }
  
  componentWillUpdate(nextProps, nextState){this.fireSnackBar(nextProps,nextState); }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <Snackbar
          open={this.state.open}
          message={this.props.Status}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
        </MuiThemeProvider>
      </div>
    );
  }
}