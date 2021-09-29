import "./style/main.css";
import "./style/config.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Dashboard from "./screens/Dashboard";
import CoinDetail from "./screens/CoinDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen min-w-full bg-primary flex">
        <NavBar />
        <main className="flex-auto relative pt-24 mb-10">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/coins/:_id">
              <CoinDetail />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
