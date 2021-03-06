import React from "react";
import { connect } from "react-redux";
import  {RadialBarChart,Text,Tooltip,Label,LabelList, RadialBar,PolarAngleAxis, Legend,ResponsiveContainer} from 'recharts';

let SelectTheme='Dark', Theme;
@connect((store) =>{
  return{
      UI: store.UI,
  }
})
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
    componentWillMount(){ 
      if(this.props.Theme){ SelectTheme = this.props.Theme;}
      Theme = this.props.UI.Themes[SelectTheme];
    }
	render () {
        return (
        <ResponsiveContainer width='100%' height={210}>
          <RadialBarChart barGap={0} barCategoryGap={0} cx="50%"  cy={160} innerRadius={30} outerRadius={140} barSize={15} data={this.props.data} startAngle={180} endAngle={0} >
           
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={90} />
          <RadialBar minAngle={0}  maxAngle={180} label={{fill:'#fff'}} background={{ fill: 'transparent' }} clockWise={true} dataKey='uv'/>
            <Legend  wrapperStyle={Theme.Legend} verticalAlign="bottom" iconType="circle" align="center" />
          </RadialBarChart>
        </ResponsiveContainer>
      );
    }
}