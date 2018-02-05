import React from "react";
import Section_Header from "../global/Section_Header";

export default class batting_Dismissals extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props)
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                        <Section_Header header="Batting Dismissals" />
                    
                </div>
             ); 
      }
  }