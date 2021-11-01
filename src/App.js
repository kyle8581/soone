import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

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
                <Route exact path="/:id/summary" component={SummaryPage}/>
                <Route exact path="/:id/analysis" component={AnalysisPage}/>
                <Route exact path="/:id/rank" component={RankPage}/>

                {/* Detail */}
                <Route exact path="/:id/detail/:habit" component={DetailPage}/>
                <Route exact path="/:id/chat" component={ChatPage}/>

                <Route component={() => <Redirect to="/1/summary"/>}/>
            </Switch>
        </Router>
    );
}

export default App;
