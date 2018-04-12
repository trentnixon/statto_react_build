import React from "react";
import FontAwesome from 'react-fontawesome';

var _ = require('lodash');
let TeamResults,ColClass;
export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    componentWillMount(){ TeamResults =  _.orderBy(this.props.Teams, ['Games'],['desc']); }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <div>
                     {
                         TeamResults.map((team,i)=>{
                             if(i<3){
                                 if(i== 0){ColClass = 'col-xs-12 MyTopTeam'} else{ ColClass='col-xs-6 MySupportTeam'}
                                return(
                                        <div key={'team'+i} class={"Top_Teams nopadding  " + ColClass}>
                                            <FontAwesome 
                                                name='users'
                                                className='Emoticon'
                                            />
                                            <h2>{team.Team}</h2>
                                            <h3>{team.Games.length} Games</h3>
                                        </div>
                                )
                            }
                         })
                     }
                </div>
             ); 
      }
  }