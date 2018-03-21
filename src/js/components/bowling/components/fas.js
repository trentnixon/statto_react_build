import React from "react";
import Section_Header from "../../global/Section_Header";
import Content_Pod from "../../global/Expandable_Panel/Create_Content_Pods";

let two=0,three=0,four=0,five=0,six=0,seven=0;
let Content=[],Link_Prefix;
export default class Bowling_fas extends React.Component {

    constructor() { super();  }
    
    findNum(data,num){
        let Value=0, Club;

        data.map((game,i)=>{
            if(game.wickets == num)
                {
                    Value++;
                }
        })
        return Value; 
    }

    componentWillMount(){ 
        Content=[];
        Content.push(
            {  
                title:"2 For", 
                value:this.findNum(this.props.Player.raw_json, 2),
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_2',
                list:this.props.Player.over_the_years[6]['for_2'],
                type:'bowling'
                
            },{  
                title:"3 For", 
                value:this.findNum(this.props.Player.raw_json, 3),
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_3',
                list:this.props.Player.over_the_years[6]['for_3'],
                type:'bowling'
                
            },{  
                title:"4 For", 
                value:this.findNum(this.props.Player.raw_json, 4),
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_4',
                list:this.props.Player.over_the_years[6]['for_4'],
                type:'bowling'
                
            },{  
                title:"5 For", 
                value:this.findNum(this.props.Player.raw_json, 5),
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_5',
                list:this.props.Player.over_the_years[6]['for_5'],
                type:'bowling'
                
            },{  
                title:"6 For", 
                value:this.findNum(this.props.Player.raw_json, 6),
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_6',
                list:this.props.Player.over_the_years[6]['for_6'],
                type:'bowling'
                
            },{  
                title:"7 For", 
                value:this.findNum(this.props.Player.raw_json, 7),
                sub:"", 
                width:"col-xs-12",
                data:this.props.Player.over_the_years[0],
                filter:'Bowling_7',
                list:this.props.Player.over_the_years[6]['for_7'],
                type:'bowling'
                
            },
        )           
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return (<Content_Pod data={Content}  />); 
      }
  }