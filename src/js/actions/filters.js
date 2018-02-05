// Create Filter Actions
import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');




function stripYear(json, filter, Filtered){
    json.map((game, i)=>{   
        filter.years.map((year,i)=>{
            if(year.Value == true && game.Year == year.Year ){
               Filtered.push(game)
            }
        })
    })
    return Filtered; 
}


function stripTeam(filter, Filtered)
    {
        let New_Filter=[];
    console.log('filter.selectedTeam', filter.selectedTeam)
    if(filter.selectedTeam != false)
    {
        
        Filtered.map((game,i)=>{

            // FIND A WAY TO REMOVE ITEMS FROM THE YEARS ARRAY
            if(game.Team == filter.teams[filter.selectedTeam])
                {
                    console.log(game.Team, filter.teams[filter.selectedTeam])
                    New_Filter.push(game);
                }
            })
            console.log(New_Filter)
            return New_Filter;
    }
    else{
        return Filtered;
    }
}


function stripOpposition(filter, Filtered)
    {
        let New_Filter=[];
    console.log('filter.selectedOpposition', filter.selectedOpposition)
    if(filter.selectedOpposition != false)
    {
        
        Filtered.map((game,i)=>{

            // FIND A WAY TO REMOVE ITEMS FROM THE YEARS ARRAY
            if(game.Opposition == filter.opposition[filter.selectedOpposition])
                {
                    console.log(game.Opposition, filter.opposition[filter.selectedOpposition])
                    New_Filter.push(game);
                }
            })
            console.log(New_Filter)
            return New_Filter;
    }
    else{
        return Filtered;
    }
}

/** FILITER JSON  */
export function filter_json(json, filter){
    
   // console.log(filter);

    let Filtered=[];
    
    // Strip the year filtered
    Filtered = stripYear(json, filter, Filtered)
    Filtered =  stripTeam(filter, Filtered)
    Filtered =  stripOpposition(filter, Filtered)
    
    //console.log(Filtered);    
    store.dispatch({ type:"FILTERED_DATA", payload:Filtered });
    force_filter_update(false)
    

}


// select filter option
/* This section is used to define thefilter based on which option the user has selected */

// Select Years
export function Amend_Filter(filter,array,value,booleen,filtered_Json){

    array.map((filter,i)=>{
        if(filter.Year == value) {  array[i]['Value']=booleen }
    })

    switch (filter) {
        case 'Year':
            store.dispatch({ type:"STORE_FILTER_YEARS", payload:array });
            break;
    }

    force_filter_update(true)
   
}

// Select Team
export function Amend_Team(value, type)
{
    store.dispatch({ type:"PROCESS_FILTER", payload:true });
    store.dispatch({ type:type, payload:value });
    store.dispatch({ type:"PROCESS_FILTER", payload:false });
}


// Force Filter Update
export function force_filter_update(value)
    {
        store.dispatch({ type:"PROCESS_FILTER", payload:value });
    }





// Create Filter Option 
/* This section is used to create the arrays used by Statto to display filter options */
// Years
export function Create_Year_Filter_Array(json){
    
    let LogYears=[], StoreYears=[];
   
    json.map((game,i)=>{
        if(LogYears.indexOf(game.Year) == '-1')
            {
                LogYears.push(game.Year)
                StoreYears.push({Year:game.Year, Value:true})
            }
    })
   
    store.dispatch({ type:"STORE_FILTER_YEARS", payload:StoreYears });
}

// Team
export function Create_Team_Filter_Array(json){
    let Teams=[];
    Teams.push('All')
   
    json.map((game,i)=>{
        if(Teams.indexOf(game.Team) == '-1' && game.Team != 'undefined' && game.Team != null )
        { Teams.push(game.Team) }
    })
    Teams.sort();
   store.dispatch({ type:"STORE_FILTER_TEAMS", payload:Teams });
  
}
// Opposition

export function Create_Opposition_Filter_Array(json){
    let Teams=[];
    Teams.push('All')
    
    json.map((game,i)=>{
        if(Teams.indexOf(game.Opposition) == '-1' && game.Opposition != 'undefined' && game.Opposition != null )
        { Teams.push(game.Opposition) }
    })
    
    Teams.sort();
   store.dispatch({ type:"STORE_FILTER_OPPOSITION", payload:Teams });
  
}