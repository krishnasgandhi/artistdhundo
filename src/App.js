import './App.css';
import Home from './component/home/Home';
import CastingCall from './component/casting-call/CastingCall'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Router>
          <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cast"><CastingCall /></Route>
</Switch>
    </Router>
  );
}

export default App;
