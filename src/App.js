import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Update from './components/Update';
import Read from './components/Read'

function App() {
  return (
     <div className="App">
    <BrowserRouter >
      <Routes>
       
          <Route exact path='/' element={<Create/>}></Route>
          <Route exact path='/read' element={<Read />}></Route>
          
          <Route exact path='/update' element={<Update/>}></Route>
      
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
