import React from "react";
import Half_Circle from "../stage/components/Half_Circle_Top";
import Content_Wrapper from "../stage/components/Content_Wrapper";
// Stage
import Section_Header from "../global/Section_Header";
import Wrapper from "../global/wrapper";
import Naked_Wrapper from  "../global/Naked_wrapper";

export default class Searching_Scorecards extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                        <Half_Circle>
                        <div class="row nomargin">
                                <div class="col-xs-12">
                                <Section_Header header="Searching for Scorecard" />
                                </div> 
                        </div>
                        </Half_Circle>

                        <Content_Wrapper AddClass="download_Scorecard">
                        <h2 class="tone1"> 
                                <i class='material-icons tone3 pull-left'>filter_list</i>
                                 Statto is looking up this game</h2>
                        </Content_Wrapper>

                </div>
             ); 
      }
  }