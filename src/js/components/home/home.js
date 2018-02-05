import React from "react";
import { connect } from "react-redux";

import Section_nav from "./components/section_nav";

// actions 
import {breadcrumbs} from  "../../actions/ui";


@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER
    }
})
export default class Display_Player_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
         // set BC
        breadcrumbs('Home','parent');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div>
                    <Section_nav {... this.props} />
                </div>
             ); 
      }
  }