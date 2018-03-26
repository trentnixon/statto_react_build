import React from "react";
import Section_Header from "../../global/Section_Header";

let  PlayedFor,PlayedAgainst,NewData=[];
export default class List_Best_SEC extends React.Component {

    constructor() { super();  }

    CleanInt(data){
        NewData=[];
        data = _.orderBy(data, [this.props.filter],[this.props.order]);
        
        data.map((game,i)=>{
                if(game.Games.length  > 2)
                {
                    NewData.push(game)
                }
        })

        NewData = _.filter(NewData, this.props.filter: "NaN");
        NewData = _.filter(NewData, this.props.filter: 0);
        return NewData;
    }
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            
        PlayedFor = this.CleanInt(this.props.Player.team_played_for_stats);
        PlayedAgainst = this.CleanInt(this.props.Player.opposition_stats);
   
            return ( 
                <div>
                    <Section_Header header={this.props.header} />
                    <div class="row">
                        <div class="col-xs-6 text-right tone1"><h4>For</h4> <span class="tone1">{PlayedFor[0]['Team']} : {PlayedFor[0][this.props.filter]} {this.props.Tag}</span></div>
                        <div class="col-xs-6 tone3"><h4>Against </h4> <span class="tone3"> {PlayedAgainst[0]['Team']} : {PlayedAgainst[0][this.props.filter]} {this.props.Tag} </span> </div>
                    </div>
                </div>
             ); 
      }
  }