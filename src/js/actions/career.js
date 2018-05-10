import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');

// This function is used to create a object array for a single point pie chart
// it should take in a filter param and what value to add
// it will add values together, not count the number of interations
// example : piechartYears(this.props.Player.filtered_json, 'Year', 'Batting_Runscored');

function foo(arr) {
    var a = [], b = [], prev;
    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    return [a, b];
}


export function piechartYears(data, filter, add){
    
    let returnThis=[], StartHere=data[0][filter], AddThis=0;

    data.map((game,i)=>{

        if(StartHere != game[filter])
            {
              returnThis.push({ name: StartHere.toString(), value:AddThis  })
                AddThis=0;
                StartHere=game[filter];
            }

            if(isNaN(parseInt(game[add])) == false)
                {  AddThis = parseInt(AddThis) + parseInt(game[add]); }

            if(i == (data.length-1)) 
                { returnThis.push({ name: StartHere.toString(), value:AddThis  })}
	
    })
    return returnThis;
}

export function CollectYears(data){
    
    let returnThis=[],  StartHere=data[0]['Year'];

    returnThis.push(StartHere=data[0]['Year']);
    
    data.map((game,i)=>{
        
        if(game.Year !=StartHere)
            {
                returnThis.push(game.Year);
                StartHere =game.Year;
            }
    })

    //console.log(returnThis.reverse());
    return returnThis;
}

/*
export  function collect_Team_Names(data, filter){
    let teamArray=[], TeamLists;

    data.map((games,i)=>{   
        teamArray.push(games[filter]);
    })

    
    return foo(teamArray);
}
*/