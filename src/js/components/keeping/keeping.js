import React from "react";
// Components
import Section_Navigation from "../_Pages/_Navigation/Section_Navigation";
import Icon_Dashboard from "../global/icons/dashboard";
let Keeping_Navigation=[];

export default class Display_Player_Keeping_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        Keeping_Navigation =[
            {
                title:'Overview',
                icon:<Icon_Dashboard />,
                Link:'keeping/overview'
            },{
                    title:'Career',
                    icon:<Icon_Dashboard />,
                    Link:'keeping/career'
                }
            ];
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div>
                    <Section_Navigation 
                        Navigation={Keeping_Navigation} 
                        Path={this.props.Player.PLAYER_META.WP_ID}
                    />
                </div>
             ); 
      }
  }