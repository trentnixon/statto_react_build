import React from "react";

import Content_Pod from "../../global/Expandable_Panel/content_pod";

export default class Display_Dashboard extends React.Component {

    constructor() { super();  }
    componentWillMount(){}
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                    <div class="row margin20">
                    <Content_Pod 
                            title="Games Played"
                            value={this.props.Player.PLAYER_META.GAME_COUNT} 
                            sub="up from 20000"
                            content="This is some content for the dropdown" 
                            width="col-xs-12 "
                        />

                    <Content_Pod 
                        title={"Runs Scored"}
                        value={this.props.Player.career_form.Batting_Total_Runs}
                        sub="up from" 
                        width="col-xs-12"
                        content=""
                        Link="/rus" 
                    />

                    <Content_Pod 
                        title="Batting Average"
                        value={this.props.Player.career_form.Batting_Average} 
                        sub="up from" 
                        width="col-xs-12"
                    />

                    <Content_Pod 
                        title="Wickets"
                        value={this.props.Player.career_form.Bowling_Wickets}
                        sub="up from" 
                        width="col-xs-12"
                    />
                </div>
                    
                </div>
             ); 
      }
  }