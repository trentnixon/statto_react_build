import React from "react";
import Select_Field from "./Select_Field";

export default class Predictor_Team_Selector extends React.Component {

    constructor() { super(); 
        this.state = {};
     }

    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        // console.log(this.props.TEAMS.Team_Roster)
    }
    
    render() {
        
            return ( 
                <div class="row">
                    <h4>Select Team.</h4>
                    <Select_Field   position={0} Roster={this.props.TEAMS.Team_Roster} Run={this.props.TEAMS.Team_Network_Run} />
                    <Select_Field   position={1} Roster={this.props.TEAMS.Team_Roster} Run={this.props.TEAMS.Team_Network_Run}  />
                    <Select_Field   position={2} Roster={this.props.TEAMS.Team_Roster}  Run={this.props.TEAMS.Team_Network_Run} />
                    <Select_Field   position={3} Roster={this.props.TEAMS.Team_Roster}  Run={this.props.TEAMS.Team_Network_Run} />
                    <Select_Field   position={4} Roster={this.props.TEAMS.Team_Roster}  Run={this.props.TEAMS.Team_Network_Run} />
                    <Select_Field   position={5} Roster={this.props.TEAMS.Team_Roster}  Run={this.props.TEAMS.Team_Network_Run} />
                    <Select_Field   position={6} Roster={this.props.TEAMS.Team_Roster}  Run={this.props.TEAMS.Team_Network_Run} />
                    <Select_Field   position={7} Roster={this.props.TEAMS.Team_Roster}  Run={this.props.TEAMS.Team_Network_Run} />
                </div>
             ); 
      }
  }