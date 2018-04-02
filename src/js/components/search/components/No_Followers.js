import React from "react";

import Half_Circle from "../../stage/components/Half_Circle_Top";
import Section_Header from "../../global/Section_Header";
import AddPlayer from "../../global/icons/AddPlayer";
import Content_Wrapper from "../../stage/components/Content_Wrapper";


export default class No_Followers extends React.Component {

 
    componentWillMount(){ }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        return(
            <div>
                 <Half_Circle>
                        <Section_Header header="Following"/>
                    </Half_Circle>
                    <Content_Wrapper>
                        <h2>No Players Found</h2>
                        <p> Use the <span class="tone3"><AddPlayer /></span> Icon next to players names or with player information to add them to your favorites list</p>
                    </Content_Wrapper>
            </div>
        )   
      }
  } 