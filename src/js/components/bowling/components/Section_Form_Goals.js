import React from "react";

import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";

import Naked_Goals_wrapper  from "../../global/Naked_Goals_wrapper";
let Goals_Wickets_Average=[],Goals_Last_Years_Total=[],Goals_Runs_Average=[];
let LastYearsWickets=0;
export default class Section_Form_Guide extends React.Component {

    constructor() { super();  }
    
    findTotal(data,year,filter){
        
        let returnThis=0;
        data.map((game,i)=>{
            if(game.Year == year)
                {
                    if(!isNaN(parseInt(game[filter]))){ 
                        // console.log(year,returnThis,game[filter]);
                        returnThis = returnThis+ parseInt(game[filter]);
                    }
                }
        })
        return returnThis;
    }


    CreatePodData(data,Year,total,filter,type){
        let returnThis=[];
        let Num=0,Avg=0,perc=0, roundedPerc;
        
        // Find Year Filter
        data.map((game,i)=>{ 
                if(game.Year == Year[0].Year)
                    {
                        if(!isNaN(parseInt(game[filter]))){ 
                            Num = parseInt(Num) + parseInt(game[filter]);
                        }
                    }
            })
        
        // What int are we dividing by
        if(type == 'avg'){ Avg = total/Year.length;} else
        if(type == 'int'){Avg = total}
        
        // Create %
        perc = (Num/Avg.toFixed(0))*100;
        roundedPerc =  Math.ceil(perc / 10) * 10;
        
        // create and return array
        returnThis=[Avg.toFixed(0),Num,roundedPerc,perc.toFixed(0)]
        // console.log(returnThis);
        return returnThis;
    }


    componentWillMount(){ 
        // console.log(this.props, this.props.UI.filter.years)
        Goals_Wickets_Average=[],Goals_Wickets_Average=[],Goals_Runs_Average=[];
        let Player = this.props.Player, UI=this.props.UI;
        
        LastYearsWickets = this.findTotal(Player.raw_json,UI.filter.years[1].Year,'wickets')
       // LastYearsWickets = this.findTotal(Player.raw_json,UI.filter.years[1].Year,'wickets')



        Goals_Wickets_Average = this.CreatePodData(
                Player.raw_json,
                UI.filter.years,
                Player.career_form.Bowling_Wickets,
                'wickets',
                'avg'
        )
        Goals_Last_Years_Total = this.CreatePodData(
            Player.raw_json,
            UI.filter.years,
            LastYearsWickets,
            'wickets',
            'int'
        )

        Goals_Runs_Average = this.CreatePodData(
            Player.raw_json,
            UI.filter.years,
            Player.career_form.Bowling_RunsConceded,
            'for',
            'avg'
        )
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        return(
            <div>
    
                <Section_Subheader header="Goals are Calculated from your most recent playing year"/>
                <div class="row">


                    <Naked_Goals_wrapper 
                        title={"Beat career average of "+ Goals_Wickets_Average[0] +' Wickets a year'}
                        value={Goals_Wickets_Average[1] +' of '+Goals_Wickets_Average[0]} 
                        sub={Goals_Wickets_Average[3] +'% complete'}
                        width={Goals_Wickets_Average[2] }
                    />

                    <Naked_Goals_wrapper 
                        title={"Beat Last years total : "+ Goals_Last_Years_Total[0] +' Wickets'}
                        value={Goals_Last_Years_Total[1] +' of '+Goals_Last_Years_Total[0]} 
                        sub={Goals_Last_Years_Total[3] +'% complete'}
                        width={Goals_Last_Years_Total[2] }
                    />

                    <Naked_Goals_wrapper 
                        title={"Less than "+ Goals_Runs_Average[0] +' Runs Conceded'}
                        value={Goals_Runs_Average[1] +' of '+Goals_Runs_Average[0]} 
                        sub={Goals_Runs_Average[3] +'% complete'}
                        width={Goals_Runs_Average[2] }
                    />
                </div>
            </div>
        )
      }
  }