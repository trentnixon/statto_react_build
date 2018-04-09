import React from "react";
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let Player_Name='';
export default class News_Player_Name extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){      }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <MuiThemeProvider>
                    <Avatar  
                        color="#fff"
                        backgroundColor={this.props.color} 
                        className="News_Avatar"
                    >
                        {this.props.ID.substring(0,1)}
                    </Avatar>
                </MuiThemeProvider>
             ); 
      }
  }