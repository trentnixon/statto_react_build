import React from "react";
import  {XAxis} from 'recharts';


export default class Simple_Line_Chart extends React.Component {
    componentWillMount(){ }

	render () {
  	return (  <XAxis dataKey={this.props.key} stroke="#e9e9e9"/>  );
  }
}
