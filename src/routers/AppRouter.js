import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HomePage from "../components/pages/HomePage.jsx";
import ResultsPage from "../components/pages/ResultsPage.jsx";
import DetailsPage from "../components/pages/DetailsPage.jsx";
import Header from "../components/common/Header.jsx";
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/results" component={ResultsPage} />
                <Route path="/detail" component={DetailsPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
