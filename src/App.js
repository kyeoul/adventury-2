
import './App.css';

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
