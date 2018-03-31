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
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>  
                    <Section_Header header="Most wickets playing :" />
                    <div class="row">
                         <div class="col-xs-6 text-right tone1"><h4>For</h4> <span class="tone1">{Team[1]} : {Team[0]} {this.props.Tag}</span></div>
                        <div class="col-xs-6 tone3"><h4>Against </h4> <span class="tone3"> {against[1]} : {against[0]} {this.props.Tag} </span> </div>   
                    </div>
                </div>
             ); 
      }
  }