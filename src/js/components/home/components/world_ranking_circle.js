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
      <text x={cx} y={cy} dy={8}  textAnchor="middle" fill='#e9e9e9'>{payload.name} : {payload.value}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={94}
        outerRadius={96}
        startAngle={startAngle}
        endAngle={endAngle}
        fill='#e9e9e9'
      />
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

  componentWillMount(){ 
     console.log(this.props.Player.batting_world_ranking[0].ranking)
  //  console.log(this.props.Player.bowling_world_ranking[0])
  //  console.log(this.props.Player.keeping_world_ranking[0])
  
  },

  renderInt(value){
    if(value == undefined){value=0}
    value = parseInt(value);
    return value;
  },

	render () {

    const data = [
        {name: 'Batting', value: this.renderInt(this.props.Player.batting_world_ranking[0].ranking)}, 
        {name: 'Bowling', value: this.renderInt(this.props.Player.bowling_world_ranking[0].ranking)},
        {name: 'Keeping', value: this.renderInt(this.props.Player.keeping_world_ranking[0].ranking)}
   ];

  	return (
        <ResponsiveContainer width='100%' height={250}>
        <PieChart >
              <Pie 
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape} 
              data={data} 
              cx="50%" 
              cy={110} 
              innerRadius={88}
              outerRadius={100} 
              fill="#383838"
              stroke='#1a1a1a'
              onMouseEnter={this.onPieEnter}
              />
          </PieChart>
       </ResponsiveContainer >
    );
  }
})

export default TwoLevelPieChart;