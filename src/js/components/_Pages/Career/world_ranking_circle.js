import React from "react";

import  {PieChart, Pie, Sector,ResponsiveContainer} from 'recharts';


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
     <Sector
        cx={cx}
        cy={cy}
        innerRadius={0}
        outerRadius={90}
        startAngle={0}
        endAngle={360}
        startAngle={startAngle}
        endAngle={endAngle}
        fill='#fff'
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={95}
        outerRadius={97}
        startAngle={0}
        endAngle={360}
        fill='#fff'
      />
       <text x={cx} y={cy} dy={8}  textAnchor="middle"  fill='#383838'>{payload.name} : {payload.value}</text>
      

    </g>
  );
};

const TwoLevelPieChart = React.createClass({

	getInitialState() {
    return {
      activeIndex: 0,
    };
  },

  
  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  },

  componentWillMount(){ },

  renderInt(value){
    if(value == undefined){value=0}
    value = parseInt(value);
    return value;
  },
 
	render () {

    const data = [
        {name: 'World Ranking', value: this.renderInt(this.props.value)}
   ];

  	return (
        <ResponsiveContainer width='100%' height={250}>
    	<PieChart >
            <Pie 
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape} 
                data={data} 
                cx="50%" 
                cy={100} 
                innerRadius={0}
                outerRadius={90}
                fill="#5bbeba"
                stroke='#5bbeba'
                onMouseEnter={this.onPieEnter}
            />
        </PieChart>
       </ResponsiveContainer >
    );
  }
})

export default TwoLevelPieChart;