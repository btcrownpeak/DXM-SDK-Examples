import React from "react";
import ReactDOM from "react-dom";
import {HashRouter as Router} from "react-router-dom";
import {Switch} from "react-router";
import {renderRoutes} from "react-router-config";
import HomePage from "../pages/homePage";
import BlogPage from "../pages/blogPage";

export default class Routing {
    static get routes()
    {
        return this._routes || [];
    }

    static set routes(r)
    {
        this._routes = r;
    }

    static getCmsAssetId(path)
    {
        return (Routing.routes.find(r => r.path === path) || {}).cmsassetid;
    }

    static processRoutes(routeFile)
    {
        const componentRegistry = {
            HomePage,
            BlogPage
        };

        fetch(routeFile)
            .then(res => res.json())
            .then((routeData) => {
                Object.keys(routeData).forEach(function(key) {
                    const route = {
                        "path": routeData[key].path,
                        "exact": (routeData[key].exact === true),
                        "component": componentRegistry[routeData[key].component],
                        "cmsassetid": routeData[key].cmsassetid
                    };
                    Routing.routes.push(route);
                });
                ReactDOM.render(
                    <Router>
                        <Switch>
                            {renderRoutes(Routing.routes)}
                        </Switch>
                    </Router>,
                    document.getElementById('app')
                );
            })
            .catch(console.log);
    }
}

Routing.routes = [];
