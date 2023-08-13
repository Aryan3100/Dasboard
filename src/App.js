import React from 'react';
import './App.css';
import Sidebar from './compoonent/Sidebar';
import Home from './pages/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
     <Sidebar>
     <Routes>
        <Route path="/"element={<Home/>}/>
      </Routes>
     </Sidebar>
      </BrowserRouter>
  );
}

export default App;
