import React from "react";

import Fade from 'react-reveal/Fade';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/navigation/expand-less';

import Expandable_Title from "./Expandable_Title";
import Expandable_SubTitle from "./Expandable_SubTitle";
import Expandable_Content from "./Expandable_Content";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Display_Content_Pod extends React.Component {

    constructor() { super(); 
        this.state = {
        cardStatus: false,
        expanded: false,
     } }
    
     clickHandle(){
         if(this.state.cardStatus == false){this.setState({cardStatus:true,expanded: true}); }
         else{this.setState({cardStatus:false,expanded: false}); }
    }

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
                            expanded={this.state.expanded} 
                            onExpandChange={() => this.clickHandle()}
                            className={this.state.cardStatus == true ? 'card_active': 'not'}
                        >
                            <CardHeader
                                title = {<Expandable_Title title={this.props.title} value={this.props.value} />} 
                                subtitle={<Expandable_SubTitle Sub={this.props.sub} />}
                                actAsExpander={true}
                                showExpandableButton={false}
                                className="Contentpod-Header"
                            />
    
                            <CardText expandable={true}>
                                <Expandable_Content 
                                    content={this.props.content}
                                    data={this.props.data}
                                    filter={this.props.filter}
                                    Link={this.props.Link}
                                    List={this.props.List}
                                    type={this.props.type}
                                />     

                                <FlatButton 
                                    icon={<ActionAndroid color="#fff" />}
                                    onClick={() => this.clickHandle()} 
                                    className="Close_Expand"
                                />
                            </CardText>
                        </Card>
                    </MuiThemeProvider>  
                 </div>    
                </Fade>
             ); 
      }
  }