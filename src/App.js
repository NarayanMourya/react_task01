import './App.css';
import {Route,BrowserRouter,Routes} from "react-router-dom";
import Login from './components/Login';
import Homepage from './components/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Homepage" element={<Homepage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
