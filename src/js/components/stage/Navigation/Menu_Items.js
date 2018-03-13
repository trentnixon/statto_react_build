import React from "react";
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const styles = {
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
    },
    i:{
        color:'#dbaa8b',
    },
    divider:{
        backgroundColor:'#88acd8'
    },
    menu:{
        padding:'0px',
    }
  };

export default class Display_Player_Settings_Home extends React.Component {

    constructor() { super();  }
    
    handleClose(){
        this.props.closeDrawer();
    }
    buildMenu(data,name)
    {
       return  data.map((item,i)=>{
           let Icon = <i style={styles.i} class="material-icons">{item.icon}</i>;
            return( 
                <div key={name+i}>
                    <Link  to={'/'+this.props.id+item.Link}>
                        <MenuItem  leftIcon={Icon} onClick={this.handleClose.bind(this)} style={styles.MenuItem}  primaryText={item.title} secondaryText="" />
                    </Link>
                    <Divider style={styles.divider} />
                </div>
            )
        })
    }

    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <Menu  
                    style={styles.menu} 
                    menuItemStyle={styles.menu} 
                    selectedMenuItemStyle={styles.menu} 
                >
                        { this.buildMenu(this.props.data,this.props.title)}
                </Menu>
             ); 
      }
  }