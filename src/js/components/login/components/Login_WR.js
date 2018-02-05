import React from "react";

let Value=0, Icon;
export default class Login_WR extends React.Component {

    componentWillMount(){ 
            
            if(this.props.Value[0] < this.props.Value[1]){
                Icon="fa fa-arrow-up ";
            }
            else if(this.props.Value[0] > this.props.Value[1]){
                Icon="fa fa-arrow-down";
            }
            else{
                Icon="";
            }
    }
render(){
	return(
			<div class="col-md-4 col-xs-4">
                <div class="wr_at_a_glance">
                    {this.props.Icon}
                    <span>{this.props.Value}  <i class={Icon}> </i></span>
                 </div>
            </div>
		)
	}			
}