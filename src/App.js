import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Add from './Components/Pages/Add';
import Show from './Components/Pages/Show';
import Update from './Components/Pages/Update';
import Delete from './Components/Pages/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/Add' element={<Add/>} ></Route>
            <Route path='/Show' element={<Show/>} ></Route>
            <Route path='/Update/:userId' element={<Update/>} ></Route>
            <Route path='/Delete/:userId' element={<Delete/>} ></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
