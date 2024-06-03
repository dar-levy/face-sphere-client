import "./App.css";
import Profiles from "./components/profiles";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfileForm from "./components/profileForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/profiles/:id" component={ProfileForm} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/profiles" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </>
  );
}

export default App;
