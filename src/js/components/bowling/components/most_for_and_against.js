import React from "react";
import Section_Header from "../../global/Section_Header";

let num=0, Team=0, against=0;
export default class Bowling_Most_For_and_Against extends React.Component {

    constructor() { super();  }
    
    findNum(data,num){
        let Value=0, Club;

        data.map((game,i)=>{
            if(game.WicketsTaken > num)
                {
                    num =game.WicketsTaken;
                    Club = game.Team;
                }
        })
        return [num,Club]
    }

    componentWillMount(){ 

            Team =  this.findNum(this.props.Player.team_played_for_stats, 0)
            against =  this.findNum(this.props.Player.opposition_stats, 0)
            
    }

    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       }
    
    render() {
            return ( 
                <div class="darkWrapper"> 
                    <Section_Header header="Most wickets playing :" />
                    <ul class="list noborder">
                        <li >For : <span class="tone1">{Team[1]} ({Team[0]}) </span></li>
                        <li>Against : <span class="tone3"> {against[1]} ({against[0]}) </span> </li>
                    </ul>
                </div>
             ); 
      }
  }