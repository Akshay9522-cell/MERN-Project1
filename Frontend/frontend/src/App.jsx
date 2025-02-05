
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Insert from './pages/Insert';
import Display from './pages/Display';


function App() {
 
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='insert' element={<Insert/>}/>
    <Route path='display' element={<Display/>}/>

    </Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
