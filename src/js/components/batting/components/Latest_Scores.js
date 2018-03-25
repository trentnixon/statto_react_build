import React from "react";

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <ul class="list">
                            <li class="row">
                                     <div class="col-xs-2 text-center">Runs</div>
                                     <div  class="col-xs-2 text-center">Balls</div>
                                     <div  class="col-xs-8 col-xs-8 text-right"> </div>
                            </li>
                      {
                          this.props.Player.last_ten_games.map((game,i)=>{
                              if(game.Batting_Runscored){
                              return(
                                  <li class="row" key={i}>
                                     <div class="col-xs-2 text-center">{game.Batting_Runscored} </div>
                                     <div  class="col-xs-2 text-center">{game.Batting_BallsFaced}  </div>
                                     <div  class="col-xs-8 col-xs-8 text-right nopadding">{game.Opposition} </div>
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