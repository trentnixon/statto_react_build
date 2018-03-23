import React from "react";
import Display_Last_3_Games from "../../global/recent_game_pod";
let Last3Games;



export default class Display_Dashboard extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
           // console.log(this.props.Player.last_ten_games)

            Last3Games = this.props.Player.last_ten_games.map((game,i)=>{
             //   console.log(game) 
                if(i < 5){ 
                return(<div key={i}>
                        <Display_Last_3_Games 
                            Team={game.Team}
                            Opposition={game.Opposition}
                            Date={game.Date}
                            Runs={game.Batting_Runscored}
                            BallsFaced={game.Batting_BallsFaced}
                            BowlingFigures ={game.Bowling_Figures}
                            OversBowled={game.Bowling_OversBowled}
                            width="col-xs-12"
                            ID={game.GameID}
                        />
                        </div>
                   )
                } 
            })
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        //
            return ( 
                <div>
                    <div class="row">
                        {Last3Games}
                    </div>
                </div>
             ); 
      }
  }