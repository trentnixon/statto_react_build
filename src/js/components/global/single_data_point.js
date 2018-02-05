import React from "react";
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import {  Link } from 'react-router-dom';
var Sizing;

/*
	props required
		Archclass
		icon
		heading
		value
		Link
		
	Optional
	
	widgetSize	
*/

export default class Single_Data_Point extends React.Component {
  render() {		  
		 if(this.props.widgetSize){ Sizing =this.props.widgetSize } else {Sizing="col-md-3 col-xs-6 col-sm-6"} 
    return (
				<div class={Sizing}>
				<CSSTransitionGroup
				  transitionName="example"
				  transitionAppear={true}
				  transitionAppearTimeout={500}
				  transitionEnter={false}
				  transitionLeave={false}>
		  
					<div class={"widget widget-stats " + this.props.Archclass} >
						<div class="stats-icon"><i class={'fa '+ this.props.icon}></i></div>
						<div class="stats-info">
							<h4>{this.props.heading}</h4>
							<p>{this.props.value}</p>	
						</div>
						<div class="stats-link">
							<Link to={this.props.Link}>View Detail <i class="fa fa-arrow-circle-o-right"></i></Link>
						</div>
					</div>
				
				</CSSTransitionGroup>
				</div>
	);
  }
}