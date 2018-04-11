import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components
import Keeping_overview from "../../keeping/keeping_overview";
import Keeping_career from "../../keeping/keeping_career";

////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BattingRoutes extends React.Component {

    constructor() { super(); }
    
    componentWillMount(){ 
        
         routes = [
            {
              path: "/:playerid/keeping",
              component: <Keeping_overview {... this.props } />,
              exact: true,
            },
            {
              path: "/:playerid/keeping/career",
              component: <Keeping_career {... this.props } />, 
              exact: true,
            }
          ];
    }

    render() {
        
            return ( 
                <div>
                    {
                        routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={()=>route.component }  
                            />
                        ))
                    }
                </div>
             ); 
      }
  }
