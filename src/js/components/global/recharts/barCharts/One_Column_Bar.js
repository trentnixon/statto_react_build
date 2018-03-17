import React from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer} from 'recharts';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const styles ={
    wrapper:{
        backgroundColor:'rgba(44, 44, 44, .5)',
        borderColor:'transparent',
        borderRadius:'5px',
    },
    label:{
        color:'#383838',
    },
    tipLabel:{
        color:'#fff',
    },
    item:{ },
    filter:{
        marginLeft:'20px',
        marginRight:'10px',
    },
    p:{
        textAlign: 'right',
        padding: '0',
        margin: '0 0 10px 0'
    }
}

let data=[],items = [];
export default class Two_Column_Bar_Chart extends React.Component {
    

    state = { value: 0, };
    
      handleChange = (event, index, value) => {
        this.setState({value});
        data=[];
        if(value != 0){
            this.props.data.map((game,i)=>{
                if(game.Year == value)
                    {
                        //console.log(game)
                        data.push(game)
                    }
            })
        }
        else{
            data = this.props.data;
        }
      };

    componentWillMount(){ 
        data=[],items = [];
        data = this.props.data;

        items.push(<MenuItem value={0} key={1000} primaryText="All" />);
        
         this.props.Years.map((year,i)=>{
                items.push(<MenuItem value={year} key={i} primaryText={year} />);
        })

     }
    render () {


  	return (
          <div>
               <div class="filter-Container" style={styles.filter}> 
                    {
                        <MuiThemeProvider>
                            <SelectField
                                value={this.state.value}
                                onChange={this.handleChange}
                                maxHeight={200}
                                floatingLabelText="Filter Runs by Year"
                                floatingLabelStyle={styles.label}
                                labelStyle={styles.label}
                                fullWidth={true}
                            >
                            
                                    {items}
                            
                            </SelectField>
                        </MuiThemeProvider>
                    }
            </div>

        <ResponsiveContainer width='100%' height={200}> 
            <BarChart  
                    data={data}
                    margin={{top: 20, right: 0, left: -30, bottom: 5}}
                    barGap={0}
                    barCategoryGap={0}
            >
            <XAxis dataKey="name" stroke="#383838"/>
            <YAxis stroke="#383838"/>
                
                <Tooltip offset={20} 
                    wrapperStyle={styles.wrapper}
                    labelStyle={styles.tipLabel}
                    itemStyle={styles.item}
                />
                <Bar dataKey={this.props.datakey} fill="#88acd8" />
            </BarChart>
        </ResponsiveContainer>
        <p class="tone1" style={styles.p}> {this.props.countType} {data.length} </p>
        </div>
    );
  }
}

