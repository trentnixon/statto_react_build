import React from "react";
import Section_Nav_Item from "../../global/section_nav";
let section_nav=[];


export default class Display_Player_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        console.log(this.props.Player.PLAYER_META.WP_ID)

             section_nav=[
                {
                    title:'overview',
                    icon:this.props.UI.icons.dashboard,
                    Link:'overview'
                },
                {
                    title:'Batting',
                    icon:this.props.UI.icons.batting,
                    Link:'batting'
                },
                {
                    title:'Bowling',
                    icon:this.props.UI.icons.bowling,
                    Link:'bowling'
                },
                {
                    title:'Keeping',
                    icon:this.props.UI.icons.keeping,
                    Link:'keeping'
                },
                {
                    title:'History',
                    icon:this.props.UI.icons.history,
                    Link:'history'
                },
                {
                    title:'By Teams',
                    icon:this.props.UI.icons.team,
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