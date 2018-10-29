import React from "react";
import { render } from "react-dom";
// Import routing components
import { Router, Route } from "react-router";

import App from "./components/App.jsx";
import styles from "./scss/application.scss";

class Car extends Component {
    render() {
        return <h1>Cars page</h1>;
    }
}

render(
    <Router>
        <Route path="/" component={App} />
        <Route path="/cars" component={Car} />
    </Router>,
    document.getElementById("root")
);
