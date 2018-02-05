import React from "react";

// Components
import Section_Navigation from "../_Pages/_Navigation/Section_Navigation";

// actions 
import {breadcrumbs} from  "../../actions/ui";

let Batting_Navigation=[];

export default class Display_Player_Batting_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){
        // set BC
        breadcrumbs('batting','parent');

         Batting_Navigation =[
            {
                title:'Overview',
                icon:this.props.UI.icons.dashboard,
                Link:'batting/overview'
            },
            {
                title:'Career',
                icon:this.props.UI.icons.history,
                Link:'batting/career'
            },
            {
                title:'Batting Positions',
                icon:this.props.UI.icons.achievements,
                Link:'batting/positions'
            },
            {
                title:'Dismissals',
                icon:this.props.UI.icons.achievements,
                Link:'batting/dismissals'
            }
        ];
     }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <Section_Navigation 
                        Navigation={Batting_Navigation} 
                        Path={this.props.Player.PLAYER_META.WP_ID}
                    />
                </div>
             ); 
      }
  }