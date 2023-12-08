import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { useState, useLocation, useEffect } from "react";

import Home from './Components/Home'
import About from './Components/About'
import Layout from './Components/Layout'
import Login from './Components/Login'; // Import the Login component
import Signup from './Components/Signup'; // Import the Signup component
import Inventory from './Components/inventory';
import Dashboard from './Components/dashboard';
import Order_Table from './Components/recentOrders';
import CollapsibleTable from './Components/products';
// import Create from './Components/create/create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="about" element={<About />} />
            {/* <Route path='create' element={<Create />} /> */}
            <Route path="inventory" element={<Inventory />} />
            {/* <Route path="dashboard" element={<Dashboard/>} /> */}
            <Route path="test1" element={<Order_Table />} />
            <Route path="test2" element={<CollapsibleTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
