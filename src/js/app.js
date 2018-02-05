import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import { Provider } from "react-redux";
import axios from 'axios';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { ToastContainer } from 'react-toastify';
import {RegisteredPlayers} from './actions/login';
import {Fetch_Statto_Meta} from './actions/ui';
require( 'react-toastify/dist/ReactToastify.min.css'); 

// Styles
// Stylesheets
 
   require('../css/app.scss');
 
// Components
import dev from "./components/dev/dev";

import Update_Status from "./components/update/components/Update_Status";
import Login from "./components/login/";
import register from "./components/register"
import stage from "./stage";


import store from "./store/store";

// Fire Function to Fetch Logged Players
	RegisteredPlayers();
	Fetch_Statto_Meta(); 
		
const Statto = ({ match }) => (
  <Router>  	 
    	<div id="statto-app">
			<Route exact path="/" component={Login}/>
			<Route exact path="/register" component={register}/>
			<Route path="/:playerid" component={stage} />
			<ToastContainer />
			<Update_Status />
		</div>
  </Router>
)

const app = document.getElementById('app');
ReactDOM.render( <Provider store={store}><Statto /></Provider>,app);