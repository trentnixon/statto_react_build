/**
 * Example
 * <SingleBar 
 *  data={data} 
 *  Theme="Light"
 *  datakey="Runs"
 * />
 */
/**
 * Example
 * <Single_Bar 
        data={data} 
        Theme="Dark"
        datakey="Runs"
    />
    data.push({name:game.Opposition, Runs:parseInt(game.Batting_Runscored), Year:game.Year})
 */

import React from "react";
import { connect } from "react-redux";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles ={
    filter:{
        marginLeft:'20px',
        marginRight:'10px',
    },
    p:{
        textAlign: 'right',
        padding: '0',
        margin: '0 0 10px 0'
    } 
}

let data=[],items = [], SelectTheme='Dark', Theme;

@connect((store) =>{
    return{
        UI: store.UI,
    }
})

export default class One_Column_Bar_Chart extends React.Component {
    

    state = { value: 0, };
    
      handleChange = (event, index, value) => {
        this.setState({value});
        data=[];
        if(value != 0){
            this.props.data.map((game,i)=>{
                if(game.Year == value)
                    {
                        //console.log(game)
                        data.push(game)
                    }
            })
        }
        else{
            data = this.props.data;
        }
      };

    componentWillMount(){ 
        data=[],items = [];
        data = this.props.data;

        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];

     }
    render () {


  	return (
          <div>
            <ResponsiveContainer width='100%' height={200}> 
                <BarChart  
                        data={data}
                        margin={{top: 20, right: 0, left: -30, bottom: 5}}
                        barGap={0}
                        barCategoryGap={0}
                >
                <XAxis dataKey="name"  stroke={Theme.axis}/>
                <YAxis  stroke={Theme.axis}/>
                    
                    <Tooltip 
                        offset={20} 
                        wrapperStyle={Theme.Tooltip.wrapper}
                        labelStyle={Theme.Tooltip.label}
                        itemStyle={Theme.Tooltip.Style}
                    />
                    <Bar dataKey={this.props.datakey} fill={Theme.colors[0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
  }
}

