import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from "react";

import Home from './Components/Home'
import About from './Components/About'
import Layout from './Components/Layout'
import Login from './Components/Login'; // Import the Login component
import Signup from './Components/Signup'; // Import the Signup component
import ItemTable from './Components/ItemTable';
import Dashboard from './Components/dashboard';
import Order_Table from './Components/recentOrders';
import CollapsibleTable from './Components/products';


function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
      
            <Route path="/" element={<Layout />}>
            
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} /> 
            <Route path="signup" element={<Signup />} /> 
            <Route path="inventory" element={<ItemTable/>} />
            <Route path="dashboard" element={<Dashboard/>} />
            <Route path="test1" element={<Order_Table/>} />
            <Route path="test2" element={<CollapsibleTable/>} />
            
          
          
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;