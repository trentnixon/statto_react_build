import React from "react";
import { connect } from "react-redux";

import brain from 'brain.js';
import {TeamData} from "../../actions/teams";

import Content_Wrapper from "../../components/stage/components/Content_Wrapper";
import Half_Circle from "../../components/stage/components/Half_Circle_Top";
import Team_Selector from "./Team_Selector";


const network = new brain.NeuralNetwork();
const TD = new TeamData();

const TeamID = "4590";

let  DisplayResult=0, ResultsScanned=0, result_win=0, result_lose=0;
@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER,
        GAMES: store.GAMES,
        BATTING: store.BATTING,
        TEAMS:store.TEAMS
    }
})

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super(); 
        this.state = {networkSet: false};
     }
    

    RunNetwork(data){
        let result = network.run(data);
        console.log(result)
        return result;
     }


    TrainNetwork(data){
        console.log(data);
        this.setState({networkSet: true}); 
        network.train(data);
    }

    componentWillMount(){ 
        TD.TeamID=4590;
        TD.CollectTeamData();
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 

       
        
    if(nextProps.TEAMS.Team_Network_Training != false && this.state.networkSet == false)
    {  this.TrainNetwork(nextProps.TEAMS.Team_Network_Training);  }


    if(nextProps.TEAMS.Team_Network_Run.length == 8){

            console.log(nextProps.TEAMS.Team_Network_Run.length)
            DisplayResult = this.RunNetwork(nextProps.TEAMS.Team_Network_Run);
            result_win= (DisplayResult.win*100).toFixed(2);
            result_lose=(DisplayResult.lost*100).toFixed(2);
        }
    }
    
    render() {
            return ( 
                <div>
                    <Half_Circle></Half_Circle>

                    <Content_Wrapper >
                        <h1>Statto AI | Result Predictor</h1>
                        <p>Team : {TeamID} |  Colts </p>

                        
                        <Team_Selector {... this.props}/>
                        
                        <h3>Results!</h3>
                        <h3>{result_win} % Win | {result_lose} % Lose</h3>
                        
                    </Content_Wrapper>
                </div>
             ); 
      }
  }