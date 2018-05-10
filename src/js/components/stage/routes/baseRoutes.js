import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components
import Dashboard from "../../home/dashboard"
import Player_History from "../../history/history"; 
import Settings from "../../settings/settings";
import ClearData from "../../settings/clearData";

////////////////////////////////////////////////////////////
// then our route config
const routes = [
    {
      path: "/:playerid/",
      component: Dashboard,
      exact: true,
      
    },
    {
      path: "/:playerid/history",
      component: Player_History,
    },
    {
        path: "/:playerid/settings",
        component: Settings, 
    }
  ];

const RouteConfigExample = () => (
    <div>
    {routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))}
    </div>
);

export default RouteConfigExample;