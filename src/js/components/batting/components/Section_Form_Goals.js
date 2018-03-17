import React from "react";

import Section_Header from "../../global/Section_Header";
import Section_Subheader from "../../global/Section_Subheader";
import Content_Pod from "../../global/content_pod";

let Goals_Batting_LastYearsRuns=[],Goals_Average_50s=[],Goals_Runs_Average=[];
let LastYearsRuns=0;
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
        // 
        Goals_Batting_LastYearsRuns=[],Goals_Runs_Average=[],Goals_Average_50s=[];
        let Player = this.props.Player, UI=this.props.UI;
        
        LastYearsRuns = this.findTotal(Player.raw_json,UI.filter.years[1].Year,'Runs_Bare')
       // LastYearsWickets = this.findTotal(Player.raw_json,UI.filter.years[1].Year,'wickets')

      // console.log(Player.raw_json, Player.career_form)
      
       Goals_Runs_Average = this.CreatePodData(
            Player.raw_json,
            UI.filter.years,
            Player.career_form.Batting_Total_Runs,
            'Runs_Bare',
            'avg'
        )

        Goals_Batting_LastYearsRuns = this.CreatePodData(
                Player.raw_json,
                UI.filter.years,
                LastYearsRuns,
                'Runs_Bare',
                'int'
        )
        
        /**
         * Add new goals
         * Average 50s
         * Average Notouts
         * Average Ducks
         */

        
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
        return(
            <div>
                <Section_Header header={"Goals for "+this.props.UI.filter.years[0].Year} />
                <Section_Subheader header="Calculated from your most recent playing year"/>
                <div class="row">
                <Content_Pod 
                        title={"Beat Career Average of "+ Goals_Runs_Average[0] +' Runs a Year'}
                        value={Goals_Runs_Average[1] +' of '+Goals_Runs_Average[0]} 
                        sub={Goals_Runs_Average[3] +'% complete'}
                        width={"col-xs-12 goal gradient gradient_"+Goals_Runs_Average[2] }
                    />


                    <Content_Pod 
                        title={"Beat Last years total of  "+ Goals_Batting_LastYearsRuns[0] +' Runs'}
                        value={Goals_Batting_LastYearsRuns[1] +' of '+Goals_Batting_LastYearsRuns[0]} 
                        sub={Goals_Batting_LastYearsRuns[3] +'% complete'}
                        width={"col-xs-12 goal gradient gradient_"+Goals_Batting_LastYearsRuns[2] }
                    />
                </div>
            </div>
        )
      }
  } 