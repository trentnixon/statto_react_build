import React from "react";
import Section_Header from "../../global/Section_Header";

let Team, Oppo;
export default class List_Best_SEC extends React.Component {

    constructor() { super();  }
    
    findBest(data)
    {
        let Best=10000,Club;
        data.map((game,i)=>{
            if(game.Games.length  > 1)
                {
                    if (isFinite(game[this.props.filter])) { 
                        if(parseFloat(game[this.props.filter]) < Best)
                            {
                                Best = game[this.props.filter];
                                Club = game.Team;
                        }
                    }
                }
        })
        return [Best,Club]
    }
    
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            
            Team =  this.findBest(this.props.Player.team_played_for_stats)
            Oppo =  this.findBest(this.props.Player.opposition_stats)
            
            return ( 
                <div>
                    <Section_Header header={this.props.header} />
                    <ul class="list noborder">
                        <li>For : <span class="tone1">{Team[1]} : {Team[0]} {this.props.Tag}</span></li>
                        <li>Against : <span class="tone3"> {Oppo[1]} : {Oppo[0]} {this.props.Tag} </span> </li>
                    </ul>
                </div>
             ); 
      }
  }