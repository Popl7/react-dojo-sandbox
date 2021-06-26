import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { IntroPage } from "./pages/Intropage";
import { AboutPage } from "./pages/Aboutpage";
import { CounterPage } from "./pages/Counterpage";
import { HtmlPage } from "./pages/Htmlpage";

export function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="p-4">
          <Switch>
            <Route path="/" exact component={IntroPage} />
            <Route path="/html" component={HtmlPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/counter" component={CounterPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
