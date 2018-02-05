import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

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
let data=[];
export default class Two_Column_Bar_Chart extends React.Component {
    componentWillMount(){ 
        data=[];
        data = this.props.data;
     }
    render () {
  	return (
        <ResponsiveContainer width='100%' height={200}>
            <BarChart  
                    data={data}
                    margin={{top: 20, right: 0, left: -30, bottom: 5}}
                    barGap={2}
                    barCategoryGap={5}
            >
            <XAxis dataKey="name" stroke="#e9e9e9"/>
            <YAxis stroke="#e9e9e9"/>
                
                <Tooltip offset={20} 
                    wrapperStyle={styles.wrapper}
                    labelStyle={styles.label}
                    itemStyle={styles.item}
                />
                <Bar dataKey="First" fill="#5bbeba" />
                <Bar dataKey="Second" fill="#bebb5b" />
            
            </BarChart>
        </ResponsiveContainer>
    );
  }
}

