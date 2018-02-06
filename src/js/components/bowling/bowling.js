import React from "react";

// Components
import Section_Navigation from "../_Pages/_Navigation/Section_Navigation";

// actions 
import {breadcrumbs} from  "../../actions/ui";

let Bowling_Navigation=[];

export default class Display_Player_Bowling_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        
        // set BC
        breadcrumbs('bowling','parent');

        Bowling_Navigation =[
            {
                title:'Overview',
                icon:this.props.UI.icons.dashboard,
                Link:'bowling/overview'
            },
            {
                title:'Wickets',
                icon:this.props.UI.icons.bowling,
                Link:'bowling/wickets'
            },
            {
                title:'A,E,S',
                icon:this.props.UI.icons.bowling,
                Link:'bowling/aes'
            },
            {
                title:'Form guide & Goals',
                icon:this.props.UI.icons.bowling,
                Link:'bowling/goals'
            },
            {
                title:'Played for',
                icon:this.props.UI.icons.team,
                Link:'bowling/playedfor'
            },
            {
                title:'Opposition',
                icon:this.props.UI.icons.history,
                Link:'bowling/opposition'
            }
        ];
     }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Section_Navigation 
                        Navigation={Bowling_Navigation} 
                        Path={this.props.Player.PLAYER_META.WP_ID}
                    />
                </div>
             ); 
      }
  }