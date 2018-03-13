import React from "react";

export default class Display_Player_Settings_Home extends React.Component {

    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this); // i think you are missing this
     }
     
     goBack(){
         this.props.history.goBack();
     }
    
    componentWillMount(){  }
    
    render() {
            return ( 
                <div onClick={this.goBack} class="pull-left go_back">
                    <i class="material-icons tone2">backspace</i>
                </div>
             ); 
      }
  }