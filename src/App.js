import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Addproduct from './pages/Addproduct';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  exact path='/' Component={Home}/>
        <Route exact path='/Profile' Component={Profile}/>
        <Route exact path='/signUp' Component={Signup}/>
        <Route exact path='/AddProduct' Component={Addproduct}/>
      </Routes>
    </BrowserRouter>
        
  );
}

export default App;
