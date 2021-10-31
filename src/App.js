import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" />

                <Route component={() => <Redirect to="/"/>}/>
            </Switch>
        </Router>
    );
}

export default App;
