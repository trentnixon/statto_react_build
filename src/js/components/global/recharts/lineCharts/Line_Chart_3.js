import React from "react";
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

let data=[];

const styles ={
    wrapper:{
        backgroundColor:'rgba(44, 44, 44, .5)',
        borderColor:'transparent',
        borderRadius:'5px',
    },
    label:{
        color:'#383838',
    },
    item:{ }
}




/**
 * Create a Light nad Dark theme for chart colors in a reducer
 * Call themes via props!!! 
 */





let axis_Color;
export default class Simple_Line_Chart extends React.Component {
    componentWillMount(){ 
        data=[];
        data = this.props.Data.slice().reverse();

        // Create color

        this.props.axisColor ? axis_Color=this.props.axisColor :axis_Color='#383838'

    }

	render () {
  	return (
        <ResponsiveContainer width='100%' height={200}>
        <LineChart 
            data={data}
            margin={{top: 20, right: 0, left: -25, bottom: 20}}
        >
            
            <XAxis dataKey="Year" stroke={axis_Color}/>
            <YAxis  stroke={axis_Color} />
            
            <Tooltip
                offset={20} 
                wrapperStyle={styles.wrapper}
                labelStyle={styles.label}
                itemStyle={styles.item}
            />

                <Legend verticalAlign="top" iconType="circle" align="right"/>

                <Line type="natural" dataKey={this.props.dataKey1} stroke="#88acd8" dot={false} />
                <Line type="natural" dataKey={this.props.dataKey2} stroke="#73b393" dot={false} />
                <Line type="natural" dataKey={this.props.dataKey3} stroke="#dbaa8b" dot={false} />
                
      </LineChart>
      </ResponsiveContainer>
    );
  }
}
