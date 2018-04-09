import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

export default class Icon_Login extends React.Component {
    render() {
            return ( 
                <MuiThemeProvider>
                    <CircularProgress />
                </MuiThemeProvider>
             ); 
      }
  } 