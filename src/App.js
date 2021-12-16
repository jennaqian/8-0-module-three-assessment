import "./App.css";
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import People from "./components/People.js"
import Locations from "./components/Locations.js"
import Movies from "./components/Movies.js"

function App() {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </div>
  );
}

export default App;