import React from "react";
import  {Radar, RadarChart, PolarGrid, Legend,
         PolarAngleAxis, PolarRadiusAxis,ResponsiveContainer,Tooltip} from 'recharts';

const styles ={
    wrapper:{
        backgroundColor:'rgba(44, 44, 44, .8)',
        borderColor:'transparent',
        borderRadius:'5px',
    },
    label:{
        color:'white',
    },
    item:{color:'white', }
}

export default class Radial_Two_Part extends React.Component {
    componentWillMount(){ }
	render () {
  	return (
        <ResponsiveContainer width='100%' height={250}>
            <RadarChart cx="50%"  cy={130} outerRadius={90}  data={this.props.data}>
            <Radar name="Runs" dataKey="Runs" stroke="#e9e9e9" fill="#e9e9e9" fillOpacity={0.6}/>
            <Radar name="Balls" dataKey="Balls" stroke="#5b5ebe" fill="#5b5ebe" fillOpacity={0.6}/>
            <PolarGrid />
            <Tooltip 
                    offset={20} 
                    wrapperStyle={styles.wrapper}
                    labelStyle={styles.label}
                    itemStyle={styles.item}
            />
            <Legend verticalAlign="top" iconType="circle" align="right"/>
            <PolarAngleAxis dataKey="year" stroke="#5bbeba" fill="#5bbeba" />
            </RadarChart>
        </ResponsiveContainer>
    );
  }
}