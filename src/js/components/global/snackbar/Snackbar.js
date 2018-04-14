import React from 'react';
import { connect } from "react-redux";
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SyncIcon from "../icons/sync";
let PlayerName='';

@connect((store) =>{
    return{
        SNACKBAR: store.SNACKBAR
    }
})
export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true,
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
  
  componentWillMount(){ }
  shouldComponentUpdate(newProps, newState) { return true; }
  componentWillUpdate(nextProps, nextState){
      console.log(this.props.SNACKBAR.Snack_State)
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
        <Snackbar
          open={this.props.SNACKBAR.Snack_State}
          message={<SyncIcon />}
          autoHideDuration={400000}
          onRequestClose={this.handleRequestClose}
          className="AppSnack"
        />
        </MuiThemeProvider>
      </div>
    );
  }
}