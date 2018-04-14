import React from "react";
import FontAwesome from 'react-fontawesome';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'
import Eye from 'material-ui/svg-icons/image/remove-red-eye';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {reset_login} from "../../../actions/login";
export default class Icon_Login extends React.Component {
    handleClose = () => {
        reset_login();
      };
      componentWillMount(){ }
    render() {
            return ( 
                <MuiThemeProvider>
                     <Link to={'/'+this.props.player_id}>
                    <FlatButton
                            label="Profile"
                            labelPosition="before"
                            className="View_player_profile"
                            onClick={this.handleClose}
                            icon={<Eye color="#dbaa8b" className="TeamSheet_Eye" />}
                    />
                    </Link>
                </MuiThemeProvider>
             ); 
      }
  } 