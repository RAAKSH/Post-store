import React from "react";
import {  Route, Routes } from "react-router-dom";
import  { Login } from "./Components/login";
import Dashboard from "./Components/dashboard";

import AddPage from "./Components/add";
import EditPage from "./Components/edit";
import Register from "./Components/register";
import NotFound from "./Components/notfound";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from './Components/chart';

function App() {

    return (
      <div className="App">
        
          <Routes>  
            <Route exact path="/" element={<Login/>} />
            <Route  exact path="/dashboard" element={ <Dashboard /> } />
            <Route  path="/chart" element={ <Chart /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/addPost" element={<AddPage />} />
            <Route path="/editPost/:id" element={<EditPage />} />
            <Route path="*" element={NotFound} />
          </Routes>
        
      </div>
    );
    } 

export default App;
