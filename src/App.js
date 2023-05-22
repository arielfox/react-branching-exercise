import './App.css';
import Header from './features/header/Header'
import Question from './features/question/Question'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
} from "react-router-dom"

function App() {
  return (
      <div className="App">
          <Header />
          <Router>
              <Switch>
                  <Route path="/:id">
                      <Question />
                  </Route>
                  <Route path="/">
                      <Redirect to="/0" />
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;

