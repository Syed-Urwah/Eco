import './App.css'
import Header from './components/Header'
import ArchiveProduct from './pages/ArchiveProduct';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Registration from './pages/Registration';
import { configDotenv } from 'dotenv';
import SideBar from './components/SideBar';
import Dashboard from './pages/Admin/Dashboard';

function App() {

  console.log("sdad")

  return (

    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='products' element={<ArchiveProduct />} />
            <Route path='single-product' element={<SingleProduct />} />
            <Route path='login' element={<Login />} />
            <Route path='registration' element={<Registration />} />
            <Route path="/admin">
              <Route index element={<Dashboard />} />
              <Route path="products" element={<SideBar />} />
              {/* <Route path="new" element={<NewBook />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
