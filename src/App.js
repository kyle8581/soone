import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import SummaryPage from "./pages/SummaryPage/index";
import AnalysisPage from "./pages/AnalysisPage/index";
import RankPage from "./pages/RankPage/index";
import ChatPage from "./pages/ChatPage/index";
import ChangePage from "./pages/ChangePage";

import SleepDetail from "./pages/DetailPage/SleepDetail";
import MealDetail from "./pages/DetailPage/MealDetail";
import ToiletDetail from "./pages/DetailPage/ToiletDetail";
import ExerciseDetail from "./pages/DetailPage/ExerciseDetail";
import MedicineDetail from "./pages/DetailPage/MedicineDetail";
import ActivityDetail from "./pages/DetailPage/ActivityDetail";

function App() {
    return (
        <Router>
            <Switch>
                {/* Home */}
                <Route exact path="/:id/summary" component={SummaryPage}/>
                <Route exact path="/:id/analysis" component={AnalysisPage}/>
                <Route exact path="/:id/rank" component={RankPage}/>

                {/* Detail */}
                <Route exact path="/:id/detail/sleep" component={SleepDetail}/>
                <Route exact path="/:id/detail/meal" component={MealDetail}/>
                <Route exact path="/:id/detail/toilet" component={ToiletDetail}/>
                <Route exact path="/:id/detail/exercise" component={ExerciseDetail}/>
                <Route exact path="/:id/detail/medicine" component={MedicineDetail}/>
                <Route exact path="/:id/detail/activity" component={ActivityDetail}/>
                <Route exact path="/:id/chat" component={ChatPage}/>

                {/* Change user */}
                <Route exact path="/users" component={ChangePage}/>

                <Route component={() => <Redirect to="/228/summary"/>}/>
            </Switch>
        </Router>
    );
}

export default App;
