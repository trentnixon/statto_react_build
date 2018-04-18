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
        console.log(this.props.data)
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
    }
	render () {
  	return (
        <ResponsiveContainer width='100%' height={250}>
            <RadarChart cx="50%"  cy={130} outerRadius={90}  stroke={Theme.colors[0]} fill={Theme.colors[0]} data={this.props.data}>
            
            <Radar name={this.props.radar1name} dataKey={this.props.radar1key} stroke={Theme.colors[0]} fill={Theme.colors[0]}  fillOpacity={0.5}/>
            <Radar name={this.props.radar2name} dataKey={this.props.radar2key} stroke={Theme.colors[1]}  fill={Theme.colors[1]}  fillOpacity={0.6}/>
            
            <PolarGrid />
            <Tooltip 
                    offset={20} 
                    wrapperStyle={Theme.Tooltip.wrapper}
                    labelStyle={Theme.Tooltip.label}
                    itemStyle={Theme.Tooltip.Style}
            />
            <Legend verticalAlign="bottom" wrapperStyle={Theme.Legend} iconType="circle" align="center"/>
            <PolarAngleAxis dataKey={this.props.AxisKey} stroke={Theme.axis} fill={Theme.axis} />
            </RadarChart>
        </ResponsiveContainer>
    );
  }
}