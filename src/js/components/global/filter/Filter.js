import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/filter-list';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginRight: 20,
  position:'fixed',
  bottom:10,
  left:5,
  zIndex:99
};

const done ={
    position:'fixed',
  bottom:5,
}

import Filter_Header from "./Filter_Header";
import Section_Header from "../Section_Header";
import Year from "./Year";
import Teams from "./teams";
import Opposition from "./opposition";

let Years=[];
export default class Display_History_Filter extends React.Component {

    constructor() { super();  }
    
    state = {
        value: 'hide',
      };

    componentWillMount(){  }
    displayFilter(){
    // console.log("Toggle Display Filter")
        if(this.state.value == 'hide'){
            this.setState({value:'show'});
        }
        else{
            this.setState({value:'hide'});
        }
    }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){
           //console.log(this.props.match.params.playerid, this.props.UI.items.Player) 
       } 
    
    render() {
            return ( 
                <div>
                    <MuiThemeProvider>
                        <FloatingActionButton 
                            mini={true} 
                            style={style}
                            onClick={this.displayFilter.bind(this)}
                            backgroundColor="#b37383"
                        >
                            <ContentAdd />
                        </FloatingActionButton>
                    </MuiThemeProvider >

                        
                        <div id="Filter" class={this.state.value} >
                            <Filter_Header {... this.props} />
                            <Year {... this.props}/>
                            <Teams {... this.props} />
                            <Opposition {... this.props} />
                            <MuiThemeProvider>
                                <RaisedButton 
                                    label="Done" 
                                    labelColor="#e9e9e9" 
                                    onClick={this.displayFilter.bind(this)} 
                                    fullWidth={true}
                                    backgroundColor="#5bbeba"
                                    className="done"
                                />
                            </MuiThemeProvider>
                        </div>
                </div>
             ); 
      }
  }