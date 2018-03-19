import React from "react";
import { Link } from 'react-router-dom'

import Full_Pie from "../recharts/pieCharts/full_pie";
import Link_to_Scorecard from "../../scorecards/components/Link_to_Scorecard";

let data=[], Display_Pie, Display_Link, Display_List;
export default class Expandable_Content extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
        console.log(this.props.List)
        data=[], Display_Pie='',Display_Link='', Display_List='';

        if(this.props.data){
            this.props.data.map((year,i)=>{
                if (isFinite(year[this.props.filter])) {
                    console.log(year.Year)
                    data.push({'name':year.Year, 'value':parseFloat(year[this.props.filter])})
                }
            })
        }

        if(data.length > 0){Display_Pie = <div class="col-xs-12"><Full_Pie data={data}/></div>}
        if(this.props.Link){ Display_Link = <div class="col-xs-12">[LINK]</div>}
        if(this.props.List){
            if(this.props.List.length > 0){
                Display_List = this.props.List.map((game,i)=>{
                    console.log(game)
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
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div class="row nomargin" >
                    {Display_Link}                
                    {Display_Pie}
                    {Display_List}
                </div>
             ); 
      }
  }