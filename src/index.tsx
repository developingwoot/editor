import * as React from "react";
import * as ReactDOM from "react-dom";
import {  Route, Router, hashHistory, IndexRoute } from "react-router";
import { Navigation } from "./components/layout/navigation";
import { Dashboard } from "./components/pages/dashboard";
import { Posts } from "./components/pages/posts";


export default /**
 * App extends React.Component
 */
class App extends React.Component <{}, {}> {
    render() {
        return (
            <div>
                <Navigation />
                <div id="wrapper" className="container">
                <section id="content">
                    <div className="inner">
                    <div id="app">
                        {this.props.children}
                    </div>
                    </div>
                </section>
                </div>
            </div>
        )
    }
}

ReactDOM.render((
       <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="posts" component={Posts}/>
            </Route>
        </Router>
   ), document.getElementById("app-main")
);