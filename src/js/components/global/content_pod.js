import React from "react";
import { Link } from 'react-router-dom'

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Display_Content_Pod extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            // console.log(this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
    }
    
    render() {
            return ( 
               
                <div class={"contentpod-item "+ this.props.width}>
                    <div>
                    <CSSTransitionGroup
                        transitionName="content_pod"
                        transitionAppear={true}
                        transitionEnter={false}
                        transitionLeave={false}
                        transitionEnterTimeout={700}
                        transitionLeaveTimeout={200}
                        transitionAppearTimeout={0}
                    >
                        <h4>{this.props.title}</h4>
                        <p class="value">{this.props.value}</p>
                        <hr />
                        <p class="sub">{this.props.sub}</p>
                    </CSSTransitionGroup>
                    </div>
                </div>
                
                
             ); 
      }
  }