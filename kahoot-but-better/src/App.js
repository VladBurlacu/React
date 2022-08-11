import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Settings from "./Components/Settings";
import Questions from "./Components/Questions";
import Results from "./Components/Results";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
              <Settings />
          </Route>
          <Route path="/questions">
              <Questions />
          </Route>
          <Route path="/score">
              <Results />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;


