/**
 *  Call this component as such
 *   Data.push({name: this.props.SelectedGame.Batted_First, value: RR1 });
 *  <PieChart data={Data} />
 */

import React from "react";
import  {PieChart, Pie, Legend,Sector, Cell,ResponsiveContainer,Tooltip} from 'recharts';

const COLORS = ['#88acd8', '#dbaa8b', '#73b393', '#b37383']; 

const RADIAN = Math.PI / 180;  
let data;
export default class PieChart_Semi extends React.Component {
    componentWillMount(){ 
        data = this.props.data;
     }
    render () {
        return (
            <ResponsiveContainer width='100%' height={120}>
                    <PieChart >
                        <Pie
                            data={data} 
                            cx="50%" 
                            cy={100} 
                            startAngle={180}
                            endAngle={0}
                            innerRadius={70}
                            outerRadius={80} 
                            fill="#e9e9e9"
                            stroke='transparent'
                            paddingAngle={3}
                            label={true}
                            >
                                {
                                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                            }
                            </Pie>  
                            <Tooltip/>     
                    </PieChart>
            </ResponsiveContainer>
            );
        }
 }
