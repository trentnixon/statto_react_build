import React from "react";
import Filter_select from "./Filter_Select";


let Years=[];
export default class Display_History_Filter extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
    // console.log(this.props.UI.filter)
     }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       } 
    
    render() {
            return ( 
                <div class="filter-group row">
                    <h2>
                        <i class="material-icons black">group</i>
                        Teams i have played for
                    </h2>
                    <Filter_select 
                        list={this.props.UI.filter.teams}
                        storedValue={this.props.UI.filter.selectedTeam}
                        type="STORE_SELECTED_TEAM"
                    />
                    <p>Currently only LMS "Counting" Games are included in these results</p>
                </div>
             ); 
      }
  }