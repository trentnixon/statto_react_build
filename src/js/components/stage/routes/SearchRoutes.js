import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components
import Following from "../../search/Following";
import In_App_Search from "../../search/search";

////////////////////////////////////////////////////////////
// then our route config
let routes=[];
export default class BattingRoutes extends React.Component {

    constructor() { super(); }
    
    componentWillMount(){     
         routes = [
            {
              path: "/:playerid/search/",
              component: <In_App_Search  {... this.props} />,
            },
            {
              path: "/:playerid/following/",
              component: <Following   {... this.props} />,
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
