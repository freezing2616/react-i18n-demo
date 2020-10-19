import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import loadable from '@loadable/component'
import App from './App';

import routeConfig from './routeConfig';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                {
                    routeConfig.map((item) => {
                        const Component = loadable(() => import(`${item.component}`));
                        return (
                            <Route key={item.name} path={item.path}>
                                <Component />
                            </Route>
                        )
                    })
                }
            </Switch>
        </Router>
    )
}