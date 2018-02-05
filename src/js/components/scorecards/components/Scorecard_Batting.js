import React from "react";

export default class Display_Player_Batting extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    
    render() {
        
            return ( 
                <div class="Display_innings">
                        <div class="player batting row">
                                    <div class="col-xs-8 name "> </div>
                                    <div class="col-xs-1 text-right">R </div>
                                    <div class="col-xs-1 text-right"> B </div>
                                    <div class="col-xs-2 text-right "> SR </div>
                                </div>
                    {
                        this.props.innings.map((game,i)=>{
                        
                        if(game.batting_position != 0){
                            return(
                                <div key={i} class="player batting row">
                                    <div class="col-xs-8 name">
                                        {game.batting_position}. {game.Player_Name}
                                        <br />
                                        <span class="howout">{game.How_Out}</span>
                                    </div>
                                    <div class="col-xs-1 int text-right">
                                        {game.Runs}
                                    </div>
                                    <div class="col-xs-1 int text-right">
                                        {game.Balls_Faced}
                                    </div>
                                    <div class="col-xs-2 int text-right">
                                     {game.StrikeRate}
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