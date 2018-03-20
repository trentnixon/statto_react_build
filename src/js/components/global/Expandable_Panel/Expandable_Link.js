import React from "react";
import { Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import LinktoPage from 'material-ui/svg-icons/action/exit-to-app';


let Display_Link;
export default class Expandable_Link extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        Display_Link='';
        if(this.props.Link){ Display_Link = 
            <div class="col-xs-12 nopadding Expandable_Click_through">
                <Link to={this.props.Link}>
                    <FlatButton  
                        icon={
                            <FontIcon color="white" className="material-icons">
                                exit_to_app
                            </FontIcon>} 
                    />
                    More Info
                </Link>
            </div>
        }
    }
    
    render() {
            return (<div> {Display_Link} </div>); 
      }
  }