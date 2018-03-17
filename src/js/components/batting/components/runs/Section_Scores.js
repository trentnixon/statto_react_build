import React from "react";
import Section_Header from "../../../global/Section_Header";
import SelectField from 'material-ui/SelectField';
import  LinktoScorecard from "../../../scorecards/components/Link_to_Scorecard";
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var _ = require('lodash');

const styles ={
    wrapper:{
        backgroundColor:'rgba(44, 44, 44, .5)',
        borderColor:'transparent',
        borderRadius:'5px',
    },
    label:{
        color:'#383838',
    },
    item:{ },
    filter:{
        marginLeft:'0px',
        marginRight:'0px',
    },
    p:{
        textAlign: 'right',
        padding: '0',
        margin: '0 0 10px 0'
    }
}

// Get Components
let NotableScores=[],HighScores;
export default class batting_runs extends React.Component {
    state = { value: 0, };
    constructor() { super(); }

    removeZero(data ,min=0,max=1000){
        let NewData=[]
        data.map((game,i)=>{
            if(game.Runs_Bare != 0 
                &&  game.Runs_Bare > min
                &&  game.Runs_Bare < max
            ){
                NewData.push(game)
            }
        })
        return NewData;
    }

    createList(data,filter,order,MinrunLimt,MaxrunLimit){
        NotableScores = data.slice();
        NotableScores = this.removeZero(NotableScores,MinrunLimt,MaxrunLimit);
        NotableScores = _.sortBy(NotableScores, filter);
        
        console.log(NotableScores);

       // NotableScores.map((game,i)=>{ console.log(game.notout)})

        if(order == true){ NotableScores.reverse();}
        NotableScores = NotableScores.slice(0,10);
    }


    handleChange = (event, index, value) => {
       // console.log(value, this.props.Player.raw_json);
        this.setState({value});
        let SetData=[];
        if(value == 0){ this.createList(this.props.Player.raw_json, 'Runs_Bare',true,0,1000);}
        if(value == 1){ this.createList(this.props.Player.raw_json, 'Runs_Bare',false,0,1000);}
        if(value == 2){ this.createList(this.props.Player.raw_json, 'Batting_BallsFaced_Int',true,0,1000);}
        if(value == 3){ this.createList(this.props.Player.raw_json, 'Batting_BallsFaced_Int',false,20,1000);}
        if(value == 4){ this.createList(this.props.Player.raw_json, 'Batting_BallsFaced_Int',true,0,20);}
        if(value == 5){ 
                //SetData = _.sortBy(this.props.Player.raw_json, 'notout');
                this.props.Player.raw_json.map((game,i)=>{
                    if(game.notout == 'true'){ SetData.push(game) }
                })
                this.createList(SetData.reverse(),'Runs_Bare',true,0,1000);
            }

      }


    componentWillMount(){  this.createList(this.props.Player.raw_json, 'Runs_Bare',true,0,1000); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <div class="darkWrapper">
                       <Section_Header header="Notable Scores"/>
                    <div class="filter-Container" style={styles.filter}> 
                            {
                                <MuiThemeProvider>
                                    <SelectField
                                        value={this.state.value}
                                        onChange={this.handleChange}
                                        maxHeight={200}
                                        floatingLabelText="Filter Results"
                                        floatingLabelStyle={styles.label}
                                        labelStyle={styles.label}
                                        fullWidth={true}
                                    >
                                    
                                        <MenuItem value="0"  primaryText="Top 10  - Highest Scores" />
                                        <MenuItem value="1"  primaryText="Top 10  - Lowest Scores" />
                                        <MenuItem value="2"  primaryText="Most Balls Faced" />
                                        <MenuItem value="3"  primaryText="Fewest Balls over 20 Runs" />
                                        <MenuItem value="4"  primaryText="Most Balls under 20 runs" />
                                        <MenuItem value="5"  primaryText="Top Scores &amp; Not Out" />
                                    
                                    </SelectField>
                                </MuiThemeProvider>
                            }
                    </div>
                        <ul class="list">
                            {
                                NotableScores.map((game,i)=>{
                                    return(
                                        <li key={i} class="row nomargin">
                                           
                                                <div class="col-xs-12 nopadding nomargin text-center tone2">{game.Batting_Runscored}  off {game.Batting_BallsFaced} balls <span class="pull-right"><LinktoScorecard ID={game.GameID}/></span> </div>
                                                
                                                <div class="col-xs-5 text-left  nopadding tone1">{game.Team} </div>
                                                <div class="col-xs-2 text-center"> vs </div>
                                                <div class="col-xs-5 text-right nopadding tone3"> {game.Opposition} </div> 
                                        </li>
                                    )
                                })
                            }
                        </ul>
                </div>
             ); 
      }
  }