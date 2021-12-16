import "./App.css";
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js"
import People from "./components/People.js"
import Locations from "./components/Locations.js"

function App() {
  return (
    <div className="app">
      <nav>
        <Navbar />
      </nav>
      <main>
        <h1>Hello, world!</h1>
      </main>
    </div>
  );
}

export default App;