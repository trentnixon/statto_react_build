import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom'


const iconStyles = { 
  icon:{
    fontSize:18,
  }
};
 
const LabelStyles = {
   position:'fixed',
   bottom:0,
   height:'40px',
   backgroundColor:'rgba(44, 44, 44, .95)',
   borderTop:'1px solid white',
   lineHeight:'1.5em',
   zIndex:999
  };

  const ButtonStyles = {
    minWidth:'16.6%',
   };

   let active ='#bebb5b';
   let set = '#e9e9e9';

const homeIcon = <FontIcon className="material-icons" style={iconStyles.icon} hoverColor={active} color={set} >home</FontIcon>;
const battingIcon = <FontIcon className="material-icons" style={iconStyles.icon} hoverColor={active} color={set} >accessibility</FontIcon>;
const bowlingIcon = <FontIcon className="material-icons" style={iconStyles.icon} hoverColor={active} color={set} >fiber_manual_record</FontIcon>;
const keepingIcon = <FontIcon className="material-icons" style={iconStyles.icon} hoverColor={active}  color={set}>pets</FontIcon>;
const teamsIcon = <FontIcon className="material-icons" style={iconStyles.icon} hoverColor={active} color={set} >people</FontIcon>;
const settingsIcon = <FontIcon className="material-icons" style={iconStyles.icon}  hoverColor={active} color={set} >search</FontIcon>;


/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select(index,location){ 
    
    this.props.history.push('/'+this.props.match.params.playerid+'/'+location);
    this.setState({selectedIndex: index});
  
  }

  render() {
  
    return (
      <MuiThemeProvider>
        <BottomNavigation 
          style={LabelStyles} 
          selectedIndex={this.state.selectedIndex}
          className="ListItem"
        >
              <BottomNavigationItem
                icon={homeIcon}
                style={ButtonStyles}
                onClick={() => this.select(0,'')}
              />
              <BottomNavigationItem
                icon={battingIcon}
                style={ButtonStyles}
                onClick={() => this.select(1,'batting')}
              />
              <BottomNavigationItem
                icon={bowlingIcon}
                style={ButtonStyles}
                onClick={() => this.select(2,'bowling')}
              />
              <BottomNavigationItem
                icon={keepingIcon}
                style={ButtonStyles}
                onClick={() => this.select(3,'keeping')}
              />
              <BottomNavigationItem
                icon={teamsIcon}
                style={ButtonStyles}
                onClick={() => this.select(4,'teams')}
              />
              <BottomNavigationItem
                style={ButtonStyles}
                icon={settingsIcon}
                onClick={() => this.select(5,'search')}
              />
        </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

export default BottomNavigationExampleSimple;