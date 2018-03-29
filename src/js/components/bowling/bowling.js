import React from "react";

// Components
import Section_Navigation from "../_Pages/_Navigation/Section_Navigation";
import Icon_Bowling from "../global/icons/bowling";
import Icon_Team from "../global/icons/Team";
import Icon_History from "../global/icons/History";
import Icon_Dashboard from "../global/icons/dashboard";

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
                icon:<Icon_Dashboard />,
                Link:'bowling/overview'
            },
            {
                title:'Wickets',
                icon:<Icon_Bowling />,
                Link:'bowling/wickets'
            },
            {
                title:'A,E,S',
                icon:<Icon_Bowling />,
                Link:'bowling/aes'
            },
            {
                title:'Form guide & Goals',
                icon:<Icon_Bowling />,
                Link:'bowling/goals'
            },
            {
                title:'Played for',
                icon:<Icon_Team />,
                Link:'bowling/playedfor'
            },
            {
                title:'Opposition',
                icon:<Icon_History />,
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