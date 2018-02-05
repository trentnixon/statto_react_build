import React from "react";
import { Link } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Logo from "../../login/components/_Logo";
import Go_Back from "../../global/go_back";

const iconStyles = { 
    float:'left',
    color:'#e9e9e9',
};
  const LabelStyles = {
   position:'fixed',
   bottom:0,
   backgroundColor:'#5b7691'
  };

   let hoverColor='#e9e9e9', filter=false;
const settingsIcon = <FontIcon className="material-icons" hoverColor={hoverColor} style={iconStyles}>settings</FontIcon>;
const Personpin = <FontIcon className="material-icons" hoverColor={hoverColor} style={iconStyles}>person_pin</FontIcon>;


export default class Top_Nav_Bar extends React.Component {

    constructor() { super();  }
    
    setFilter(raw,filterData){
        if(filterData!=raw){
            filter =<div className="filteractive" dangerouslySetInnerHTML={{__html: '<i class="material-icons tone3">lightbulb_outline</i> Filter Active'}}></div> ;
        }
        else if(filterData==raw)
        {
            filter =false;
        }
        return filter;
    }

    componentWillMount(){ 
            console.log(this.props)
            filter = this.setFilter(this.props.Player.raw_json.length, this.props.Player.filtered_json.length);
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player)
           filter =  this.setFilter(nextProps.Player.raw_json.length, nextProps.Player.filtered_json.length); 
       }
    
    render() {
       
            return ( 
                <div id="header">
                    <div class="row">
                        <div class="col-xs-10">  
                        <Go_Back {... this.props}/>
                        <MuiThemeProvider>{Personpin}</MuiThemeProvider>
                            <h2>{this.props.Player.PLAYER_META.UserName} <small>{this.props.Player.PLAYER_META.GAME_COUNT} games</small></h2>
                        </div>
                        <div class="col-xs-2">
                            <Link to={'/'+this.props.match.params.playerid+"/settings"}>
                                <MuiThemeProvider>{settingsIcon}</MuiThemeProvider>
                            </Link>
                        </div>
                        <div class="col-xs-6 text-left">
                            {filter}
                        </div>
                        <div class="col-xs-6 text-right">
                        <h3>{this.props.UI.breadcrumbs.parent}</h3>
                        </div>
                    </div>
		        </div>
             ); 
      }
  }