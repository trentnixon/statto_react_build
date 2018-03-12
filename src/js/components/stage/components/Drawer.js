import React from "react";
import { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Menu_Header from './Menu_Header';
import Divider from 'material-ui/Divider';

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    title: {
      cursor: 'pointer',
    },
    containerStyle:{
        boxShadow:'none',
    },
    CardText:{
        padding:0,
        backgroundColor:'#88acd8',
        boxShadow:'inset 0px 0px 10px #383838',
        background: 'linear-gradient(to top, #b4f7fd, #88acd8)',
    },
    MenuItem:{
        lineHeight:'48px',
        minHeight:'auto',
    }
  };

  const CreateMenu={
    base:[
        {title:'Dashboard', Link:'/'},
        {title:'NewsFeed', Link:'/news'},
    ],
    Batting:[
        {title:'Overview', Link:'/'},
        {title:'Formguide', Link:'/'},
        {title:'Runs', Link:'/'},
        {title:'AES', Link:'/'},
        {title:'Dismissals', Link:'/'},
        {title:'Positions', Link:'/'},
        {title:'For', Link:'/'},
        {title:'Against', Link:'/'},
    ],
    Bowling:[
        {title:'Overview', Link:'/'},
        {title:'Formguide', Link:'/'},
        {title:'Runs', Link:'/'},
        {title:'AES', Link:'/'},
        {title:'For', Link:'/'},
        {title:'Against', Link:'/'},
    ],
    Keeping:[
        {title:'Overview', Link:'/'},
    ], 
    Final:[
        {title:'Search', Link:'/'},
        {title:'Settings', Link:'/settings'},
    ],
    };
export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
    

  buildMenu(data,name)
    {
       return  data.map((item,i)=>{
            return( 
                <div key={name+i}>
                    <MenuItem  style={styles.MenuItem} onClick={this.handleClose} primaryText={item.title} secondaryText="" />
                    <Divider />
                </div>
            )
        })
    }

  render() {
    return (
      <div>
        <MuiThemeProvider>
            <FloatingActionButton
                onClick={this.handleToggle}
                className="DisplayNav"
                backgroundColor="#88acd8"
            >
                <MenuIcon />
            </FloatingActionButton>
        </MuiThemeProvider>
        
        <MuiThemeProvider>
            <Drawer
                docked={false}
                width={300}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
            <AppBar
                    className="Menu_Appbar"
                    iconElementLeft={<Avatar  
                            color="#fff"
                            backgroundColor="#dbaa8b" >A</Avatar>}
                    iconElementRight={<IconButton><NavigationClose onClick={this.handleClose} /></IconButton>}
            />

            <Menu  width={250}>
                { this.buildMenu(CreateMenu.base,'base')}
            </Menu>

            <Card style={styles.containerStyle} >

                <CardHeader
                    title="Batting"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                
                <CardText 
                    expandable={true}
                    style={styles.CardText}
                >
                    <Menu  width={250}>
                        { this.buildMenu(CreateMenu.Batting,'batting')}
                    </Menu>
                </CardText>
            </Card>
            <Divider />
            <Card
                style={styles.containerStyle}
            >
                <CardHeader
                    title="Bowling"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                
                <CardText 
                    expandable={true}
                    style={styles.CardText}
                >
                    <Menu  width={250}>
                        { this.buildMenu(CreateMenu.Bowling,'batting')}
                    </Menu>
                </CardText>
            </Card>
            <Divider />
            <Card
                style={styles.containerStyle}
            >
                <CardHeader
                    title="Keeping"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                
                <CardText 
                    style={styles.CardText}
                    expandable={true}
                >

                    <Menu  width={250}>
                        { this.buildMenu(CreateMenu.Keeping,'batting')}
                    </Menu>
                </CardText>
            </Card>
            <Divider />
                
            <Menu  width={250}>
                { this.buildMenu(CreateMenu.Final,'Final')}
            </Menu>
            </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}