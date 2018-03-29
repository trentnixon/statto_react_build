import React from "react";
import Section_Nav_Item from "../../global/section_nav";
import Icon_Batting from "../../global/icons/batting";
import Icon_Bowling from "../../global/icons/bowling";
import Icon_Keeping from "../../global/icons/keeping";
import Icon_Team from "../../global/icons/Team";
import Icon_History from  "../../global/icons/History";
import Icon_Dashboard from "../../global/icons/dashboard";

let section_nav=[];


export default class Display_Player_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        console.log(this.props.Player.PLAYER_META.WP_ID)

             section_nav=[
                {
                    title:'overview',
                    icon:<Icon_Dashboard />,
                    Link:'overview'
                },
                {
                    title:'Batting',
                    icon:<Icon_Batting />,
                    Link:'batting'
                },
                {
                    title:'Bowling',
                    icon:<Icon_Bowling />,
                    Link:'bowling'
                },
                {
                    title:'Keeping',
                    icon:<Icon_Keeping />,
                    Link:'keeping'
                },
                {
                    title:'History',
                    icon:<Icon_History />,
                    Link:'history'
                },
                {
                    title:'By Teams',
                    icon:<Icon_Team />,
                    Link:'teams'
                },
            ];
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
       
            return (  
                <div class="section_Nav row">
                
                    {section_nav.map((item,i)=>{
                        return(
                            <div key={i} class="col-xs-6">
                                <Section_Nav_Item title={item.title} path={this.props.Player.PLAYER_META.WP_ID} icon={item.icon} Link={item.Link}/>
                            </div>
                        )
                        }
                    )}
                 
                </div>
            );
      }
  }