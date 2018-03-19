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
        data = this.props.Data.slice().reverse();

        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
    }

	render () {
  	return (
        <ResponsiveContainer width='100%' height={200}>
            <LineChart 
                data={data}
                margin={{top: 20, right: 0, left: -15, bottom: 5}}
            >
            
            <XAxis dataKey="Year" stroke={Theme.axis}/>
            <YAxis  stroke={Theme.axis} />
            
            <Tooltip
                offset={20} 
                wrapperStyle={Theme.Tooltip.wrapper}
                labelStyle={Theme.Tooltip.label}
                itemStyle={Theme.Tooltip.Style}
            />

                <Legend verticalAlign="top" iconType="circle" align="right"/>
                <Line type="natural" dataKey={this.props.dataKey} stroke={Theme.colors[0]} dot={false} />
      </LineChart>
      </ResponsiveContainer>
    );
  }
}
