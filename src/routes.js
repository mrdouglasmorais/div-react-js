import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Err from './pages/Err'
import Home from './pages/Home'
import Listagem from './pages/Listagem';
import Contato from './pages/Contato';



const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Err/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/listagem' element={<Listagem/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
