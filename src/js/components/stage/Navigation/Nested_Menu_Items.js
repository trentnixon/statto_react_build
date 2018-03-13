import React from "react";
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const styles = {
    containerStyle:{
        boxShadow:'none',
        padding:'0',
    },
    CardText:{
        padding:0,
        backgroundColor:'#88acd8',
        
        boxShadow:'inset 0px 0px 10px #383838',
      //  background: 'linear-gradient(to top, #b4f7fd, #88acd8)',
    },
    MenuItem:{
        lineHeight:'40px',
        minHeight:'auto',
        padding:'0 0 0 15px',
        textTransform:'uppercase',
        fontSize:'.9em',
        color:'#fff',
    },
    innerDivStyle:{
        padding:'0px 16px 0px 50px'
    },
    i:{
        padding:'0',
        margin:'8px 2px',
        color:'#fff',
    },menu:{
        padding:'0',
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
                    <Link  to={'/'+this.props.id+item.Link} >
                        <MenuItem  
                            leftIcon={Icon} 
                            onClick={this.handleClose.bind(this)}  
                            style={styles.MenuItem}  
                            innerDivStyle={styles.innerDivStyle}
                            primaryText={item.title} 
                            secondaryText="" 
                        />
                    </Link>
                </div>
            )
        })
    }

    componentWillMount(){  }
    shouldComponentUpdate(nextProps, nextState){ return true;}
    componentWillUpdate(nextProps, nextState){}
    
    render() {
            return ( 
                <Card style={styles.containerStyle} >

                <CardHeader
                    title={this.props.title}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                
                <CardText 
                    expandable={true}
                    style={styles.CardText}
                >
                    <Menu  style={styles.menu}>
                        { this.buildMenu(this.props.data,this.props.title)}
                    </Menu>
                </CardText>
            </Card>
             ); 
      }
  }