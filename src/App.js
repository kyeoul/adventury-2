
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
import Account from './Pages/Account';
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyChglR3MsdE_E22RNrQtHcfVGdF-4hPBUY",
  authDomain: "adventury-351d2.firebaseapp.com",
  projectId: "adventury-351d2",
  storageBucket: "adventury-351d2.appspot.com",
  messagingSenderId: "463109852266",
  appId: "1:463109852266:web:61c8f100718a4b92c84e13"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

function App() {

  return (
    <div className="App font-font_main">
      <Routes>
        <Route path="/" element={<Home app={app}/>}/>
        <Route path="/login" element={<Login app={app}/>} />
        <Route path="/signup" element={<Signup app={app}/>} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/checkout" element={<Checkout app={app}/>} />
        <Route path="/account" element={<Account app={app}/>} />
      </Routes>
    </div>
    
  );
}

export default App;
