import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom";

import SummaryPage from "./pages/SummaryPage/index";
import AnalysisPage from "./pages/AnalysisPage/index";
import RankPage from "./pages/RankPage/index";
import DetailPage from "./pages/DetailPage/index";
import ChatPage from "./pages/ChatPage/index";

function App() {
    return (
        <Router>
            <Switch>
                {/* Home */}
                <Route exact path="/" component={SummaryPage}/>
                <Route exact path="/analysis" component={AnalysisPage}/>
                <Route exact path="/rank" component={RankPage}/>

                {/* Detail */}
                <Route exact path="/detail/:habit" component={DetailPage}/>
                <Route exact path="/chat" component={ChatPage}/>

                <Route component={() => <Redirect to="/"/>}/>
            </Switch>
        </Router>
    );
}

export default App;
