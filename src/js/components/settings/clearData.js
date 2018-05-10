import React from "react";
import {Followers} from "../../actions/followers";
const F = new Followers();

export default class Clear_Data extends React.Component {

      componentWillMount(){
          F.ClearData();
          console.log("Clear Log Called")
       }
    render() {
            return ( 
                <div>
                        <h1>Data Cleared</h1>
                        <p>Your Stored Data is now Clear. Statto has been reset.</p>
                        <a class="btn btn-primary" href="/statto/">Login</a>
                </div>
             ); 
      }
  } 