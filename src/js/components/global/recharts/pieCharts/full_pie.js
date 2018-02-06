/**
 *  Call this component as such
 *   Data.push({name: this.props.SelectedGame.Batted_First, value: RR1 });
 *  <PieChart data={Data} />
 */

import React from "react";
import  {PieChart, Pie, Legend,Sector, Cell,ResponsiveContainer,Tooltip} from 'recharts';

const COLORS = ['#5bbeba', '#bebb5b','#67c2c4','#c47e67', '#be5b5e', '#5b5ebe','#c46795','#95c467'];

const styles ={
    wrapper:{
        backgroundColor:'rgba(44, 44, 44, .5)',
        borderColor:'transparent',
        borderRadius:'5px',
    },
    Piewrapper:{
    },
    label:{color:'white', },
    item:{color:'white',  }
}

const RADIAN = Math.PI / 180;  
let data=[];
export default class PieChart_Semi extends React.Component {
    componentWillMount(){ 
        data=[];
      //  console.log('New Data ', this.props.data);
     }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    
    componentWillUpdate(nextProps, nextState){} 
    
    render () {
        data = this.props.data;
        return ( 
            <ResponsiveContainer width='100%' height={250}>
                    <PieChart >
                        <Pie
                            data={data} 
                            cx="50%" 
                            cy={110} 
                            innerRadius={50}
                            outerRadius={60} 
                            fill="#e9e9e9"
                            stroke='transparent'
                            paddingAngle={3}
                            label={true}
                            margin={{top: 20, right: 0, left: 0, bottom: 20}}
                            >
                                {
                                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                            }
                            </Pie>  
                            <Tooltip
                                offset={0} 
                                wrapperStyle={styles.wrapper}
                                labelStyle={styles.label}
                                itemStyle={styles.item}
                            />  
                            <Legend wrapperStyle={styles.Piewrapper} verticalAlign="bottom" iconType="circle" align="center"/>   
                    </PieChart>
            </ResponsiveContainer>
            );
        }
 }