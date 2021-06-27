import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { NavBar } from "./components/NavBar";
import { IntroPage } from "./pages/Intropage";
import { AboutPage } from "./pages/Aboutpage";
import { CounterPage } from "./pages/Counterpage";
import { HtmlPage } from "./pages/Htmlpage";
import { LoginPage } from "./pages/Loginpage";
import { SignupPage } from './pages/Signuppage';
import { AuthProvider } from "./AuthProvider";

export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <NavBar />
          <div className="p-4">
            <Switch>
              <Route path="/" exact component={IntroPage} />
              <Route path="/html" component={HtmlPage} />
              <Route path="/counter" component={CounterPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <ProtectedRoute redirectTo="/login" path="/about" component={AboutPage} />
            </Switch>
          </div>
        </div>
        </Router>
    </AuthProvider>
  );
}
