import './App.css'
import Header from './components/Header'
import ArchiveProduct from './pages/ArchiveProduct';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from './pages/SingleProduct';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<Home />} />
          <Route path='products' element={<ArchiveProduct />} />
          <Route path='single-product' element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
