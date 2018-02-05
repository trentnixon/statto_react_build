import React from "react";
let ScoreA, WicketA,OversA, ScoreB, WicketB, OversB;
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
          console.log(this.props)
         if(this.props.SelectedGame.TeamA_ID == this.props.SelectedGame.Batted_First_ID)
            {
                ScoreA = this.props.SelectedGame.First_Score;
                WicketA = this.props.SelectedGame.First_Wickets;
                OversA = this.props.SelectedGame.First_Overs;

                ScoreB = this.props.SelectedGame.Second_Score;
                WicketB = this.props.SelectedGame.Second_Wickets;
                OversB = this.props.SelectedGame.Second_Overs;
        }
        else{
                ScoreA = this.props.SelectedGame.Second_Score;
                WicketA = this.props.SelectedGame.Second_Wickets;
                OversA = this.props.SelectedGame.Second_Overs;

                ScoreB = this.props.SelectedGame.First_Score;
                WicketB = this.props.SelectedGame.First_Wickets;
                OversB = this.props.SelectedGame.First_Overs;
        }
    
    
    }
 
    render() {
            return ( 
                <div id="scorecard_Score_Summary">
                    <div class=" col-xs-6 scoreA">
                        <h1>{this.props.SelectedGame.TeamA}</h1>
                        <h2>{WicketA} - {ScoreA}</h2>
                        <h3>{OversA} overs</h3>
                    </div>

                    <div class=" col-xs-6 scoreB">
                        <h1>{this.props.SelectedGame.TeamB}</h1>
                        <h2>{WicketB} - {ScoreB}</h2>
                        <h3>{OversB} overs</h3>
                    </div>
                </div>
             ); 
      }
  }