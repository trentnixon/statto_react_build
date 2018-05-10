import React from "react";
import { connect } from "react-redux";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';


let data=[], SelectTheme='Dark', Theme;
@connect((store) =>{
    return{
        UI: store.UI,
    }
})
export default class Two_Column_Bar_Chart extends React.Component {
    componentWillMount(){ 
        data=[];
        data = this.props.data;
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
     }
    render () {
  	return (
        <ResponsiveContainer width='100%' height={200}>
            <BarChart  
                    data={this.props.data}
                    margin={{top: 20, right: 0, left: -30, bottom: 5}}
                    barGap={2}
                    barCategoryGap={5}
            >
            <XAxis dataKey="name" stroke={Theme.axis}/>
            <YAxis stroke={Theme.axis}/>
                
                <Tooltip 
                    offset={20} 
                    wrapperStyle={Theme.Tooltip.wrapper}
                    labelStyle={Theme.Tooltip.label}
                    itemStyle={Theme.Tooltip.Style}
                />
                <Bar dataKey={this.props.datakey1} fill={Theme.colors[0]} />
                <Bar dataKey={this.props.datakey2} fill={Theme.colors[1]} />
                <Legend verticalAlign="top" wrapperStyle={Theme.Legend} iconType="circle" align="right"/>

            </BarChart>
        </ResponsiveContainer>
    );
  }
}

