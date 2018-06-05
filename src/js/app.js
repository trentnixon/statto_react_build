import injectTapEventPlugin from 'react-tap-event-plugin';
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router,BrowserRouter , Route, Link} from 'react-router-dom';
import { Provider } from "react-redux";
// import axios from 'axios';

import { ToastContainer } from 'react-toastify';
import {SetUI} from "./actions/SetUI";

// Stylesheets
require( 'react-toastify/dist/ReactToastify.min.css'); 
require('../css/app.scss');
 
// Components
import Update_Status from "./components/update/components/Update_Status";
import Login from "./components/login/";
import register from "./components/register"
import stage from "./stage";
import store from "./store/store";
import ClearData from "./components/settings/clearData";



import predictor from "./Statto_Teams/predictor/predictor";

// Fire Function to Fetch Logged Players
	const UI = new SetUI();
	UI.SetUI();
		
	
export default class Statto extends React.Component {

		constructor() { super();  }
		componentWillMount(){ 
			injectTapEventPlugin();
		}
		shouldComponentUpdate(nextProps, nextState){ return true;}
		componentWillUpdate(nextProps, nextState){ }
		render() {
            return ( 
                <Router>
					<div id="statto-app">	
						<Route exact path="/" component={Login}/>
						<Route exact path="/register" component={register}/>
						<Route path="/:playerid" component={stage} />
						<Route path="/cleardata" component={ClearData} />
						<Route path="/:playerid/predictor" component={predictor} />
						<ToastContainer />
						<Update_Status />
					</div>
			</Router>
             ); 
      }
	}
/*
const Statto = ({ match }) => (
  <Router>  	 
	  
    	<div id="statto-app">	
			<Route exact path="/" component={Login}/>
			<Route exact path="/register" component={register}/>
			<Route path="/:playerid" component={stage} />
			<Route path="/cleardata" component={ClearData} />
			<Route path="/:playerid/predictor" component={predictor} />
			
			<ToastContainer />
			<Update_Status />
		</div>
  </Router>
)
*/

const app = document.getElementById('app');
ReactDOM.render( <Provider store={store}><Statto /></Provider>,app);