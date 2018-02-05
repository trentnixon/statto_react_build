import React from "react";
import { Link } from 'react-router-dom'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Display_Section_Nav extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
          //  console.log(this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
    }
    
    render() {
            return ( 
               
                <div class="section-nav-item">
                    <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionEnter={false}
                    transitionLeave={false}
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={200}
                    transitionAppearTimeout={0}
                    >
                        <Link to={'/'+this.props.path+'/'+this.props.Link}>
                            {this.props.icon}
                            <p>{this.props.title}</p>
                        </Link>
                    </CSSTransitionGroup>
                </div>
                
                
             ); 
      }
  }