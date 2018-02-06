import React from "react";
import Section_Header from "../global/Section_Header";

// Import Components
import Triple_Line from "./components/Chart_Line_avg_sr_ec";

// Charts
import Pie_Metric_over_the_years from "./components/Chart_Pie_Metric_Over_The_Years";
import Double_Line_Chart from "./components/Chart_Metric_Lines";
import List_Best_AEC from "./components/List_Best_AES";

let AES;
export default class batting_runs extends React.Component {

    CreateAES(data,years){

        let returnThis=[]

        // reverse years array to start at first game
        let TheseYears = years.slice().reverse(), length=years.length,i=0;
        
        let LineAve=[],LineEco=[],LineSR=[];
        let progressive_Average=0,progressive_Economy=0,progressive_StrikeRate=0,progressive_runs=0, progressive_wickets=0, progressive_overs=0;
      
        /* 
            This should be moved elsewhere.. seems a lot of logic for a component!

        */


while(i < length){
    let bowling_inn=0,GameFigures=0, WicketsTaken=0,RunsConceded=0, Bowling_Average=0, EconomyRate=0,BowlingstrikeRate=0, OversBowled=0;
    
        data.raw_json.map((game,t)=>{
               // console.log(TheseYears[i].Year);
            if(game.Year == TheseYears[i].Year)
                {
                if(parseInt(game.Bowling_OversBowled) > 0){
                           // console.log(game)
                            WicketsTaken = parseInt(WicketsTaken) + parseInt(game.wickets);
                            progressive_wickets = parseInt(progressive_wickets) + parseInt(game.wickets);
                           
                            RunsConceded = RunsConceded + parseInt(game.for);
                            progressive_runs = progressive_runs + parseInt(game.for);
                            
                            OversBowled = OversBowled + parseInt(game.Bowling_OversBowled)
                            progressive_overs = progressive_overs + parseInt(game.Bowling_OversBowled)

                            bowling_inn++;
                            
                            progressive_Average = parseInt(progressive_runs)/parseInt(progressive_wickets);  
                            progressive_Economy = progressive_runs/progressive_overs;
                            progressive_StrikeRate = (progressive_overs * 5) /progressive_wickets;
                            
                            if (isFinite(progressive_Average)) {
                                LineAve.push({'Year':TheseYears[i].Year,'Average': parseFloat(progressive_Average.toFixed(2)),'Career':data.career_form.Bowling_Average})
                              }
                            
                            if (isFinite(progressive_Economy)) {
                                LineEco.push({'Year':TheseYears[i].Year,'Economy': parseFloat(progressive_Economy.toFixed(2)),'Career':data.career_form.Bowling_Economy_Rate})
                              }
                            if (isFinite(progressive_StrikeRate)) {
                                LineSR.push({'Year':TheseYears[i].Year,'Strikerate': parseFloat(progressive_StrikeRate.toFixed(2)),'Career':data.career_form.Bowling_Strike_Rate})
                              } 

                        } 
                    }
            })

            
            EconomyRate = RunsConceded/OversBowled;
		    BowlingstrikeRate = (OversBowled * 5) /WicketsTaken;
            Bowling_Average= RunsConceded/WicketsTaken;
        
            returnThis.push({
                'Wickets':WicketsTaken, 
                'Year':TheseYears[i].Year,
                'EconomyRate':EconomyRate.toFixed(2),
                'BowlingstrikeRate':BowlingstrikeRate.toFixed(2),
                'Bowling_Average':Bowling_Average.toFixed(2),
            })
            i++
       } 
       console.log(returnThis,LineAve,LineEco);
        return [returnThis,LineAve,LineEco,LineSR];
    }


    componentWillMount(){ 
            AES = this.CreateAES( this.props.Player,this.props.UI.filter.years)
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
    
            return ( 
            <div>
                <div class="darkWrapper">
                        <Section_Header header=" Average, Economy and Strike rate." />
                        <Triple_Line {...this.props} />
                </div>
                <div class="darkWrapper">
                        <Section_Header header="Averages over the years" />
                        
                        <Pie_Metric_over_the_years data={AES[0]} filter="Bowling_Average"/>

                        <Double_Line_Chart  
                            data={AES[1]} 
                            dataKey1="Average" 
                            dataKey2="Career" 
                        />

                        <List_Best_AEC 
                            Tag="Runs per Wicket"
                            header="Best Averages (2 Game Min)"
                            filter="Bowling_Average"
                            {...this.props}
                        />

                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Economy" />
                        <Pie_Metric_over_the_years data={AES[0]} filter="EconomyRate" />
                        
                        <Double_Line_Chart 
                            data={AES[2]} 
                            dataKey1="Economy" 
                            dataKey2="Career" 
                        />

                        <List_Best_AEC 
                            Tag="Runs per Over"
                            header="Best Economy (2 Game Min)"
                            filter="EconomyRate"
                            {...this.props}
                        />
                </div>
                <div class="darkWrapper">
                    <Section_Header header=" Strike rate" />
                        
                        <Pie_Metric_over_the_years data={AES[0]} filter="BowlingstrikeRate"/>
                        
                        <Double_Line_Chart 
                            data={AES[3]} 
                            dataKey1="Strikerate" 
                            dataKey2="Career" 
                        />

                        <List_Best_AEC 
                            Tag="Balls per Wicket"
                            header="Best Strikerate (2 Game Min)"
                            filter="BowlingstrikeRate"
                            {...this.props}
                        />
                </div>
            </div>
             ); 
      }
  }