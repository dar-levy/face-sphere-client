import "./App.css";
import Profiles from "./components/profiles/profiles";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProfileForm from "./components/profile-form/profileForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";
import { Component } from "react";
import * as auth from "./services/authService";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/profiles/:id"
              element={
                <ProtectedRoute path="/profiles/:id" component={ProfileForm} />
              }
            />
            <Route path="/profiles" element={<Profiles user={user} />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/profiles" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
