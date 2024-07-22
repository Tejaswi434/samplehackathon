import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Loginpage from './components/Loginpage'
import {BrowserRouter,Route,Routes} from 'react-router-dom' 
import Homepage from './components/Homepage';
import Axios from 'axios';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Loginpage/>}/>
       <Route exact path="/register" element={<Registration/>}/> 
    <Route exact path ="/homepage" element ={<Homepage/>}/>
    </Routes>
    
     </BrowserRouter>
  );
}

export default App;
