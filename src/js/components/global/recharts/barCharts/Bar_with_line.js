import React from "react";
import { connect } from "react-redux";
import  {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer}  from 'recharts';


const styles ={
    filter:{
        marginLeft:'20px',
        marginRight:'10px',
    },
    p:{
        textAlign: 'right',
        padding: '0',
        margin: '0 0 10px 0'
    } 
}

let data=[], items = [], SelectTheme='Dark', Theme;
@connect((store) =>{
    return{
        UI: store.UI,
    }
})
export default class One_Column_Bar_Chart extends React.Component {
    componentWillMount(){ 
        data=[];

        if(this.props.Theme){ SelectTheme = this.props.Theme;}
        Theme = this.props.UI.Themes[SelectTheme];
    }
    render () {
        console.log(this.props.data);
        if(this.props.data == false){data=[];}
        else{data = this.props.data} 

        return (
            <ResponsiveContainer width='100%' height={200}> 
                <ComposedChart 
                    data={data}
                    margin={{top: 20, right: 0, left: -30, bottom: 5}}
                    barGap={0}
                    barCategoryGap={0}
                >
                    <CartesianGrid stroke='#f5f5f5'/>
                    <XAxis dataKey={this.props.name} stroke={Theme.axis}/>
                    <YAxis stroke={Theme.axis} />
                    <Tooltip
                        offset={20} 
                        wrapperStyle={Theme.Tooltip.wrapper}
                        labelStyle={Theme.Tooltip.label}
                        itemStyle={Theme.Tooltip.Style}
                    />
                    <Legend/>
                    <Bar dataKey={this.props.bar}  fill={Theme.colors[0]}/>
                    <Line type='monotone' dataKey={this.props.line} stroke={Theme.colors[3]} dot={false}/>
                </ComposedChart>
            </ResponsiveContainer>
      );
    }
}