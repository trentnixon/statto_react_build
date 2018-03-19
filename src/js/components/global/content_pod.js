import React from "react";
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Title
class CardTitle extends React.Component {
    render(){
        return(
            <div>
                <i class="material-icons tone2 cardIcon">hdr_weak</i>
                <h4>{this.props.title}</h4>
                <p class="value">{this.props.value}</p>
                <hr/>
            </div>
        )
    }
}

// Sub Title
class CardSubTitle extends React.Component {
    render(){ 
        return(
            <div>
                <p class="sub">{this.props.Sub}</p>
            </div>
        )
    }
}

// Sub Title
class CardContent extends React.Component {
    render(){
        return(
            <div class="row nomargin" >
                <div class="col-xs-7">
                    Chart in here
                </div>
                <div class="col-xs-5">
                    {this.props.content}
                    [LINK]
                </div>
            </div>
        )
    }
}

export default class Display_Content_Pod extends React.Component {

    constructor() { super();  }
    
    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){ }
    
    render() {
            return ( 
                <Fade bottom>
                <div class={ 'contentpod-item '+ this.props.width}>
                    <MuiThemeProvider>
                        <Card 
                            className="Contentpod-Card"
                        >
                            <CardHeader
                                title = {<CardTitle title={this.props.title} value={this.props.value} />} 
                                subtitle={<CardSubTitle Sub={this.props.sub} />}
                                actAsExpander={true}
                                showExpandableButton={false}
                                className="Contentpod-Header"
                            />
    
                            <CardText expandable={true}>
                                <CardContent content={this.props.content}/>     
                            </CardText>

                        </Card>
                    </MuiThemeProvider>    
                </div>    
                </Fade>
             ); 
      }
  }