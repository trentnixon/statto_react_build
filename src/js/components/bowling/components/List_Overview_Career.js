import React from "react";
//import Content_Pod from "../../_Pages/Career/Career_Content_Pods";
import Content_Pod from "../../global/Expandable_Panel/Create_Content_Pods";

let Content=[],Link_Prefix;
export default class List_Overview_career extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ 
            console.log( this.props)
            Content=[];
            Link_Prefix = '/'+this.props.Player.PLAYER_META.WP_ID+'/bowling/'
        Content.push(
            {  
                title:"Overs Bowled", 
                value:this.props.Player.career_form.Bowling_oversBowled,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_OversBowled',
                
            },
            {  
                title:"Wickets Taken", 
                value:this.props.Player.career_form.Bowling_Wickets,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Wickets',
                Link:Link_Prefix+'wickets'
            },
            {  
                title:"Runs Conceded", 
                value:this.props.Player.career_form.Bowling_RunsConceded,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_RunsConceded',
            },{  
                title:"Economy", 
                value:this.props.Player.career_form.Bowling_Economy_Rate,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'EconomyRate',
                Link:Link_Prefix+'aes'
            },{  
                title:"Average", 
                value:this.props.Player.career_form.Bowling_Average,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_Average',
                Link:Link_Prefix+'aes'
            },
            {  
                title:"Strike Rate", 
                value:this.props.Player.career_form.Bowling_Strike_Rate,
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'BowlingstrikeRate',
                Link:Link_Prefix+'aes'
            }
            
        )
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <Content_Pod data={Content} />
             ); 
      }
  }