import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Slides from './Components/Slides';
import Activities from './Components/Activities';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App font-font_main">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Landing />
              <Activities />
              <Slides />
            </div>
          } />
          <Route path="/signup" element={<></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
