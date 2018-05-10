import React from "react";
import { connect } from "react-redux";
import  {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer,Tooltip} from 'recharts';
         
let  SelectTheme='Dark', Theme, cx="50%";
@connect((store) =>{
    return{
        UI: store.UI,
    }
}) 

export default class Radial_Two_Part extends React.Component {
    componentWillMount(){ 
   
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];

        if(this.props.legendvertical == 'bottom'){cx="50%"}
        else{cx="50%"}
    }

    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
        
    }
	render () {
  	return (
          
        <ResponsiveContainer width='100%' height={280}>
            <RadarChart cx={cx}  cy="50%" outerRadius={90}  stroke={Theme.colors[0]} fill={Theme.colors[0]} data={this.props.data}>
            
            <Radar name={this.props.radar1name} dataKey={this.props.radar1key} stroke={Theme.colors[0]} fill={Theme.colors[0]}  fillOpacity={0.5}/>
            <Radar name={this.props.radar2name} dataKey={this.props.radar2key} stroke={Theme.colors[1]}  fill={Theme.colors[1]}  fillOpacity={0.6}/>
            
            <PolarGrid />
            <Tooltip 
                    offset={20} 
                    wrapperStyle={Theme.Tooltip.wrapper}
                    labelStyle={Theme.Tooltip.label}
                    itemStyle={Theme.Tooltip.Style}
            />
            <Legend 
                verticalAlign={this.props.legendvertical}
                layout={this.props.legendLayout}
                wrapperStyle={Theme.Legend} 
                iconType="circle" 
                align={this.props.LegendAlign}
            />
            
            <PolarAngleAxis dataKey={this.props.AxisKey} stroke={Theme.axis} fill={Theme.axis} />
            </RadarChart>
        </ResponsiveContainer>
    );
  }
}