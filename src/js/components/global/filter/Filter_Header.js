import React from "react";
import ContentAdd from 'material-ui/svg-icons/content/filter-list';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let total, filtered;
export default class Display_Filter_Header extends React.Component {

    constructor() { super();  }

    componentWillMount(){ 
        total = this.props.Player.raw_json.length;
        filtered = this.props.Player.filtered_json.length
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
           total = nextProps.Player.raw_json.length;
           filtered = nextProps.Player.filtered_json.length      
        } 
    
    render() {
            return ( 
                <div class="filter-header">
                   <h2>
                        <i class="material-icons white">filter_list</i>  
                        Filter &amp; Sort Games ( { filtered +' of '+ total} )
                    </h2>
                </div>
             ); 
      }
  }