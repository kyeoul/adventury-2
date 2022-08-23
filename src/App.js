import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Slides from './Components/Slides';
import Activities from './Components/Activities';

function App() {
  return (
    <div className="App font-font_main">
      <Navbar />
      <Landing />
      <Activities />
      <Slides />
    </div>
  );
}

export default App;
