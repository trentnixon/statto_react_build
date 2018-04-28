import React from "react";
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let count=[], missing, completed=0;



export default class Games_Stored_vs_Games_Played extends React.Component {

    constructor() { super(); }

    count(stored,games){
        let NewPercentage;
        count['games']=games;
        count['stored']=stored;
        count['Missing'] = games-stored; 

        NewPercentage = (count['stored']/count['games'])*100;
        count['percentage'] = parseInt(NewPercentage.toFixed(2)); 
        
    }
   
    componentWillMount(){
        

        this.count(this.props.GAMES.Game_Data.length,this.props.Player.raw_json.length);
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ 
        this.count(nextProps.GAMES.Game_Data.length,nextProps.Player.raw_json.length);
    }
    
    render() {
     
    if(
        isNaN(count['percentage']) || 
        count['Missing'] == 0
    ){
        return ( 
            <div>
                
            </div>
         );
    }
    else{
        return ( 
            <div class="row LastGameFigures">
                <div class="white text-center" >
                    <MuiThemeProvider>
                        <LinearProgress color="#73b393" mode="determinate" value={count['percentage']} />
                    </MuiThemeProvider>
                    Downloading Remaining {count['Missing']} Games
                </div>
            </div>
         );
        }
    }
  }