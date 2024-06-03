import "./App.css";
import Profiles from "./components/profiles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Profiles} />
    </div>
  );
}

export default App;
