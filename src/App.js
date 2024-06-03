import "./App.css";
import Profiles from "./components/profiles/profiles";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfileForm from "./components/profile-form/profileForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
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
