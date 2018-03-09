import React from "react";

import Content_Pod from "../../global/content_pod";

let CareerRunsAveOverTenGames=0, CareerWicketsAveOverTenGames=0,PodData=[];
export default class Display_Dashboard extends React.Component {

    constructor() { super();  }


    componentWillMount(){ 

            CareerRunsAveOverTenGames = this.props.Player.career_form.Bowling_RunsConceded / this.props.Player.career_form.Bowling_Innings_Count
            CareerRunsAveOverTenGames = CareerRunsAveOverTenGames*this.props.Player.form_guide.Bowling_Innings_Count;
        
            CareerWicketsAveOverTenGames = this.props.Player.career_form.Bowling_Wickets / this.props.Player.career_form.Bowling_Innings_Count
            CareerWicketsAveOverTenGames = CareerWicketsAveOverTenGames*this.props.Player.form_guide.Bowling_Innings_Count;  
        }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div>
                    <div class="row">
                   <Content_Pod 
                        title="Wickets"
                        value={this.props.Player.form_guide.Bowling_Wickets} 
                        sub={'Career Average : '+CareerWicketsAveOverTenGames.toFixed(2)+ ' wickets'}
                        width="col-xs-12"
                    />

                    <Content_Pod 
                        title="Runs Conceded"
                        value={this.props.Player.form_guide.Bowling_RunsConceded} 
                        sub={'Career Average : '+ CareerRunsAveOverTenGames.toFixed(2) + ' runs'}
                        width="col-xs-6"
                    />

                    <Content_Pod 
                        title="Economy"
                        value={this.props.Player.form_guide.Bowling_Economy_Rate} 
                        sub={'Career Economy : '+this.props.Player.career_form.Bowling_Economy_Rate}
                        width="col-xs-6"
                    />

                    <Content_Pod 
                        title="Average"
                        value={this.props.Player.form_guide.Bowling_Average} 
                        sub={'Career Average : '+this.props.Player.career_form.Bowling_Average}

                        width="col-xs-6"
                    />

                    <Content_Pod 
                        title="Strike Rate"
                        value={this.props.Player.form_guide.Bowling_Strike_Rate}
                        sub={'Career Strike Rate : '+this.props.Player.career_form.Bowling_Strike_Rate}

                        width="col-xs-6"
                    />
                </div>
            </div>
        ); 
      }
  }