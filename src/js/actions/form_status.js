import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');
import { Fetch_Player_Data } from "./login";


export function form_status(){
   
    this.Career;
    this.PlayerID;
    this.Current;
    this.Metric;
    this.CarrerBy;
    this.CurrentBy;
    this.FormStatusPercentagePoints;
    this.perc_data=[];
    this.Store_Analysis=[];

    this.echo =(msg)=>{
       //  console.log(msg)
    }

    
    this.stripStr= (string, strip)=>{
        string = string.replace( /_/g,' ');
        string = string.replace( 'Batting',' ');
        string = string.replace( 'Bowling',' ');
        string = string.replace( 'Keeping',' ');
        return string;
    }

    this.difference = (item, value)=>{
        let Carrer = this.Career[item]
        if(value == 1){
            Carrer = Carrer/this.CarrerBy;
            Carrer  = Carrer*this.CurrentBy;
        }
    
        let Store = (this.Current[item]/Carrer.toFixed(0))*100;        
     
        // tidy this up
        if(isNaN(Store)){Store=0;}
        if(this.Current[item] == null){this.Current[item] = 0;}
        //
        
        this.perc_data.push(
                {
                    Item:item,
                    Title:this.stripStr(item),
                    Percent:Store.toFixed(0)+'%',
                    value:parseFloat(Store.toFixed(0)),
                    Current:parseFloat(this.Current[item].toFixed(2)),
                    Career:parseFloat(Carrer.toFixed(2))
                }
        )
    }
    

    this.analysis = ()=>{

        let FormMsg, FormPerc = this.FormStatusPercentagePoints;

        if(FormPerc > 130){  FormMsg= "Exceptional Form"}
        if(FormPerc > 129){  FormMsg= "the Form of there life. Current performing over expectation"}
        if(FormPerc > 110 && FormPerc < 129 ){ FormMsg= "Great Form. First Pick Next Week";}
        if(FormPerc > 100 && FormPerc < 109 ){ FormMsg= "Average Form.";}
        if(FormPerc < 100 && FormPerc >= 95){ FormMsg= "Good knick";}
        if(FormPerc < 95 && FormPerc >= 90){  FormMsg= "Solid Form"; }
        if(FormPerc < 90 && FormPerc >= 85){  FormMsg= "Good Form"; }
        if(FormPerc < 85 && FormPerc >= 75){  FormMsg= "Average Form"; }
        if(FormPerc < 75 && FormPerc >= 60){  FormMsg= "a Rough Patch"; }
        if(FormPerc < 60 ){  FormMsg= "Poor Form"; }

        // Push into Array
        this.Store_Analysis.push({analysis:FormMsg})
        this.Store_Analysis.push({playerID: this.PlayerID})
        // Store Analysis in Reducer
        this.UI("Form_Analysis", this.Store_Analysis)
    }

    this.formStatus = ()=>{
        let Total=0;
        this.perc_data.map((item,i)=>{
            Total = Total+item.value;
        })      

        this.FormStatusPercentagePoints = (Total/this.perc_data.length).toFixed(0);
        this.Store_Analysis.push({point:this.FormStatusPercentagePoints})

        this.analysis();
    }

    this.calculate = ()=>{
        this.echo(this.Career);
        this.echo(this.Current);

        this.Metric.map((item,i)=>{    
            this.difference(item.name, item.value);
        })

        // Store Breakdown in Reducer
        this.UI("Form_Breakdown", this.perc_data);
        // Find Analysis results
        this.formStatus();
    }

    // Store in Reducer
    this.UI = function(TYPE, state){
        store.dispatch({ type:TYPE, payload:state });
    }
}