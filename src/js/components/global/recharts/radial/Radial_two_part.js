import React from "react";
import { connect } from "react-redux";
import  {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer,Tooltip} from 'recharts';
         
let  SelectTheme='Dark', Theme;
@connect((store) =>{
    return{
        UI: store.UI,
    }
})

export default class Radial_Two_Part extends React.Component {
    componentWillMount(){ 
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
    }
	render () {
  	return (
        <ResponsiveContainer width='100%' height={250}>
            <RadarChart cx="50%"  cy={130} outerRadius={90}  data={this.props.data}>
            
            <Radar name="Runs" dataKey="Runs" stroke={Theme.colors[0]} fill={Theme.colors[0]}  fillOpacity={0.6}/>
            <Radar name="Balls" dataKey="Balls" stroke={Theme.colors[1]}  fill={Theme.colors[1]}  fillOpacity={0.6}/>
            
            <PolarGrid />
            <Tooltip 
                    offset={20} 
                    wrapperStyle={Theme.Tooltip.wrapper}
                    labelStyle={Theme.Tooltip.label}
                    itemStyle={Theme.Tooltip.Style}
            />
            <Legend verticalAlign="top" iconType="circle" align="right"/>
            <PolarAngleAxis dataKey="year" stroke={Theme.axis} fill={Theme.axis} />
            </RadarChart>
        </ResponsiveContainer>
    );
  }
}