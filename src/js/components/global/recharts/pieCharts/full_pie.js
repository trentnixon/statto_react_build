/**
 *  Call this component as such
 *   Data.push({name: this.props.SelectedGame.Batted_First, value: RR1 });
 *  <PieChart data={Data} />
 */

import React from "react";
import { connect } from "react-redux";
import  {PieChart, Pie, Legend,Sector, Cell,ResponsiveContainer,Tooltip} from 'recharts';

const RADIAN = Math.PI / 180;  
let data=[], SelectTheme='Dark', Theme;

@connect((store) =>{
    return{
        UI: store.UI,
    }
})

export default class PieChart_Semi extends React.Component {
    componentWillMount(){ 
        data=[];
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
     }
    
    shouldComponentUpdate(nextProps, nextState){ return true;}
    
    componentWillUpdate(nextProps, nextState){} 
    
    render () {
        data = this.props.data;
        return ( 
            <ResponsiveContainer width='100%' height={250}>
                    <PieChart>
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
                                data.map((entry, index) => <Cell key={index} fill={Theme.colors[index % Theme.colors.length]}/>)
                            }
                        </Pie>  
                        <Tooltip
                                offset={20} 
                                wrapperStyle={Theme.Tooltip.wrapper}
                                labelStyle={Theme.Tooltip.label}
                                itemStyle={Theme.Tooltip.Style}
                        />  
                        <Legend wrapperStyle={Theme.Legend} verticalAlign="bottom" iconType="circle" align="center"/>   
                    </PieChart>
            </ResponsiveContainer>
            );
        }
 }