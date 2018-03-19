import React from "react";

import World_ranking_circle from "./world_ranking_circle";
import World_ranking_progression from "./World_ranking_Progression";
    
export default class Pie_vs_Line_Header extends React.Component {

    constructor() { 
        super();  
        this.state = {
            activeIndex: 0,
            toggle:'Pie',
        };
    }
      
      HandleClick(event){ 
        // console.log(event,event.currentTarget.dataset.title,this.setState);
        this.setState({
          toggle:event.currentTarget.dataset.title,
        });
      }
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        if(this.state.toggle == 'Pie'){
            return(
                <div>
                    <World_ranking_circle value={this.props.Pie} />
                    <div>
                    <div class="text-center">
                        <div class="btn-group buttonGroup" role="group" aria-label="Pie-Selector">
                            <button type="button" onClick={this.HandleClick.bind(this)} data-title="Pie"  class="btn btn-secondary active" id={this.state.toggle == 'Pie' ? 'active' : ''} >Pie</button>
                            <button type="button" onClick={this.HandleClick.bind(this)} data-title="Line" class="btn btn-secondary" id={this.state.toggle == 'Line' ? 'active' : ''}>Line</button>
                         </div>
                    </div>
                </div>
                </div>
            )
        }
        else if(this.state.toggle ='Line'){
            return(
                <div>
                    <World_ranking_progression Rankings={this.props.Line} dataKey={this.props.dataKey} />
                    <div>
                    <div class="text-center">
                        <div class="btn-group buttonGroup" role="group" aria-label="Pie-Selector">
                            <button type="button" onClick={this.HandleClick.bind(this)} data-title="Pie" class="btn btn-secondary active" id={this.state.toggle == 'Pie' ? 'active' : ''} >Pie</button>
                            <button type="button" onClick={this.HandleClick.bind(this)} data-title="Line" class="btn btn-secondary" id={this.state.toggle == 'Line' ? 'active' : ''}>Line</button>
                         </div>
                    </div>
                </div>
                </div>
            )
        }
      }
  }