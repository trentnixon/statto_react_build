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

    render() {
            
        PlayedFor = this.CleanInt(this.props.Player.team_played_for_stats);
        PlayedAgainst = this.CleanInt(this.props.Player.opposition_stats);
   
            return ( 
                <div>
                    <Section_Header header={this.props.header} />
                    <div class="row Stat-Text">
                        <div class="col-xs-12 tone1">Playing For</div>
                        <div class="col-xs-6 tone1"><h3>{PlayedFor[0]['Team']}</h3></div><div class="col-xs-6 text-right"><h3>{PlayedFor[0][this.props.filter]} {this.props.Tag}</h3></div>
                        <div class="col-xs-12 tone3 mt20"> Playing Against</div>
                        <div class="col-xs-6 tone3"><h3>{PlayedAgainst[0]['Team']}</h3></div><div class="col-xs-6 text-right"><h3>{PlayedAgainst[0][this.props.filter]} {this.props.Tag}</h3></div>
                    </div>
                </div>
             ); 
      }
  }