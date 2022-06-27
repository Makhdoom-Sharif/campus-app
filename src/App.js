import logo from './logo.svg';
import './App.css';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPage from './pages/AdminPage';
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<AdminPage/>} />
    </Routes>
      <Routes>
        <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
