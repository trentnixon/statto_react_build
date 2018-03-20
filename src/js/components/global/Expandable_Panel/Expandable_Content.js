import React from "react";

import Expandable_Pie from "./Expandable_Pie_Chart";
import Expandable_List from "./Expandable_List";
import Expandable_Link from "./Expandable_Link";

let Display_Link;
export default class Expandable_Content extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
      
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="row nomargin content_list" >
                    <Expandable_Pie {... this.props}/>
                    <Expandable_Link {... this.props}/>
                    <Expandable_List {... this.props}/>  
                </div>
             ); 
      }
  }