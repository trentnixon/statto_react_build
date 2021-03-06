import React from "react";
import { connect } from "react-redux";
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

let data=[], SelectTheme='Dark', Theme;
@connect((store) =>{
    return{
        UI: store.UI,
    }
})
export default class Simple_Line_Chart extends React.Component {
    componentWillMount(){ 
        data=[];
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
    }

	render () {
        data = this.props.Data;
  	return (
        <ResponsiveContainer width='100%' height={200}>
        <LineChart 
            data={data}
            margin={{top: 20, right: 0, left: -25, bottom: 20}}
        >
            
            <XAxis dataKey="Year" stroke={Theme.axis}/>
            <YAxis  stroke={Theme.axis} />
            
            <Tooltip
                offset={20} 
                wrapperStyle={Theme.Tooltip.wrapper}
                labelStyle={Theme.Tooltip.label}
                itemStyle={Theme.Tooltip.Style}
            />

                <Legend verticalAlign="top" wrapperStyle={Theme.Legend} iconType="circle" align="right"/>

                <Line type="natural" dataKey={this.props.dataKey1} stroke={Theme.colors[0]} dot={false} />
                <Line type="natural" dataKey={this.props.dataKey2} stroke={Theme.colors[1]} dot={false} />
                
      </LineChart>
      </ResponsiveContainer>
    );
  }
}
