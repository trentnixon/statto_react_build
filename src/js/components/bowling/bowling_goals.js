import React from "react";
import Section_Header from "../global/Section_Header";
import Section_Subheader from "../global/Section_Subheader";
import Section_FormGuide from "./components/Section_FormGuide";
import Section_Goals from "./components/Section_Form_Goals";
// actions 
import {breadcrumbs} from  "../../actions/ui";

export default class batting_runs extends React.Component {

    componentWillMount(){ 
        // set BC
        breadcrumbs('bowling > Form Guide','parent');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        return( 
            <div>
                <Section_FormGuide {...this.props} />
                <Section_Goals {...this.props} />
            </div>
        ); 
      }
  }