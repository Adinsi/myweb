import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Knoweldge from './pages/Knoweldge';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact  path='/' element={<Home/>} />
        <Route path='/competence' element={<Knoweldge/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/*' element={<Notfound/> } />
        </Routes>
       
    
        
      </BrowserRouter>
    </>
  )
}

export default App;
