import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/Homepage";
import { AboutPage } from "./components/Aboutpage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CounterPage } from "./components/Counterpage";

export function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="p-4">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/counter" component={CounterPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
