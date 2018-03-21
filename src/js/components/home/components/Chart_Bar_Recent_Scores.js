import React from "react";
import Single_Bar from "../../global/recharts/barCharts/One_Column_Bar";
let data=[];
export default class Recent_Scores extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        data=[]; 
        this.props.Player.last_ten_games.map((game,i)=>{
               //  data.push({name: game.Opposition, Runs: game.Runs_Bare})
                data.push({name:game.Opposition, Runs:parseInt(game.Batting_Runscored), Year:game.Year})
        })

        data.reverse();
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return (
                      <Single_Bar 
                            data={data} 
                            Theme="Dark"
                            datakey="Runs"
                      />
             ); 
      }
  }