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
    Tiplabel:{
        color:'#fff',
    },
    item:{ }
}
export default class Simple_Line_Chart extends React.Component {
    componentWillMount(){ 
        data=[];
        data = this.props.Data.slice().reverse();
    }

	render () {
  	return (
        <ResponsiveContainer width='100%' height={200}>
        <LineChart 
            data={data}
            margin={{top: 20, right: 0, left: -25, bottom: 5}}
        >
            
            <XAxis dataKey="Year" stroke="#383838"/>
            <YAxis  stroke="#383838" />
            
            <Tooltip
                offset={20} 
                wrapperStyle={styles.wrapper}
                labelStyle={styles.Tiplabel}
                itemStyle={styles.item}
            />

                <Legend verticalAlign="top" iconType="circle" align="right"/>
                <Line type="natural" dataKey={this.props.dataKey} stroke="#88acd8" dot={false} />
      </LineChart>
      </ResponsiveContainer>
    );
  }
}
