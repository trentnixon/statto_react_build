import React from "react";

export default class Display_Player_Batting extends React.Component {

    constructor() { super();  }
    componentWillMount(){ }

    render() {
        
            return ( 
                <div class="Display_innings">
                    <div class="player bowling row">
                                    <div class="col-xs-6 name"></div>
                                    <div class="col-xs-2 text-right">Fig</div>
                                    <div class="col-xs-2 text-right">OB</div>
                                    <div class="col-xs-2 text-right">E</div>
                                </div>

                    {
                        this.props.innings.map((game,i)=>{
                            if(game.Overs_Bowled !=0.0){
                                return(
                                    <div key={i} class="player bowling row">
                                        <div class="col-xs-6 name">
                                            {game.Player_Name}
                                        </div>
                                        <div class="col-xs-2 int text-right">
                                            {game.Wickets}/{game.runs_conceded}
                                        </div>
                                        <div class="col-xs-2 int text-right">
                                            {game.Overs_Bowled}
                                        </div>
                                        <div class="col-xs-2 int text-right">
                                            {game.Economy}
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
             ); 
      }
  }