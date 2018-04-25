import React from "react";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Section_Header from "../../global/Section_Header";
import Section_Sub_Header from "../../global/Section_Subheader";
import Link_to_scorecard from "../../scorecards/components/Link_to_Scorecard_Button";

let Last5Games;
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    timeDifference(date1,date2) {
    

        let difference = date1.toFixed(0) - date2.toFixed(0);
        difference = difference.toFixed(0);
        
        let daysDifference = Math.floor(difference/60/60/24);
        difference -= daysDifference*60*60*24

        let hoursDifference = Math.floor(difference/60/60);
        difference -= hoursDifference*60*60

        let minutesDifference = Math.floor(difference/60);
        difference -= minutesDifference*60

        let secondsDifference = Math.floor(difference);

        if(daysDifference > 0){ 
            
            return daysDifference + ' Days Ago'; 
        } 
        
        else if(hoursDifference > 0) { return hoursDifference  + ' Hours Ago';}
        
        else{return minutesDifference  + ' Minutes Ago'; }

    }

    CreateCarousel(){
        let lastUpdate;
                       
        Last5Games = this.props.Player.last_ten_games.map((game,i)=>{
            //   console.log(game) 
               if(i < 5){ 
                lastUpdate = this.timeDifference( new Date().getTime()/1000, parseInt(game.timestamp) ) 
        
               return(<div key={i}>
                        <Section_Header header={game.Opposition} />
                            <Section_Sub_Header header={'Played '+ lastUpdate} />
                        <div class="col-xs-5 nopadding">
                            <h3>Runs : {game.Batting_Runscored}</h3>
                            <h4>{game.Batting_BallsFaced} Balls </h4>
                        </div>
                        <div class="col-xs-7 nopadding">
                            <h3>Figures : {game.Bowling_Figures}</h3>
                            <h4>{game.Bowling_OversBowled} Overs </h4>
                        </div>
                        <div class="col-xs-12 nopadding ">
                            <Link_to_scorecard ID={game.GameID}/>       
                        </div>
                    </div>
                  )
               } 
           })
    }


    componentWillMount(){ 

            this.CreateCarousel(this.props.Player.last_ten_games);
            /*
            let lastUpdate;
                       
            Last5Games = this.props.Player.last_ten_games.map((game,i)=>{
                //   console.log(game) 
                   if(i < 5){ 
                    lastUpdate = this.timeDifference( new Date().getTime()/1000, parseInt(game.timestamp) ) 
            
                   return(<div key={i}>
                            <Section_Header header={game.Opposition} />
                                <Section_Sub_Header header={'Played '+ lastUpdate} />
                            <div class="col-xs-5 nopadding">
                                <h3>Runs : {game.Batting_Runscored}</h3>
                                <h4>{game.Batting_BallsFaced} Balls </h4>
                            </div>
                            <div class="col-xs-7 nopadding">
                                <h3>Figures : {game.Bowling_Figures}</h3>
                                <h4>{game.Bowling_OversBowled} Overs </h4>
                            </div>
                            <div class="col-xs-12 nopadding ">
                                <Link_to_scorecard ID={game.GameID}/>       
                            </div>
                        </div>
                      )
                   } 
               })*/
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
        this.CreateCarousel(nextProps.Player.last_ten_games);
    }
    
    render() {
            return ( 
                <div class="row LastGameFigures">
                   <Carousel 
                        showThumbs={false} 
                        autoPlay={true} 
                        interval={9000}
                        transitionTime={800}
                        showIndicators={false}
                        showStatus={false}
                        infiniteLoop={true}
                    >
                        {Last5Games}
                    </Carousel>
                </div>
             ); 
      }
  }