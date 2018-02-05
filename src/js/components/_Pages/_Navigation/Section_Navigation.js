import React from "react";
import Section_Nav_Item from "../../global/section_nav";

/**
 * Send Sections navigation to this compoennt.
 * Component must have a Array of navigation items with the follow props
 *  title:'Career',
    icon:this.props.UI.icons.dashboard,
    Link:'batting/career'

    And include the Player ID as Path
 */
export default class Display_Player_Home extends React.Component {

    constructor() { super();  }
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
       
            return (  
                <div class="section_Nav">
                
                    {this.props.Navigation.map((item,i)=>{
                        return(
                            <div key={i} class="col-xs-6">
                                <Section_Nav_Item 
                                    title={item.title} 
                                    path={this.props.Path} 
                                    icon={item.icon} 
                                    Link={item.Link}
                                />
                            </div>
                        )
                    })}
                </div>
            );
      }
  }