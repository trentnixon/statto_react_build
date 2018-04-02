import React from "react";
import Menu_Items from "./Menu_Items";
import Nested_Menu_Item from "./Nested_Menu_Items";

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import Store_To_Fav from "../../global/Create_Fav/Save_to_Favorites_Button";

import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';


const styles = {
    title: {
      cursor: 'pointer',
    },
    divider:{
        backgroundColor:'#88acd8'
    },
    titleStyle:{
        fontSize:'1em',
        lineHeight:'58px',
        height:'auto',
    },
    Logo:{
        width:'50px',
        height:'50px',
        margin: '20px auto',
        display: 'block',
    },
    bottomIcons:{
        fontSize:'1.6em',
        color:'#88acd8'
    }
  };

  const CreateMenu={

    base:[
        {title:'Dashboard', Link:'/' ,icon:"dashboard"},
        {title:'History', Link:'/history' ,icon:"history"},
        //{title:'News Feed', Link:'/news' ,icon:"whatshot"},
    ],
    Batting:[
        {title:'Overview', Link:'/batting/', icon:"account_circle"},
        {title:'Formguide', Link:'/batting/formguide', icon:"show_chart"},
        {title:'Runs', Link:'/batting/runs' ,icon:"directions_runs"},
        {title:'Average & Strike rate', Link:'/batting/innings', icon:"multiline_chart"},
        {title:'Goals', Link:'/batting/goals', icon:"gps_fixed"},
        //{title:'Dismissals', Link:'/batting/' ,icon:"sentiment_dissatisfied"},
        // {title:'Positions', Link:'/batting/' , icon:"format_list_numbered"},
        {title:'For', Link:'/batting/teams' ,icon:"people"},
        {title:'Against', Link:'/batting/opposition',icon:"people_outline"},
    ],
    Bowling:[
        {title:'Overview', Link:'/bowling/',icon:"account_circle"},
        {title:'Formguide', Link:'/bowling/formguide',icon:"show_chart"},
        {title:'Wickets', Link:'/bowling/wickets', icon:"transfer_within_a_station"},
        {title:'AES', Link:'/bowling/aes',icon:"multiline_chart"},
        {title:'Goals', Link:'/bowling/goals',icon:"gps_fixedlt"},
        {title:'For', Link:'/bowling/playedfor' ,icon:"people"},
        {title:'Against', Link:'/bowling/opposition',icon:"people_outline"},
    ],
    Keeping:[
        {title:'Overview', Link:'/keeping/',icon:"account_circle"},
    ], 
    Teams:[
         {title:'Clubs', Link:'/teams/',icon:"account_circle"},
    ],
    ChangeProfile:[
        {title:'Search Players', Link:'/search/',icon:"search"},
        {title:'Following', Link:'/following/',icon:"sentiment_very_satisfied"},
   ],
    Final:[
        {title:'Settings', Link:'/settings',icon:"settings"},
    ],
    };


    const recentsIcon = <i style={styles.bottomIcons} class="fa fa-facebook-square"></i>;
    const favoritesIcon = <i style={styles.bottomIcons} class="fa fa-twitter-square"></i>;
    const nearbyIcon = <i style={styles.bottomIcons} class="fa fa-share-alt"></i>;


export default class DrawerUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
 
  componentWillMount(){}

  render() {

    //<Divider style={styles.divider}/>  
    // <Menu_Items data={CreateMenu.Teams} closeDrawer={this.handleClose} title="Teams" id={this.props.Player.PLAYER_META.WP_ID}/> 
            
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
                    title={this.props.Player.PLAYER_META.UserName}
                    titleStyle={styles.titleStyle}
                    iconElementLeft={<Avatar  
                            color="#fff"
                            backgroundColor="#dbaa8b" >{this.props.Player.PLAYER_META.UserName.substring(0,1)}</Avatar>}
                   // iconElementRight={<IconButton><NavigationClose onClick={this.handleClose} /></IconButton>}
                   iconElementRight={<Store_To_Fav player_id={this.props.Player.PLAYER_META.WP_ID} />}
                   
                        
            />
           
           
            <Menu_Items data={CreateMenu.base} closeDrawer={this.handleClose} title="base" id={this.props.Player.PLAYER_META.WP_ID}/>
            <Nested_Menu_Item data={CreateMenu.Batting}  closeDrawer={this.handleClose} title="Batting" id={this.props.Player.PLAYER_META.WP_ID} />
            <Divider style={styles.divider}/>
            <Nested_Menu_Item data={CreateMenu.Bowling} closeDrawer={this.handleClose} title="Bowling" id={this.props.Player.PLAYER_META.WP_ID}/>
            <Divider style={styles.divider} />
            <Nested_Menu_Item data={CreateMenu.Keeping} closeDrawer={this.handleClose}  title="Keeping" id={this.props.Player.PLAYER_META.WP_ID}/>
            
            <Divider style={styles.divider}/>
            <Nested_Menu_Item data={CreateMenu.ChangeProfile} closeDrawer={this.handleClose}  title="Search" id={this.props.Player.PLAYER_META.WP_ID}/>
            <Divider style={styles.divider}/>
            <Menu_Items data={CreateMenu.Final} closeDrawer={this.handleClose} title="Final" id={this.props.Player.PLAYER_META.WP_ID}/> 
                        
                <img style={styles.Logo} src={this.props.UI.Statto_Logo} />
                
            <BottomNavigation 
                className="Menu_Appbar_Bottom"
                selectedIndex={this.state.selectedIndex}
            >
                <BottomNavigationItem
                    label="Facebook"
                    icon={recentsIcon}
                    onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                    label="Twitter"
                    icon={favoritesIcon}
                    onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                    label="Share"
                    icon={nearbyIcon}
                    onClick={() => this.select(2)}
                />
                </BottomNavigation>



            </Drawer>
        </MuiThemeProvider>
            
      </div>
    );
  }
}