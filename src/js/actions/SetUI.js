
import store from "../store/store";
import axios from 'axios';
var _ = require('lodash');

export function SetUI(){
	/* properties */


	/** Methods */
	/* Set up UI */
		this.SetUI = ()=>{
			const request = axios.get("/statto/wp-json/wp/v2/pages/2");
			request.then(({data}) =>{ 
                
                console.log(data);
                this.Store('STORE_STATTO_LOGO',data.acf.statto_logo);
                this.Store('STORE_STATTO_LOGO_DARK',data.acf.statto_logo_dark);
                this.Store('STORE_STATTO_LOGO_FULL_WHITE',data.acf.statto_logo_full_white_bg);
                this.Store('STORE_STATTO_LOGO_FULL_DARK',data.acf.statto_logo_full_dark_bg);
                this.Store('STORE_STATTO_FORCE_UPDATE_VERSION',data.acf.force_update_version);
            
                // Fetch Users
                this.Fetch_Registered_Players();
            });
		}	
	/* Fetch Registered List */
		this.Fetch_Registered_Players = ()=>{
			const request = axios.get("/statto/ajax/player/login/Login-Users.php");
			request.then(({data}) =>{ 
                console.log(data)
				this.Store('FETCH_WP_USER_DATA',data);
			});
		}
		this.Store = (type,payload) => {
			store.dispatch({ type:type, payload:payload })
		}
 }