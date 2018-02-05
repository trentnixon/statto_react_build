import React from "react";
import { Link } from 'react-router-dom'

export default class Display_Player_Settings_Home extends React.Component {

    constructor(props){
        super(props);
      }

    componentWillMount(){  }
    
    render() {
            return ( 
                <div class="row">
                    <div class="pull-right go_to ">
                        <Link to={this.props.path}>
                            <i class="material-icons tone4">subdirectory_arrow_right</i>
                            <p>{this.props.label}</p>
                        </Link>
                    </div>
                </div>
             ); 
      }
  }