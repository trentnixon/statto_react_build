import React from "react";
import Identifier from "./News_Identifier";

export default class News_Milestone extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){      }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <li>
                    <div class="col-xs-1 nopadding">
                        <Identifier 
                            ID={this.props.item.type}
                            color="#b37383"
                        />
                    </div>
                    <div class="col-xs-11 nopadding details">
                        <div class="col-xs-10 nopadding">Approaching {this.props.item.target} {this.props.item.label}</div>
                        <div class="col-xs-2"><span>({this.props.item.value})</span></div>
                    </div>
                </li>
             ); 
      }
  }