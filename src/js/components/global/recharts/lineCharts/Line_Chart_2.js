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
        color:'white',
    },
    item:{ }
}
export default class Simple_Line_Chart extends React.Component {
    componentWillMount(){ 
        data=[];
        
    }

	render () {
        data = this.props.Data;
  	return (
        <ResponsiveContainer width='100%' height={200}>
        <LineChart 
            data={data}
            margin={{top: 20, right: 0, left: -25, bottom: 20}}
        >
            
            <XAxis dataKey="Year" stroke="#e9e9e9"/>
            <YAxis  stroke="#e9e9e9" />
            
            <Tooltip
                offset={20} 
                wrapperStyle={styles.wrapper}
                labelStyle={styles.label}
                itemStyle={styles.item}
            />

                <Legend verticalAlign="top" iconType="circle" align="right"/>

                <Line type="natural" dataKey={this.props.dataKey1} stroke="#5bbeba" dot={false} />
                <Line type="natural" dataKey={this.props.dataKey2} stroke="#bebb5b" dot={false} />
                
      </LineChart>
      </ResponsiveContainer>
    );
  }
}
