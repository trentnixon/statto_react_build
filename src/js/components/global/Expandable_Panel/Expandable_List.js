import React from "react";

import Link_to_Scorecard from "../../scorecards/components/Link_to_Scorecard";
let Display_List;
export default class Expandable_List extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        Display_List='';
        if(this.props.List){
            if(this.props.List.length > 0){
                Display_List = this.props.List.map((game,i)=>{
                    if(this.props.type == 'batting'){
                        return(
                            <div key={i}  class="row List-Of-Games">
                                <div class="col-xs-7 nopadding "> {game.Opposition} </div>
                                <div class="col-xs-2 nopadding text-center"> {game.Batting_Runscored}</div>
                                <div class="col-xs-2 nopadding text-center">{game.Batting_BallsFaced}</div>
                                <div class="col-xs-1 nopadding text-center"> <Link_to_Scorecard ID={game.GameID}/> </div>
                            </div>                  
                        )
                    }
                    else if(this.props.type == 'bowling'){
                        return(
                            <div key={i}  class="row List-Of-Games">
                                <div class="col-xs-7 nopadding "> {game.Opposition} </div>
                                <div class="col-xs-2 nopadding text-center"> {game.Bowling_Figures}</div>
                                <div class="col-xs-2 nopadding text-center">{game.Bowling_OversBowled}</div>
                                <div class="col-xs-1 nopadding text-center"> <Link_to_Scorecard ID={game.GameID}/> </div>
                            </div>
                        )
                    }
                    
            })
        }}
    }
    
    render() {
            return ( 
                <div>
                    {Display_List}
                </div>
             ); 
      }
  }