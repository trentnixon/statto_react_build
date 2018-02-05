import React from "react";
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {reactLocalStorage} from 'reactjs-localstorage';

const styles = {
    block: {
      maxWidth: 250,
    },
    toggle: {
      marginBottom: 16,
    },
    thumbOff: {
      backgroundColor: '#ffcccc',
    }, 
    trackOff: {
      backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
      backgroundColor: 'red',
    },
    trackSwitched: {
      backgroundColor: '#ff9d9d',
    },
    labelStyle: {
      color: '#e9e9e9',
      fontWeight:100
    },
  };
let Istoggled=false, SetLabel='Set as Default Profile';
export default class Store_Player_As_Default extends React.Component {

    Istoggled(value){
     Istoggled = value
    }

    toggle(e,i){
    
        if(i == true){
         
            reactLocalStorage.set('Store_Player', true);
            reactLocalStorage.set('Store_ID', this.props.Player.PLAYER_META.WP_ID);
            this.Istoggled(true);
        }
        else if(i == false){
          
          reactLocalStorage.set('Store_Player', false);
          reactLocalStorage.set('Store_ID', '');
          this.Istoggled(false);

        }
    }

    componentWillMount(){
      console.log(reactLocalStorage.get('Store_Player',true));
      if(reactLocalStorage.get('Store_Player') == 'true') {  this.Istoggled(true); }
    }


render(){
	return(
        <MuiThemeProvider>
            <Toggle
                    label={SetLabel}
                    style={styles.toggle}
                    labelStyle={styles.labelStyle}
                    onToggle={this.toggle.bind(this)}
                    defaultToggled={Istoggled}
             />
        </MuiThemeProvider>
		)
	}			
}