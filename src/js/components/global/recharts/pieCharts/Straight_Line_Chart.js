/**
 *  Call this component as such
 *   Data.push({name: this.props.SelectedGame.Batted_First, value: RR1 });
 *  <PieChart data={Data} />
 */

import React from "react";
import { connect } from "react-redux";
import  {PieChart, Pie, Legend,Sector, Cell,ResponsiveContainer,Tooltip} from 'recharts';


const RADIAN = Math.PI / 180;  
let data, SelectTheme='Dark', Theme;

@connect((store) =>{
    return{
        UI: store.UI,
    }
})
export default class PieChart_Semi extends React.Component {
    componentWillMount(){ 
        data = this.props.data;
        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
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
                                data.map((entry, index) => <Cell key={index} fill={Theme.colors[index % Theme.colors.length]}/>)
                            }
                            </Pie>  
                            <Tooltip
                                offset={20} 
                                wrapperStyle={Theme.Tooltip.wrapper}
                                labelStyle={Theme.Tooltip.label}
                                itemStyle={Theme.Tooltip.Style}
                            />    
                    </PieChart>
            </ResponsiveContainer>
            );
        }
 }
