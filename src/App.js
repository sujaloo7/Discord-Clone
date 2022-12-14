import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Register from './pages/Register';
import Downloads from './pages/Downloads';

function App() {
  return (
    <>
       <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/download' element={<Downloads/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
