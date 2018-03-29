import React from "react";
import Naked_Wrapper from "./Naked_wrapper";
import LinearProgress from 'material-ui/LinearProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class Wrapper extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){ }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    /**
     *  title={"Beat career average of "+ Goals_Wickets_Average[0] +' Wickets a year'}
                        value={Goals_Wickets_Average[1] +' of '+Goals_Wickets_Average[0]} 
                        sub={Goals_Wickets_Average[3] +'% complete'}
                        width={"col-xs-12 goal gradient gradient_"+Goals_Wickets_Average[2] }
     */
    render() {
            return (
                <Naked_Wrapper>
                        <div class="Goal">
                            <div class="col-xs-8 nopadding"><h3>{this.props.title}</h3></div>
                            <div class="col-xs-4 "><h4 class="tone1">{this.props.value}</h4></div>
                            <MuiThemeProvider>
                                <LinearProgress color="#88acd8" mode="determinate" value={this.props.width} />
                            </MuiThemeProvider>
                            <p>{this.props.width}% Complete</p>
                        </div>
                </Naked_Wrapper>
             ); 
      }
  }