import React from "react";
import { connect } from "react-redux";
import Display_User_History from "../global/recent_game_pod";
import Section_Header from "../global/Section_Header";
import History_Filter from "../global/filter/Filter";
import Content_Wrapper from "../stage/components/Content_Wrapper";
import Half_Circle from "../stage/components/Half_Circle_Top";

// actions 
import {breadcrumbs} from  "../../actions/ui";

let history;
@connect((store) =>{
    return{
        UI: store.UI,
        Player: store.PLAYER
    }
})
export default class Display_History extends React.Component {

    constructor() { super();  }
   
    componentWillMount(){
          history = this.props.Player.filtered_json;
          breadcrumbs('History','parent');
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
          history = nextProps.Player.filtered_json;
       } 
    
    render() {
            return ( 
                <div>
                 <Half_Circle>
                    <Section_Header header="History" />
                </Half_Circle>
                <Content_Wrapper>
                    <History_Filter {... this.props}/>
                    <div class="row">
                        {
                            history.map((game,i)=>{
                                // console.log(game)
                                 return(
                                     <div key={i}>
                                         <Display_User_History 
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
                             })
                        }
                    </div>
                    </Content_Wrapper>
                </div>
             ); 
      }
  }