import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
const App = () => (
    <MuiThemeProvider>
        <AppRouter />
    </MuiThemeProvider>
);
render(<App />, document.getElementById("app"));
