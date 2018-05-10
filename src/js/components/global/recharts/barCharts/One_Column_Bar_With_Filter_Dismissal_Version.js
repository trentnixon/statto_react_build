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
var _ = require('lodash');

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
    

    state = { value: "Not out", first:false };
    
    BarData(){
        data=[];
        if(this.props.data.length != 0){
            let DismissalKey = _.findKey(this.props.data, { 'term': this.state.value});

            this.props.Structure.map((item,i)=>{
                data.push({
                    name:item,
                    Runs:this.props.data[DismissalKey]['runArray'][i],
                    Balls:this.props.data[DismissalKey]['ballsArray'][i],
                })
            })
            this.setState({first:true});
        }
    }


    handleChange = (event, index, value) => {
        this.setState({value:value},() => this.BarData());
    };

    CreateItems(data){
        items = [];
        this.props.type.map((type,i)=>{
               items.push(<MenuItem value={type} key={i} primaryText={type} />);
        })
      }

    componentWillMount(){ 

        // Create Theme
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];

        // Find Date
        this.BarData()

        // Create Filter
        this.CreateItems(this.props.type)

     }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
      if(this.state.first == false){
        
            this.BarData()
            this.CreateItems(nextProps.type)
      }
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
                                floatingLabelText="Filter by Dismissal"
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
            <XAxis dataKey="name" stroke={Theme.axis}/>
            <YAxis  stroke={Theme.axis} label="#" />
                
                <Tooltip 
                    offset={20} 
                    wrapperStyle={Theme.Tooltip.wrapper}
                    labelStyle={Theme.Tooltip.label}
                    itemStyle={Theme.Tooltip.Style}
                />
                <Bar dataKey="Runs"  fill={Theme.colors[0]} />
                <Bar dataKey="Balls"  fill={Theme.colors[1]} />
                <Legend verticalAlign="top" wrapperStyle={Theme.Legend} iconType="circle" align="right"/>

            </BarChart>
        </ResponsiveContainer>
    </div>
    );
  }
}

