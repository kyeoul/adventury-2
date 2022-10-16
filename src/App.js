
import './App.css';

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Trips from './Pages/Trips';
import Checkout from './Pages/Checkout';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App font-font_main">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
    
  );
}

export default App;
