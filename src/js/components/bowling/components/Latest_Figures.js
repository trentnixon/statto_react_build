import React from "react";

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <ul class="list">
                            <li class="row">
                                     <div class="col-xs-3 text-center">Figures</div>
                                     <div  class="col-xs-2 text-center">Overs</div>
                                     <div  class="col-xs-7 col-xs-8 text-right"> </div>
                            </li>
                      {
                          this.props.Player.last_ten_games.map((game,i)=>{
                              if(game.Bowling_Figures){
                                return(
                                    <li class="row" key={i}>
                                        <div class="col-xs-3 text-center">{game.Bowling_Figures} </div>
                                        <div  class="col-xs-2 text-center">{game.Bowling_OversBowled}  </div>
                                        <div  class="col-xs-7 text-right nopadding">{game.Opposition} </div>
                                    </li>
                                )
                            }
                          })
                      }
                      </ul>
                </div>
             ); 
      }
  }