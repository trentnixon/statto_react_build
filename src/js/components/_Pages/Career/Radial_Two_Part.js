import React from "react";
import Section_Header from "../../global/Section_Header";
import Radial_two_part from "../../global/recharts/radial/Radial_two_part";


export default class Radial_Two_Part extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="darkWrapper">
                    <Section_Header header={this.props.title}  />
                    <Radial_two_part data={this.props.data} />  
                    <p>:: ADD FILTER TO THIS :: Avg vs SR etc :: </p>
                    <p> Add this to Bowling </p> 
                </div>
        ); 
      }
  }