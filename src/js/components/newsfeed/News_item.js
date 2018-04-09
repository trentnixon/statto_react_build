import React from "react";

import Naked_Wrapper from  "../global/Naked_wrapper";
import News_Player_Name from "./News_Find_Player_Header";
import Identifier from "./News_Identifier";
import Milestone from "./News_Milestone";
import Form from "./News_Form";
import Game from "./News_Game";

export default class NewsFeed extends React.Component {

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
    componentWillMount(){  


       
    }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
        let  lastUpdate = this.timeDifference( new Date().getTime()/1000, parseInt(this.props.Updated) ) 
      
            return ( 
                <Naked_Wrapper>
                <li class="row">
                    <div class="col-xs-12 nopadding">
                        <News_Player_Name 
                            ID={this.props.Player_ID}
                            Date={lastUpdate}
                            {... this.props}
                        />
                    </div>
                    

                    <ul class="news_item">
                    { 
                        this.props.Feed.map((item,i)=>{

                            // Create Display for Milestones
                            if(item.type == 'Milestone')
                                {
                                    return(
                                        <Milestone 
                                            item={item}
                                            key={i}
                                        />
                                    )
                                }
                            else if(item.type == 'Form' ){
                                    return(
                                        <Form 
                                            item={item}
                                            key={i}
                                        />
                                    )
                            }
                            // Create Display for Games 
                            else if(item.type == 'Game' ){
                                return(
                                        <Game
                                            item={item}
                                            key={i}
                                        />
                                )
                            }  
                        })
                    }
                    </ul>
                </li>
             </Naked_Wrapper>
             ); 
      }
  }