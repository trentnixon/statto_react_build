/**
 * Example
 * <SingleBar 
 *  data={data} 
 *  Theme="Light"
 *  datakey="Runs"
 * />
 */
import React from "react";
import { connect } from "react-redux";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

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

export default class One_Column_Bar_Chart_With_Filter extends React.Component {
    

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

        items.push(<MenuItem value={0} key={1000} primaryText="All" />);
        
         this.props.Years.map((year,i)=>{
                items.push(<MenuItem value={year} key={i} primaryText={year} />);
        })

        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];

     }
    render () {


  	return (
          <div>
               <div class="filter-Container" style={styles.filter}> 
                    {
                        <MuiThemeProvider>
                            <SelectField
                                value={this.state.value}
                                onChange={this.handleChange}
                                maxHeight={200}
                                floatingLabelText="Filter Runs by Year"
                                floatingLabelStyle={Theme.label}
                                labelStyle={Theme.label}
                                fullWidth={true}
                            >
                            
                                    {items}
                            
                            </SelectField>
                        </MuiThemeProvider>
                    }
            </div>

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

        <p class="tone1" style={styles.p}> {this.props.countType} {data.length} </p>
        </div>
    );
  }
}

