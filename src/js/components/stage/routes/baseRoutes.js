import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Import Base Components
import Dashboard from "../../home/dashboard"
import Player_History from "../../history/history"; 
import Settings from "../../settings/settings";
import News_Feed from '../../newsfeed/newsfeed';

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
      exact: true,
    },
    {
        path: "/:playerid/settings",
        component: Settings, 
        exact: true,
      },
      {
          path: "/:playerid/news",
          component: News_Feed, 
          exact: true,
        }
  ];

const RouteConfigExample = () => (
    <div>
    {routes.map((route, index) => (
                            // Render more <Route>s with the same paths as
                                                        // above, but different components this time.
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
