import React from "react";
import  {RadialBarChart,Text,Tooltip,Label,LabelList, RadialBar,PolarAngleAxis, Legend,ResponsiveContainer} from 'recharts';

// ['#5bbeba', '#bebb5b','#67c2c4','#c47e67', '#be5b5e', '#5b5ebe','#c46795','#95c467'];

const styles ={
    wrapper:{
        backgroundColor:'rgba(44, 44, 44, .5)',
        borderColor:'transparent',
        borderRadius:'5px',
    },
    label:{
        color:'white',
    },
    item:{ color:'white', }
}



export default class Form_o_Meter extends React.Component {

    renderCustomizedLabel = (data) => {
        console.log(data);
        return (
          <Text
            key={data.name}
           
            position='end'
            fill="white"
            textAnchor="middle"
            verticalAnchor="middle"
          >
            {data.name}
          </Text>
        );
      };
    componentWillMount(){ }
	render () {
        return (
        <ResponsiveContainer width='100%' height={230}>
          <RadialBarChart barGap={0} barCategoryGap={0} cx="50%"  cy={160} innerRadius={30} outerRadius={140} barSize={15} data={this.props.data} startAngle={180} endAngle={0} >
           
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={90} />
          <RadialBar minAngle={0}  maxAngle={180} label={{fill:'#e9e9e9'}} background={{ fill: 'transparent' }} clockWise={true} dataKey='uv'/>
            <Legend  verticalAlign="bottom" iconType="circle" align="center" />
          </RadialBarChart>
        </ResponsiveContainer>
      );
    }
}
/*
export class Form_o_Meter_label extends React.Component {
    render(){
        console.log(this.props.name)
        return(
            <div class="tone1">{this.props.name}</div>
        )
    }
}*/